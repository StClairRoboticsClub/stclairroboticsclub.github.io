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
const scrollProgress = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Nav background effect
  if (currentScroll > 100) {
    nav.style.background = 'rgba(12, 13, 18, 0.95)';
    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.background = 'rgba(12, 13, 18, 0.8)';
    nav.style.boxShadow = 'none';
  }
  
  // Scroll progress bar
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
  
  lastScroll = currentScroll;
});

// Back to top button click
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

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
  
  // Initialize lightbox only if it exists on the page
  const lightboxElement = document.getElementById('lightbox');
  if (lightboxElement) {
    new Lightbox();
  }
});

// Lightbox for full-size image viewing
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
    this.previousFocus = null;
    this.focusableElements = null;
    
    this.init();
  }
  
  init() {
    // Add click listeners to all carousel images
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
    
    // Close button
    this.closeBtn.addEventListener('click', () => this.close());
    
    // Navigation buttons
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
    
    // Focus management for accessibility
    this.previousFocus = document.activeElement;
    this.closeBtn.focus();
    this.trapFocus();
  }
  
  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
    
    // Restore focus to previously focused element
    if (this.previousFocus && this.previousFocus.focus) {
      this.previousFocus.focus();
    }
  }
  
  trapFocus() {
    // Get all focusable elements in the lightbox
    const focusableSelectors = [
      this.closeBtn,
      this.prevBtn.style.display !== 'none' ? this.prevBtn : null,
      this.nextBtn.style.display !== 'none' ? this.nextBtn : null
    ].filter(el => el !== null);
    
    this.focusableElements = focusableSelectors;
    
    // Trap focus within lightbox
    this.lightbox.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      
      const firstElement = this.focusableElements[0];
      const lastElement = this.focusableElements[this.focusableElements.length - 1];
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
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

// Lead Capture Form Validation and Submission
const joinForm = document.getElementById('joinForm');
if (joinForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const formSuccess = document.getElementById('form-success');
  
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Real-time validation
  nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
    } else {
      nameError.textContent = '';
    }
  });
  
  emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
    } else {
      emailError.textContent = '';
    }
  });
  
  // Form submission
  joinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    formSuccess.classList.remove('show');
    
    // Validate
    let isValid = true;
    
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    }
    
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Get form data
    const formData = new FormData(joinForm);
    
    // Try Formspree submission first (if configured)
    const formspreeAction = joinForm.getAttribute('data-formspree-action');
    
    // Check if Formspree is configured (not placeholder)
    if (formspreeAction && !formspreeAction.includes('YOUR_FORM_ID')) {
      try {
        const response = await fetch(formspreeAction, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          formSuccess.classList.add('show');
          joinForm.reset();
          return;
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Formspree error, falling back to mailto:', error);
        // Fall through to mailto fallback
      }
    }
    
    // Use mailto fallback (works immediately without backend)
    mailtoFallback(formData);
  });
  
  // Mailto fallback function
  function mailtoFallback(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const interests = formData.get('interests');
    
    const subject = encodeURIComponent('New Club Interest Form Submission');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterests: ${interests || 'Not specified'}\n\nPlease note: This is an automated fallback email as the form backend is not configured.`
    );
    
    window.location.href = `mailto:contact.info@stclairroboticsclub.ca?subject=${subject}&body=${body}`;
    
    // Show success message after a brief delay
    setTimeout(() => {
      formSuccess.classList.add('show');
      joinForm.reset();
    }, 1000);
  }
}

// Analytics Hooks - Click Tracking
// Note: Placeholder for GA4 or other analytics. Currently logs to console.
// To enable Google Analytics 4, add your gtag.js script and uncomment the gtag calls below.

// Track Hero CTA clicks
document.querySelectorAll('.hero .btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = button.textContent.trim();
    console.log('Analytics: Hero CTA clicked -', buttonText);
    
    // Uncomment when GA4 is configured:
    // gtag('event', 'cta_click', {
    //   'event_category': 'engagement',
    //   'event_label': buttonText,
    //   'value': 'hero'
    // });
  });
});

// Track outbound Discord links
document.querySelectorAll('a[href*="discord.gg"]').forEach(link => {
  link.addEventListener('click', (e) => {
    console.log('Analytics: Discord link clicked from', window.location.pathname);
    
    // Uncomment when GA4 is configured:
    // gtag('event', 'outbound_click', {
    //   'event_category': 'engagement',
    //   'event_label': 'Discord',
    //   'value': window.location.pathname
    // });
  });
});

// Track outbound Instagram links
document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
  link.addEventListener('click', (e) => {
    console.log('Analytics: Instagram link clicked from', window.location.pathname);
    
    // Uncomment when GA4 is configured:
    // gtag('event', 'outbound_click', {
    //   'event_category': 'engagement',
    //   'event_label': 'Instagram',
    //   'value': window.location.pathname
    // });
  });
});

// Track Join form submissions (already tracked in form handler above)

console.log('St. Clair Robotics Club - Website loaded successfully!');
