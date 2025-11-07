// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Nav effects on scroll
const nav = document.querySelector('.nav');
const scrollProgress = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Nav background
  if (currentScroll > 100) {
    nav.style.background = 'rgba(12, 13, 18, 0.95)';
    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.background = 'rgba(12, 13, 18, 0.8)';
    nav.style.boxShadow = 'none';
  }
  
  // Progress bar
  if (scrollProgress) {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (currentScroll / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  }
  
  // Back to top button
  if (backToTop) {
    if (currentScroll > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
});

// Back to top
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Fade in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Highlight active page in nav
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.color = 'var(--color-accent)';
  }
});

// Carousel for event images
class EventCarousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.track = this.carousel.querySelector('.carousel-track');
    this.images = Array.from(this.track.querySelectorAll('.event-image'));
    this.prevBtn = this.carousel.querySelector('.carousel-btn-prev');
    this.nextBtn = this.carousel.querySelector('.carousel-btn-next');
    this.dots = Array.from(this.carousel.querySelectorAll('.carousel-dot'));
    this.currentIndex = 0;
    
    if (this.images.length > 1) {
      this.init();
    }
  }
  
  init() {
    // Button clicks
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }
    
    // Dot clicks
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Touch swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    this.carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    });
  }
  
  goToSlide(index) {
    this.images[this.currentIndex].classList.remove('active');
    this.dots[this.currentIndex].classList.remove('active');
    
    this.currentIndex = index;
    
    this.images[this.currentIndex].classList.add('active');
    this.dots[this.currentIndex].classList.add('active');
  }
  
  next() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.goToSlide(nextIndex);
  }
  
  prev() {
    const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.goToSlide(prevIndex);
  }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.event-carousel');
  carousels.forEach(carousel => {
    new EventCarousel(carousel);
  });
  
  const lightboxElement = document.getElementById('lightbox');
  if (lightboxElement) {
    new Lightbox();
  }
});

// Lightbox for viewing images
class Lightbox {
  constructor() {
    this.lightbox = document.getElementById('lightbox');
    if (!this.lightbox) return;
    
    this.lightboxImage = this.lightbox.querySelector('.lightbox-image');
    this.lightboxCaption = this.lightbox.querySelector('.lightbox-caption');
    this.closeBtn = this.lightbox.querySelector('.lightbox-close');
    this.prevBtn = this.lightbox.querySelector('.lightbox-prev');
    this.nextBtn = this.lightbox.querySelector('.lightbox-next');
    
    this.currentCarousel = null;
    this.currentImages = [];
    this.currentIndex = 0;
    
    this.init();
  }
  
  init() {
    // Click on carousel images to open lightbox
    const allCarousels = document.querySelectorAll('.event-carousel');
    allCarousels.forEach(carousel => {
      const images = carousel.querySelectorAll('.event-image');
      images.forEach((img, index) => {
        img.addEventListener('click', () => {
          this.currentCarousel = carousel;
          this.currentImages = Array.from(images);
          this.open(index);
        });
      });
    });
    
    this.closeBtn.addEventListener('click', () => this.close());
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    
    // Close on background click
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.close();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }
  
  open(index) {
    this.currentIndex = index;
    const img = this.currentImages[index];
    
    this.lightboxImage.src = img.src;
    this.lightboxImage.alt = img.alt;
    this.lightboxCaption.textContent = img.alt;
    
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Hide navigation if only one image
    if (this.currentImages.length <= 1) {
      this.prevBtn.style.display = 'none';
      this.nextBtn.style.display = 'none';
    } else {
      this.prevBtn.style.display = 'flex';
      this.nextBtn.style.display = 'flex';
    }
  }
  
  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.currentImages.length;
    this.updateImage();
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.updateImage();
  }
  
  updateImage() {
    const img = this.currentImages[this.currentIndex];
    this.lightboxImage.src = img.src;
    this.lightboxImage.alt = img.alt;
    this.lightboxCaption.textContent = img.alt;
  }
}

// Track button clicks for analytics (placeholder)
document.querySelectorAll('.hero .btn').forEach(button => {
  button.addEventListener('click', () => {
    console.log('CTA clicked:', button.textContent.trim());
  });
});

console.log('St. Clair Robotics Club website loaded!');
