document.addEventListener('DOMContentLoaded', () => {

  // ===== Custom Dot Cursor =====
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    // Snap dot to mouse, ring follows with lerp
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .skill-tag, .contact-card, .btn-live-project, .nav-link, .btn-email-me, .btn-gradient-cta, .sound-btn');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('cursor-hover');
        cursorRing.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('cursor-hover');
        cursorRing.classList.remove('cursor-hover');
      });
    });

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
    });
  }

  // ===== Loading Screen =====
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
      }, 1200);
    });
    // Failsafe: hide loader after 3s
    setTimeout(() => loadingScreen.classList.add('hidden'), 3000);
  }

  // ===== Video Audio Toggle & Auto Mute =====
  const soundBtn = document.getElementById('sound-btn');
  const heroVideo = document.getElementById('hero-video');
  const soundTip = document.getElementById('sound-tip');
  const heroSection = document.getElementById('hero');

  if (soundBtn && heroVideo) {
    const speakerMuted = soundBtn.querySelector('.speaker-muted');
    const speakerUnmuted = soundBtn.querySelector('.speaker-unmuted');

    const toggleSound = (forceMute) => {
      const shouldMute = typeof forceMute === 'boolean' ? forceMute : !heroVideo.muted;

      heroVideo.muted = shouldMute;

      if (shouldMute) {
        speakerMuted.style.display = 'block';
        speakerUnmuted.style.display = 'none';
        soundBtn.setAttribute('aria-label', 'Unmute video');
        if (soundTip) {
          soundTip.style.display = 'block';
          soundTip.textContent = 'Tap for sound';
        }
      } else {
        speakerMuted.style.display = 'none';
        speakerUnmuted.style.display = 'block';
        soundBtn.setAttribute('aria-label', 'Mute video');
        if (soundTip) {
          soundTip.style.display = 'none';
        }
      }
    };

    soundBtn.addEventListener('click', () => toggleSound());

    // Auto mute video when it leaves the viewport
    if (heroSection && 'IntersectionObserver' in window) {
      const videoObserver = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) {
          toggleSound(true); // Force mute
        }
      }, {
        threshold: 0,
        rootMargin: '-20% 0px -80% 0px'
      });
      videoObserver.observe(heroSection);
    }
  }

  // ===== Scroll Jack (Hero -> About) =====
  let hasScrollJacked = false;

  const performScrollJack = () => {
    if (hasScrollJacked || window.scrollY > 50) return;
    hasScrollJacked = true;
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Listen to wheel/scroll down when at top
  window.addEventListener('wheel', (e) => {
    if (window.scrollY < 10 && e.deltaY > 0) {
      e.preventDefault();
      performScrollJack();
    }
  }, { passive: false });

  // Listen to down arrow key / page down / space when at top
  window.addEventListener('keydown', (e) => {
    if (window.scrollY < 10 && (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ')) {
      e.preventDefault();
      performScrollJack();
    }
  });

  // Reset scroll-jack lock when scrolling back to the absolute top
  window.addEventListener('scroll', () => {
    if (window.scrollY < 5) {
      hasScrollJacked = false;
    }
  });

  // ===== Viewport Entrance Slide Reveal (te-style) =====
  const revealElements = document.querySelectorAll(
    '.reveal-fade, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right'
  );

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || '0';
          entry.target.style.transitionDelay = `${delay}s`;
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: reveal all immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ===== Biography Text Scroll Reveal (vk/yk-style) =====
  const bioParagraph = document.getElementById('about-bio');
  if (bioParagraph) {
    const text = bioParagraph.textContent.trim();
    bioParagraph.innerHTML = '';

    const words = text.split(/\s+/);
    let globalIndex = 0;
    const chars = [];

    words.forEach((wordText, wordIdx) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';

      const wordChars = Array.from(wordText);
      wordChars.forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';

        const staticSpan = document.createElement('span');
        staticSpan.className = 'char-static';
        staticSpan.textContent = char;
        charSpan.appendChild(staticSpan);

        const activeSpan = document.createElement('span');
        activeSpan.className = 'char-active';
        activeSpan.textContent = char;
        charSpan.appendChild(activeSpan);

        wordSpan.appendChild(charSpan);
        chars.push({
          element: activeSpan,
          index: globalIndex
        });
        globalIndex++;
      });

      bioParagraph.appendChild(wordSpan);

      // Append space between words
      if (wordIdx < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'char';

        const staticSpace = document.createElement('span');
        staticSpace.className = 'char-static';
        staticSpace.innerHTML = '&nbsp;';
        spaceSpan.appendChild(staticSpace);

        const activeSpace = document.createElement('span');
        activeSpace.className = 'char-active';
        activeSpace.innerHTML = '&nbsp;';
        spaceSpan.appendChild(activeSpace);

        bioParagraph.appendChild(spaceSpan);
        chars.push({
          element: activeSpace,
          index: globalIndex
        });
        globalIndex++;
      }
    });

    const totalChars = globalIndex;

    const handleTextRevealScroll = () => {
      const rect = bioParagraph.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Trigger starts when top of paragraph reaches 85% of screen height
      const triggerStart = viewHeight * 0.85;
      // Trigger ends when bottom of paragraph reaches 15% of screen height
      const triggerEnd = viewHeight * 0.15;

      const progressRaw = (triggerStart - rect.top) / (triggerStart - triggerEnd);
      const progress = Math.max(0, Math.min(1, progressRaw));

      chars.forEach((char) => {
        const startStep = char.index / totalChars;
        const endStep = (char.index + 1.5) / totalChars; // slight overlap offset

        let opacity = 0.15; // default unrevealed
        if (progress > endStep) {
          opacity = 1.0;
        } else if (progress > startStep) {
          // Interpolate opacity between 0.15 and 1.0
          const stepProgress = (progress - startStep) / (endStep - startStep);
          opacity = 0.15 + (1.0 - 0.15) * stepProgress;
        }

        char.element.style.opacity = opacity;
      });
    };

    window.addEventListener('scroll', handleTextRevealScroll);
    window.addEventListener('resize', handleTextRevealScroll);
    // Call once initially to set correct opacity based on position
    handleTextRevealScroll();
  }

  // ===== Sticky Projects Card Stacking — Slide & Cover =====
  const projectCards = document.querySelectorAll('.project-deck-card');

  if (projectCards.length > 0) {
    const totalCards = projectCards.length;
    const CARD_TOP_GAP = 20; // px between each card's sticky top
    const BASE_TOP = 80;     // first card sticks at this px from top

    const initCardTops = () => {
      projectCards.forEach((card, index) => {
        card.style.zIndex = index + 1;
        if (window.innerWidth >= 768) {
          card.style.top = `${BASE_TOP + index * CARD_TOP_GAP}px`;
        } else {
          card.style.top = '';
        }
      });
    };

    initCardTops();

    const handleCardStackingScroll = () => {
      if (window.innerWidth < 768) {
        projectCards.forEach((card) => {
          const inner = card.querySelector('.project-card-inner');
          if (inner) {
            inner.style.transform = '';
            inner.style.borderRadius = '';
            inner.style.opacity = '';
          }
        });
        return;
      }

      projectCards.forEach((card, index) => {
        const inner = card.querySelector('.project-card-inner');
        if (!inner) return;

        const rect = card.getBoundingClientRect();
        const stickyTop = BASE_TOP + index * CARD_TOP_GAP;

        // How far the card is from being "fully stuck"
        // When rect.top === stickyTop, card is fully in its sticky position
        const isStuck = rect.top <= stickyTop + 2;

        if (isStuck && index < totalCards - 1) {
          // This card is stuck and there are cards after it
          // Scale it down as the next card approaches
          const nextCard = projectCards[index + 1];
          const nextRect = nextCard.getBoundingClientRect();
          const viewH = window.innerHeight;

          // Progress: 0 when next card is at bottom of viewport, 1 when it reaches its sticky position
          const nextStickyTop = BASE_TOP + (index + 1) * CARD_TOP_GAP;
          let progress = 1 - (nextRect.top - nextStickyTop) / (viewH - nextStickyTop);
          progress = Math.max(0, Math.min(1, progress));

          // Scale down from 1.0 to 0.93 as next card covers this one
          const scale = 1 - progress * 0.07;
          // Slight border-radius increase for depth illusion
          const extraRadius = progress * 12;
          inner.style.transform = `scale(${scale})`;
          inner.style.borderRadius = `${32 + extraRadius}px`;
          inner.style.opacity = 1 - progress * 0.15;
        } else {
          // Default state — full size
          inner.style.transform = 'scale(1)';
          inner.style.borderRadius = '';
          inner.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleCardStackingScroll);
    window.addEventListener('resize', () => {
      initCardTops();
      handleCardStackingScroll();
    });
    handleCardStackingScroll();
  }

  // ===== Contact Form Submission =====
  const contactForm = document.getElementById('contact-form');
  const formSuccessOverlay = document.getElementById('form-success-overlay');

  if (contactForm && formSuccessOverlay) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('#btn-submit-message');
      const submitText = submitBtn ? submitBtn.querySelector('.submit-btn-text') : null;
      const sendIcon = submitBtn ? submitBtn.querySelector('.send-icon') : null;

      // Get input elements and their values
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const messageInput = document.getElementById('form-message');

      const nameVal = nameInput ? nameInput.value : '';
      const emailVal = emailInput ? emailInput.value : '';
      const messageVal = messageInput ? messageInput.value : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'Sending...';
        if (sendIcon) {
          sendIcon.style.transform = 'translate(20px, -20px)';
          sendIcon.style.opacity = '0';
        }
      }

      // Submit via FormSubmit AJAX endpoint
      fetch("https://formsubmit.co/ajax/darshitradadiya01@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Portfolio Message from ${nameVal}`,
          name: nameVal,
          email: emailVal,
          message: messageVal
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Fade out the form fields
        contactForm.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        contactForm.style.opacity = '0';
        contactForm.style.transform = 'translateY(-10px)';

        setTimeout(() => {
          contactForm.style.display = 'none';

          // Fade in the success overlay
          formSuccessOverlay.style.display = 'flex';
          formSuccessOverlay.style.opacity = '0';
          formSuccessOverlay.style.transform = 'translateY(10px)';

          // Trigger browser layout calculation
          formSuccessOverlay.offsetHeight;

          formSuccessOverlay.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          formSuccessOverlay.style.opacity = '1';
          formSuccessOverlay.style.transform = 'translateY(0)';
        }, 400);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was a problem sending your message. Please email me directly at darshitradadiya01@gmail.com');
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitText) submitText.textContent = 'Send Message';
          if (sendIcon) {
            sendIcon.style.transform = '';
            sendIcon.style.opacity = '1';
          }
        }
      });
    });
  }

});
