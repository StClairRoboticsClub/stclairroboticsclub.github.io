// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isActive = navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    navToggle.setAttribute('aria-expanded', isActive);
  });

  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.style.background = 'rgba(12, 13, 18, 0.95)';
    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.background = 'rgba(12, 13, 18, 0.8)';
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
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

// Observe feature cards and other elements
document.querySelectorAll('.feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Add active page indicator to navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.color = 'var(--color-accent)';
  }
});

// Event Photo Carousel
class EventCarousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.track = this.carousel.querySelector('.carousel-track');
    this.images = Array.from(this.track.querySelectorAll('.event-image'));
    this.prevBtn = this.carousel.querySelector('.carousel-btn-prev');
    this.nextBtn = this.carousel.querySelector('.carousel-btn-next');
    this.dots = Array.from(this.carousel.querySelectorAll('.carousel-dot'));
    this.currentIndex = 0;
    this.autoSlideInterval = null;
    this.autoSlideDelay = 5000; // 5 seconds
    
    // Only initialize if there are multiple images
    if (this.images.length > 1) {
      this.init();
    }
  }
  
  init() {
    // Add event listeners for buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.stopAutoSlide();
        this.prev();
        this.startAutoSlide();
      });
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.stopAutoSlide();
        this.next();
        this.startAutoSlide();
      });
    }
    
    // Add event listeners for dots
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.stopAutoSlide();
        this.goToSlide(index);
        this.startAutoSlide();
      });
    });
    
    // Keyboard navigation
    this.carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.stopAutoSlide();
        this.prev();
        this.startAutoSlide();
      }
      if (e.key === 'ArrowRight') {
        this.stopAutoSlide();
        this.next();
        this.startAutoSlide();
      }
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      this.stopAutoSlide();
    });
    
    this.carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
      this.startAutoSlide();
    });
    
    // Pause auto-slide on hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
    this.carousel.addEventListener('mouseleave', () => this.startAutoSlide());
    
    // Start auto-slide
    this.startAutoSlide();
  }
  
  startAutoSlide() {
    if (this.images.length <= 1) return;
    
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, this.autoSlideDelay);
  }
  
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }
  
  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
  
  goToSlide(index) {
    // Remove active class from current image and dot
    this.images[this.currentIndex].classList.remove('active');
    this.dots[this.currentIndex].classList.remove('active');
    
    // Update current index
    this.currentIndex = index;
    
    // Add active class to new image and dot
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

// Initialize all carousels on the page
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.event-carousel');
  carousels.forEach(carousel => {
    new EventCarousel(carousel);
  });
});

console.log('St. Clair Robotics Club - Website loaded successfully!');
