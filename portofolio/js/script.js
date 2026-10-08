/**
 * ==========================================================================
 * EMAN MASRY - PORTFOLIO INTERACTIVITY SCRIPT
 * Vanilla JavaScript (ES6+). Zero dependencies.
 * ==========================================================================
 */

'use strict';

/* --------------------------------------------------------------------------
   1. CERTIFICATIONS DATA & DYNAMIC RENDERING
   Pre-filled certifications array. Sort newest first.
   -------------------------------------------------------------------------- */
const certifications = [
  {
    title: "Python 101 for Data Science (PY0101EN)",
    issuer: "IBM, via Cognitive Class (IBM Developer Skills Network)",
    date: "August 7, 2025",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/647b6b46d7fb428c93ccb32d5f393ded",
    image: "assets/certs/ibm-python-101.jpg"
  },
  {
    title: "Machine Learning with Python (ML0101EN)",
    issuer: "IBM, via Cognitive Class (IBM Developer Skills Network)",
    date: "August 5, 2025",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/f9cad85e90854a89b4d44f1eea2e9620",
    image: "assets/certs/ibm-machine-learning-python.jpg"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Microsoft Egypt & Egyptian Ministry of Communications and Information Technology (MCIT)",
    date: "June 24 – July 24, 2025",
    credentialUrl: "",
    image: "assets/certs/microsoft-mcit-intro-ai.jpg"
  },
  {
    title: "Artificial Intelligence (Training Course)",
    issuer: "Information Technology Center (ITC)",
    date: "June 24 – July 23, 2025",
    credentialUrl: "",
    image: "assets/certs/itc-artificial-intelligence.jpg"
  }
];

/* --------------------------------------------------------------------------
   2. CASE STUDY DETAILED DATA (For Accessible Modal)
   Structure: Challenge, Approach, Solution, Technology, Outcome, Business Impact, Key Takeaways
   -------------------------------------------------------------------------- */
const caseStudiesData = {
  "proj-automation": {
    category: "Automation",
    title: "AI-Powered Business Workflow Automation",
    challenge: "Manual customer messaging, redundant internal data entry across spreadsheets, and delayed notification workflows were causing severe lead response latency and wasting hours of operational staff time each week.",
    approach: "Architected a modular event-driven workflow in n8n. Configured webhooks to capture incoming triggers instantly, leveraged an AI API layer to classify messages and parse unstructured text, and applied conditional logic to branch workflows without human intervention.",
    solution: "A complete end-to-end automation pipeline: Trigger (Webhook) → Input Validation → Payload Preprocessing → AI Intent & Entity Extraction → Decision Routing Logic → Action (Google Sheets & internal systems update) → Instant Notification alert to the designated team.",
    technology: ["n8n", "AI API", "Webhooks", "JSON", "Google Sheets"],
    outcome: "Eliminated repetitive manual data entry, ensured consistent structured recording in under 5 seconds per event, and unified incoming communications into a reliable, self-healing pipeline.",
    businessImpact: "Reclaimed significant operational capacity weekly, reduced data-entry transcription errors to near zero, and accelerated stakeholder notification speed by over 90%.",
    takeaways: "Combining deterministic workflow engines (n8n) with contextual AI reasoning delivers robust automation without sacrificing flexibility or control."
  },
  "proj-analytics": {
    category: "Analytics",
    title: "Business Data Analysis & Insight Generation",
    challenge: "Raw, multi-source operational datasets contained inconsistencies, duplicates, and missing values that obscured critical business performance metrics, forcing management to rely on speculative assumptions.",
    approach: "Designed a reproducible data cleansing and exploratory data analysis (EDA) pipeline in Python. Evaluated statistical distributions, identified anomalies, and isolated key performance drivers correlated with operational efficiency.",
    solution: "Structured analytical workflow: Raw Data Ingestion → Cleaning & Deduplication → Quality Assessment & Missing Value Handling → Exploratory Data Analysis & Hypothesis Testing → Strategic Insights & Actionable Recommendations.",
    technology: ["Python", "Pandas", "NumPy", "Excel", "SQL"],
    outcome: "Transformed disorganized records into clean, validated, audit-ready data models accompanied by transparent statistical summaries and executive-ready visual findings.",
    businessImpact: "Empowered leadership with high-conviction visibility into underlying operational trends and pinpointed exact areas where process bottlenecks caused recurring delays.",
    takeaways: "Evidence-based problem solving starts with data hygiene; rigorous EDA consistently reveals high-value optimization opportunities invisible in surface-level reports."
  },
  "proj-bi": {
    category: "Business Intelligence",
    title: "Interactive Power BI Business Intelligence Dashboard",
    challenge: "Decision-makers were bogged down by static, disjointed weekly spreadsheets, lacking real-time visibility into multi-channel KPIs, category comparisons, and historical performance trajectories.",
    approach: "Engineered a normalized star-schema data model in Power BI. Authored robust DAX measures for dynamic time-intelligence, multi-period comparisons, and variance calculations, structured for intuitive non-technical consumption.",
    solution: "An interactive, multi-view executive dashboard featuring dynamic slicers, synchronized filtering, trend forecasting visualizations, and hierarchical drill-down capabilities for granular departmental analysis.",
    technology: ["Power BI", "Excel", "Data Modeling", "DAX"],
    outcome: "Replaced scattered reports with a single, synchronized interactive dashboard providing immediate, reliable answers to strategic questions.",
    businessImpact: "Reduced manual reporting preparation cycles and enabled cross-functional managers to self-serve tailored KPI insights on demand.",
    takeaways: "Great BI balances technical rigor in data modeling with clean, uncluttered visual hierarchy so stakeholders can transition from insight to decision in seconds."
  },
  "proj-ml": {
    category: "Machine Learning",
    title: "Predictive Analytics & Machine Learning",
    challenge: "Reliance on purely backward-looking reports left operations vulnerable to demand fluctuations and sub-optimal resource allocation.",
    approach: "Developed an end-to-end predictive modeling architecture prioritizing practical business interpretation and statistical validity over black-box complexity.",
    solution: "Step-by-step pipeline: Data Preparation → Exploratory Analysis → Feature Engineering & Selection → Model Training (Scikit-learn algorithms) → Cross-Validation & Metric Evaluation (Precision, Recall, ROC-AUC) → Practical Interpretation & Decision Support Framework.",
    technology: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    outcome: "Built and validated a predictive framework that outputs calibrated risk scores and feature importances for operational forecasting.",
    businessImpact: "Transitioned business planning from reactive scrambling to proactive, data-supported resource deployment.",
    takeaways: "A predictive model's real-world value lies in its interpretability and how seamlessly its predictions inform practical operational decisions."
  },
  "proj-featured": {
    category: "Featured: End-to-End Solution",
    title: "End-to-End Data → AI → Automation Solution",
    challenge: "Data analysis, predictive intelligence, and operational workflows lived in isolated software silos, requiring continuous manual interpretation, data copying, and human follow-up across disjointed tools.",
    approach: "Designed a holistic, unified architecture that bridges analytical insights with autonomous workflow execution, connecting raw ingestion directly to automated business actions.",
    solution: "Unified closed-loop ecosystem: Data Source → Ingestion & Automated Cleaning → Analytical/BI Processing → Predictive/Insight Layer → AI Decision Routing Layer → n8n Workflow Automation Engine → Business Action & Executive Report Generation.",
    technology: ["Python", "SQL", "Power BI / Streamlit", "Machine Learning", "AI API", "n8n", "Webhooks"],
    outcome: "Successfully demonstrated a closed-loop system where data triggers analysis, AI evaluates thresholds, and n8n automatically executes business actions and reports without manual bottlenecks.",
    businessImpact: "Dramatically compressed the latency between data generation and operational response, establishing a scalable foundation for modern data-driven automation.",
    takeaways: "The highest enterprise value emerges when data science and workflow automation merge into an intelligent, autonomous feedback loop."
  }
};

/* --------------------------------------------------------------------------
   3. THEME TOGGLE & PERSISTENCE
   Dark mode by default. Persist in localStorage inside try/catch.
   Respects prefers-color-scheme only if nothing is saved.
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Determine current active theme
  function getCurrentTheme() {
    return htmlEl.getAttribute('data-theme') || 'dark';
  }

  // Update UI and toggle state
  function updateThemeUI(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'false' : 'true');
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  // Initial update
  updateThemeUI(getCurrentTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = getCurrentTheme();
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      updateThemeUI(nextTheme);

      try {
        localStorage.setItem('eman_portfolio_theme', nextTheme);
      } catch (err) {
        console.warn('localStorage is not accessible for theme persistence:', err);
      }
    });
  }

  // Listen for system preference changes ONLY if user has not manually set a preference
  if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', (e) => {
      try {
        const savedTheme = localStorage.getItem('eman_portfolio_theme');
        if (!savedTheme) {
          updateThemeUI(e.matches ? 'dark' : 'light');
        }
      } catch (err) {
        // Fallback gracefully
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const navToggle = document.getElementById('mobile-nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !siteNav) return;

  function toggleNav() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    siteNav.classList.toggle('is-open', !isExpanded);

    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', toggleNav);

  // Close when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close when clicking outside of nav on mobile
  document.addEventListener('click', (e) => {
    if (siteNav.classList.contains('is-open') && !siteNav.contains(e.target) && !navToggle.contains(e.target)) {
      closeNav();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
      closeNav();
      navToggle.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   5. STICKY HEADER & ACTIVE NAV LINK HIGHLIGHTING
   -------------------------------------------------------------------------- */
function initHeaderAndNavScroll() {
  const header = document.getElementById('site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header shadow & blur class
    if (header) {
      if (scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Active nav link highlight based on scroll position
    let currentSectionId = '';
    const scrollThreshold = scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollThreshold >= sectionTop && scrollThreshold < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* --------------------------------------------------------------------------
   6. INTERSECTION OBSERVER SCROLL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  // If reduced motion is requested, do not set up observer
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-up-element').forEach(el => el.classList.add('in-view'));
    return;
  }

  const animElements = document.querySelectorAll('.fade-up-element');
  if (!animElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    animElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    animElements.forEach(el => el.classList.add('in-view'));
  }
}

/* --------------------------------------------------------------------------
   7. PORTFOLIO FILTERING
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const targetCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCat === targetCategory || card.classList.contains('featured-card')) {
          card.style.display = '';
          setTimeout(() => {
            card.classList.add('in-view');
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. DYNAMIC CERTIFICATIONS RENDERING
   Sorts newest first, shows Verify button only when credentialUrl is present.
   -------------------------------------------------------------------------- */
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  // Clone and sort newest first (order already defined chronologically, sort safely)
  const certsToRender = [...certifications];

  let htmlContent = '';

  certsToRender.forEach((cert, index) => {
    const hasUrl = cert.credentialUrl && cert.credentialUrl.trim().length > 0;
    const verifyButtonHtml = hasUrl 
      ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" aria-label="Verify ${cert.title} credential">
           <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
           Verify Credential
         </a>`
      : '';

    htmlContent += `
      <article class="cert-card fade-up-element delay-${(index % 4) + 1}">
        <div class="cert-media-wrap">
          <img src="${cert.image}" alt="Certificate: ${cert.title}" class="cert-image" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="cert-placeholder" style="display: none;" aria-hidden="true">
            <svg class="cert-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 15l-2 5l9-13h-7l2-5l-9 13h7z"></path>
            </svg>
            <span class="placeholder-tag">Certificate Preview</span>
          </div>
        </div>
        <div class="cert-body">
          <h4 class="cert-title">${cert.title}</h4>
          <p class="cert-issuer">${cert.issuer}</p>
          <time class="cert-date">${cert.date}</time>
          <div class="cert-actions">
            ${verifyButtonHtml}
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = htmlContent;
}

/* --------------------------------------------------------------------------
   9. ACCESSIBLE CASE STUDY MODAL
   WCAG compliant: focus trapping, Escape key listener, restores focus on close.
   -------------------------------------------------------------------------- */
function initCaseStudyModal() {
  const modalOverlay = document.getElementById('case-study-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFooterCloseBtn = document.getElementById('modal-footer-close-btn');
  const caseStudyTriggers = document.querySelectorAll('[data-case-study]');

  if (!modalOverlay) return;

  let lastActiveTrigger = null;
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function openModal(caseStudyId) {
    const data = caseStudiesData[caseStudyId];
    if (!data) return;

    // Populate modal content
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalChallenge = document.getElementById('modal-challenge');
    const modalApproach = document.getElementById('modal-approach');
    const modalSolution = document.getElementById('modal-solution');
    const modalTech = document.getElementById('modal-tech');
    const modalOutcome = document.getElementById('modal-outcome');
    const modalImpact = document.getElementById('modal-impact');
    const modalTakeaways = document.getElementById('modal-takeaways');

    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalChallenge) modalChallenge.textContent = data.challenge;
    if (modalApproach) modalApproach.textContent = data.approach;
    if (modalSolution) modalSolution.textContent = data.solution;
    if (modalOutcome) modalOutcome.textContent = data.outcome;
    if (modalImpact) modalImpact.textContent = data.businessImpact;
    if (modalTakeaways) modalTakeaways.textContent = data.takeaways;

    if (modalTech) {
      modalTech.innerHTML = data.technology
        .map(tech => `<span class="chip chip-accent">${tech}</span>`)
        .join('');
    }

    // Activate modal
    modalOverlay.classList.add('is-active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (modalCloseBtn) {
      setTimeout(() => modalCloseBtn.focus(), 50);
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('is-active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus to trigger element
    if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
      lastActiveTrigger.focus();
    }
  }

  // Trigger click handlers
  caseStudyTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      lastActiveTrigger = trigger;
      const studyId = trigger.getAttribute('data-case-study');
      openModal(studyId);
    });
  });

  // Close buttons
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalFooterCloseBtn) modalFooterCloseBtn.addEventListener('click', closeModal);

  // Overlay click to close
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Keyboard navigation & Focus Trapping inside modal
  document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('is-active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusableEls = modalOverlay.querySelectorAll(focusableSelectors);
      if (!focusableEls.length) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else { // Tab
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });
}

/* --------------------------------------------------------------------------
   10. CONTACT FORM VALIDATION & HANDLING
   Static-safe with mailto fallback and Formspree readiness.
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusAlert = document.getElementById('form-status-alert');

  if (!form) return;

  function showError(groupId, message) {
    const group = document.getElementById(groupId);
    if (!group) return;
    group.classList.add('has-error');
    const msgEl = group.querySelector('.form-error-msg');
    if (msgEl) msgEl.textContent = message;
  }

  function clearErrors() {
    form.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('has-error');
    });
    if (statusAlert) {
      statusAlert.className = 'form-status-alert';
      statusAlert.textContent = '';
      statusAlert.style.display = 'none';
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    let hasError = false;

    if (!name) {
      showError('group-name', 'Please enter your full name.');
      hasError = true;
    }

    if (!email) {
      showError('group-email', 'Please provide your email address.');
      hasError = true;
    } else if (!isValidEmail(email)) {
      showError('group-email', 'Please enter a valid email address.');
      hasError = true;
    }

    if (!message) {
      showError('group-message', 'Please write a message describing your inquiry.');
      hasError = true;
    } else if (message.length < 10) {
      showError('group-message', 'Message should be at least 10 characters.');
      hasError = true;
    }

    if (hasError) return;

    // Check if user has configured an actual Formspree endpoint
    const formAction = form.getAttribute('action');
    const isFormspreeConfigured = formAction && formAction.includes('formspree.io/f/') && !formAction.includes('YOUR_FORM_ID');

    if (isFormspreeConfigured) {
      // Submit via Formspree API fetch
      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          form.reset();
          if (statusAlert) {
            statusAlert.className = 'form-status-alert success';
            statusAlert.textContent = 'Thank you! Your message has been sent successfully. I will get back to you shortly.';
          }
        } else {
          throw new Error('Form submission failed.');
        }
      }).catch(() => {
        // Fallback to mailto
        triggerMailtoFallback(name, email, message);
      }).finally(() => {
        if (submitBtn) submitBtn.disabled = false;
      });
    } else {
      // Default Static Safe Fallback: mailto link launch
      triggerMailtoFallback(name, email, message);
    }
  });

  function triggerMailtoFallback(name, email, message) {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:emanelmasrymeral1100@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    if (statusAlert) {
      statusAlert.className = 'form-status-alert success';
      statusAlert.textContent = 'Opening your email client to complete message delivery. If it does not open automatically, please reach out directly at emanelmasrymeral1100@gmail.com.';
    }
    form.reset();
  }
}

/* --------------------------------------------------------------------------
   11. FOOTER DYNAMIC YEAR & BACK TO TOP
   -------------------------------------------------------------------------- */
function initFooter() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* --------------------------------------------------------------------------
   12. DYNAMIC ROLE TYPEWRITER ANIMATION (Hero Freelance Value Proposition)
   -------------------------------------------------------------------------- */
function initDynamicRoleTypewriter() {
  const dynamicRoleEl = document.getElementById('hero-dynamic-role');
  if (!dynamicRoleEl) return;

  // Respect user preference for reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    dynamicRoleEl.textContent = 'Data, AI & Automation';
    return;
  }

  const roles = [
    'Data, AI & Automation',
    'n8n Workflow Automation',
    'Power BI & Analytics Dashboards',
    'Predictive Machine Learning',
    'Healthcare & Enterprise Insights'
  ];

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;
  const typingSpeed = 75;
  const pauseEnd = 2400;
  const pauseStart = 450;

  function typeTick() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      dynamicRoleEl.textContent = currentRole.substring(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeTick, pauseStart);
        return;
      }
      setTimeout(typeTick, 35);
    } else {
      charIndex++;
      dynamicRoleEl.textContent = currentRole.substring(0, charIndex);
      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeTick, pauseEnd);
        return;
      }
      setTimeout(typeTick, typingSpeed);
    }
  }

  // Initial delay before first delete
  setTimeout(typeTick, 2200);
}

/* --------------------------------------------------------------------------
   13. SMOOTH NUMBER COUNTER ANIMATION (Freelance Trust Metrics)
   -------------------------------------------------------------------------- */
function initCounterAnimation() {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counterElements.forEach(el => {
      const target = el.getAttribute('data-counter');
      const suffix = el.getAttribute('data-counter-suffix') || '';
      el.textContent = target + suffix;
    });
    return;
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-counter-suffix') || '';
    if (isNaN(target)) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => counterObserver.observe(el));
  } else {
    counterElements.forEach(el => animateCounter(el));
  }
}

/* --------------------------------------------------------------------------
   14. READING SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgressBar() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  function updateProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      bar.style.width = '0%';
      return;
    }
    const progress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
    bar.style.width = `${progress}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

/* --------------------------------------------------------------------------
   15. 1-CLICK COPY EMAIL WITH DYNAMIC TOAST FEEDBACK
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const toastContainer = document.getElementById('toast-container');
  if (!copyBtn) return;

  function showToast(message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  copyBtn.addEventListener('click', async () => {
    const email = 'emanelmasrymeral1100@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      copyBtn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Copied!</span>
      `;
      copyBtn.style.borderColor = 'var(--accent-light)';
      copyBtn.style.color = 'var(--accent-vibrant)';

      showToast('Email address copied to clipboard!');

      setTimeout(() => {
        copyBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy</span>
        `;
        copyBtn.style.borderColor = '';
        copyBtn.style.color = '';
      }, 2400);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
      showToast('emanelmasrymeral1100@gmail.com');
    }
  });
}

/* --------------------------------------------------------------------------
   16. INTERACTIVE 3D TILT EFFECT ON HERO CARD (Desktop Polish)
   -------------------------------------------------------------------------- */
function initInteractiveCardTilt() {
  const card = document.getElementById('hero-interactive-card');
  if (!card) return;

  // Only apply on non-touch devices with hover capabilities & no reduced motion
  if (window.matchMedia && (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches)) {
    return;
  }

  let rafId = null;

  function onMouseMove(e) {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
  }

  function onMouseLeave() {
    if (rafId) cancelAnimationFrame(rafId);
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  }

  card.addEventListener('mousemove', onMouseMove);
  card.addEventListener('mouseleave', onMouseLeave);
}

/* --------------------------------------------------------------------------
   17. DOM READY INITIALIZATION
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initHeaderAndNavScroll();
  renderCertifications();
  initPortfolioFilter();
  initCaseStudyModal();
  initContactForm();
  initFooter();
  initScrollAnimations();
  initDynamicRoleTypewriter();
  initCounterAnimation();
  initScrollProgressBar();
  initCopyEmail();
  initInteractiveCardTilt();
});

