/**
 * Theme Manager
 * Handles dark/light mode switching with localStorage persistence
 */

class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || this.getSystemTheme();
    this.init();
  }

  getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  getStoredTheme() {
    try {
      if (!window.localStorage) return null;
      const stored = localStorage.getItem('theme');
      // Validate stored value
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      return null;
    } catch (e) {
      // localStorage not available (private mode / in-app browser)
      return null;
    }
  }

  setStoredTheme(theme) {
    try {
      if (!window.localStorage) return;
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Ignore - just don't persist in private mode/in-app browsers
      // Don't log warnings as this is expected behavior
    }
  }

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    this.setStoredTheme(theme);
    this.updateToggleButton();
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateToggleButton() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      // The icon visibility is handled by CSS based on data-theme attribute
      toggleBtn.setAttribute('aria-label', `Switch to ${this.theme === 'light' ? 'dark' : 'light'} mode`);
    }
  }

  init() {
    try {
      // Set initial theme
      this.setTheme(this.theme);

      // Listen for system theme changes
      if (window.matchMedia) {
        try {
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          mediaQuery.addEventListener('change', (e) => {
            try {
              // Only update if user hasn't set a preference
              if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light');
              }
            } catch (error) {
              // Ignore theme change errors
            }
          });
        } catch (error) {
          // Ignore matchMedia errors
        }
      }
    } catch (error) {
      // If theme initialization fails, just use the theme we determined
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }
}

export default ThemeManager;

