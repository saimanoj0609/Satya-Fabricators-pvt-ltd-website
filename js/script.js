/* ============================================
   SATYA FABRICATORS — Main JavaScript
   Sticky nav, mobile menu, scroll animations,
   smooth scroll, contact form
   ============================================ */

(function () {
  'use strict';

  // --- Sticky Header ---
  const header = document.getElementById('header');
  const SCROLL_THRESHOLD = 60;

  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('header--scrolled');
    } else {
      // Only remove on homepage (banner has dark bg)
      if (header.classList.contains('header--scrolled') && !document.querySelector('.page-header')) {
        header.classList.remove('header--scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  // Run once on load
  handleHeaderScroll();

  // --- Mobile Navigation ---
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const navOverlay = document.getElementById('navOverlay');

  function openNav() {
    nav.classList.add('nav--open');
    navToggle.classList.add('nav-toggle--active');
    navOverlay.classList.add('nav-overlay--visible');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    nav.classList.remove('nav--open');
    navToggle.classList.remove('nav-toggle--active');
    navOverlay.classList.remove('nav-overlay--visible');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (nav.classList.contains('nav--open')) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav__link, .nav__cta').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('nav--open')) {
        closeNav();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      closeNav();
    }
  });

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      // Only handle same-page anchors
      if (href.startsWith('#') || (href.includes('#') && href.split('#')[0] === '' )) {
        var targetId = href.split('#')[1];
        var target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          var headerOffset = 80;
          var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // --- Scroll Reveal Animations ---
  var revealElements = document.querySelectorAll('.reveal');

  function checkReveal() {
    var windowHeight = window.innerHeight;
    revealElements.forEach(function (el) {
      var elementTop = el.getBoundingClientRect().top;
      var revealPoint = 120;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('reveal--visible');
      }
    });
  }

  window.addEventListener('scroll', checkReveal, { passive: true });
  // Run on load to reveal elements already in viewport
  window.addEventListener('load', checkReveal);
  // Also run immediately
  checkReveal();

  // --- Contact Form (frontend only) ---
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      var firstName = document.getElementById('firstName');
      var lastName = document.getElementById('lastName');
      var email = document.getElementById('email');
      var subject = document.getElementById('subject');
      var message = document.getElementById('message');

      var isValid = true;
      [firstName, lastName, email, subject, message].forEach(function (field) {
        if (field && !field.value.trim()) {
          field.style.borderColor = '#ef4444';
          isValid = false;
        } else if (field) {
          field.style.borderColor = '';
        }
      });

      // Email format check
      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = '#ef4444';
        isValid = false;
      }

      if (!isValid) return;

      // Simulate form submission
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
      }
    });

    // Clear error styling on input
    contactForm.querySelectorAll('input, textarea, select').forEach(function (input) {
      input.addEventListener('input', function () {
        this.style.borderColor = '';
      });
    });
  }

  // --- Counter Animation for Stats ---
  var statElements = document.querySelectorAll('.stats-bar__value');
  var statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    statElements.forEach(function (el) {
      var text = el.textContent;
      // Extract number
      var match = text.match(/(\d+)/);
      if (!match) return;

      var target = parseInt(match[1], 10);
      var suffix = text.replace(match[1], '');
      var duration = 1500;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(step);
    });
    statsAnimated = true;
  }

  // Trigger counter when stats come into view
  function checkStats() {
    var statsSection = document.querySelector('.stats-bar');
    if (statsSection && !statsAnimated) {
      var rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateCounters();
      }
    }
  }

  window.addEventListener('scroll', checkStats, { passive: true });
  window.addEventListener('load', checkStats);

  // --- Lightbox Gallery ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCounter = document.getElementById('lightboxCounter');

  if (lightbox) {
    const items = document.querySelectorAll('.lightbox-item');
    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('lightbox--active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('lightbox--active');
      document.body.style.overflow = '';
    }

    function updateLightbox() {
      const item = items[currentIndex];
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxTitle.textContent = item.dataset.title || '';
      lightboxDesc.textContent = item.dataset.desc || '';
      lightboxCounter.textContent = (currentIndex + 1) + ' / ' + items.length;
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % items.length;
      updateLightbox();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateLightbox();
    }

    items.forEach(function (item, index) {
      item.addEventListener('click', function () {
        openLightbox(index);
      });
    });

    lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox__next').addEventListener('click', nextImage);
    lightbox.querySelector('.lightbox__prev').addEventListener('click', prevImage);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('lightbox--active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    });
  }

})();
