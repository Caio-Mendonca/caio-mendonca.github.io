// Modern animations and interactions
class ModernAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupHeaderScroll();
    this.setupSmoothScrolling();
    this.setupParallaxEffects();
    this.setupSkillHovers();
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Add scroll animation class to elements
    const animateElements = document.querySelectorAll('section, .skill, #jobs, .type-contact a');
    animateElements.forEach(el => {
      el.classList.add('scroll-animate');
      observer.observe(el);
    });
  }

  setupHeaderScroll() {
    const header = document.getElementById('desktop');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerHeight = 80;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupParallaxEffects() {
    const programmer = document.getElementById('programmer');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (programmer) {
        programmer.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  setupSkillHovers() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
      skill.addEventListener('mouseenter', () => {
        // Add subtle glow effect
        skill.style.boxShadow = '0 0 30px rgba(45, 212, 191, 0.3)';
      });
      
      skill.addEventListener('mouseleave', () => {
        skill.style.boxShadow = '';
      });
    });
  }
}

// Typewriter effect for hero text
function modernTypeWriter(elementID, text, speed = 50) {
  const element = document.getElementById(elementID);
  if (!element) return;
  
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  // Add a slight delay before starting
  setTimeout(type, 500);
}

// Enhanced mobile menu functionality
function setupMobileMenu() {
  const menuItems = document.querySelectorAll("ul#menu-content li a");
  const checkbox = document.querySelector("input[type=checkbox]");
  
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      checkbox.checked = false;
      
      // Add smooth close animation
      const menuContent = document.getElementById('menu-content');
      menuContent.style.transition = 'transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1)';
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize modern animations
  new ModernAnimations();
  
  // Setup mobile menu
  setupMobileMenu();
  
  // Start typewriter effect after language is set
  setTimeout(() => {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const roleText = translations[currentLang].role;
    modernTypeWriter("type-name", roleText);
  }, 100);
});

// Smooth page transitions
window.addEventListener('beforeunload', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease-out';
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.5s ease-in';
});