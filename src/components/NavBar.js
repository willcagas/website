/**
 * Navigation Bar Component
 * 
 * Creates a clean, minimal navigation bar with smooth scrolling.
 * Replace navigation links with your actual sections.
 */

class NavBar {
  constructor() {
    this.navItems = [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Highlights', href: '#projects' },
      { label: 'Pictures', href: '#pictures' },
      { label: 'Contact', href: '#contact' }
    ];
  }

  render() {
    return `
      <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
          <a href="/" class="navbar-logo" id="navbar-logo">William Cagas</a>
          <ul class="navbar-menu" id="navbar-menu">
            ${this.navItems.map(item => `
              <li class="navbar-item">
                <a href="${item.href}" class="navbar-link nav-link">${item.label}</a>
              </li>
            `).join('')}
          </ul>
          <button class="navbar-toggle" id="navbar-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span class="navbar-toggle-icon"></span>
            <span class="navbar-toggle-icon"></span>
            <span class="navbar-toggle-icon"></span>
          </button>
        </div>
      </nav>
    `;
  }

  init() {
    // Logo click handler - scroll to top without changing URL
    const logo = document.getElementById('navbar-logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile menu toggle
    const toggle = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('navbar-menu-active');
        toggle.classList.toggle('navbar-toggle-active');
      });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 640) {
          menu.classList.remove('navbar-menu-active');
          toggle.classList.remove('navbar-toggle-active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
}

export default NavBar;

