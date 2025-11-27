/**
 * Main Application Entry Point
 * 
 * Initializes all components and sets up the application.
 * Uses ES6 modules for component imports.
 */

import NavBar from '../components/NavBar.js';
import Hero from '../components/Hero.js';
import AboutSection from '../components/AboutSection.js';
import ProjectsSection from '../components/ProjectsSection.js';
import Footer from '../components/Footer.js';

/**
 * Smooth Scrolling Handler
 * Handles smooth scrolling for anchor links
 */
class SmoothScroller {
  constructor() {
    this.init();
  }

  init() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
}

/**
 * Application Initialization
 */
class App {
  constructor() {
    this.components = {
      navbar: new NavBar(),
      hero: new Hero(),
      about: new AboutSection(),
      projects: new ProjectsSection(),
      footer: new Footer()
    };
  }

  init() {
    // Render all components
    this.renderComponents();
    
    // Initialize component-specific functionality
    this.components.navbar.init();
    
    // Initialize smooth scrolling
    new SmoothScroller();
  }

  renderComponents() {
    // Render NavBar
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
      navbarRoot.innerHTML = this.components.navbar.render();
      // Re-initialize after render to attach event listeners
      setTimeout(() => this.components.navbar.init(), 0);
    }

    // Render Hero
    const heroRoot = document.getElementById('hero-root');
    if (heroRoot) {
      heroRoot.innerHTML = this.components.hero.render();
    }

    // Render About
    const aboutRoot = document.getElementById('about-root');
    if (aboutRoot) {
      aboutRoot.innerHTML = this.components.about.render();
    }

    // Render Projects
    const projectsRoot = document.getElementById('projects-root');
    if (projectsRoot) {
      projectsRoot.innerHTML = this.components.projects.render();
    }

    // Render Footer
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
      footerRoot.innerHTML = this.components.footer.render();
    }
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new App().init();
  });
} else {
  new App().init();
}

