/**
 * Footer Component
 * 
 * Site footer with contact information and social links.
 * Replace with your actual contact information.
 */

class Footer {
  constructor() {
    this.data = {
      copyright: `© ${new Date().getFullYear()} William Cagas`,
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/william-cagas/",
          icon: "linkedin"
        },
        {
          name: "X (Twitter)",
          url: "https://x.com/williamcagas",
          icon: "twitter"
        },
        {
          name: "GitHub",
          url: "https://github.com/willcagas",
          icon: "github"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/williamcagas",
          icon: "instagram"
        },
        {
          name: "Email",
          url: "mailto:wcagas@uwaterloo.ca",
          icon: "email"
        }
      ],
      cta: {
        text: "Looking to chat?",
        link: "https://cal.com/williamcagas/30min",
        linkText: "Book a 1-on-1"
      }
    };
  }

  getSocialIcon(iconName) {
    const icons = {
      linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />`,
      twitter: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />`,
      github: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />`,
      instagram: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />`,
      email: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />`
    };
    return icons[iconName] || '';
  }

  render() {
    return `
      <footer id="contact" class="footer">
        <div class="container">
          ${this.data.cta ? `
            <div class="footer-cta">
              <p class="footer-cta-text">${this.data.cta.text}</p>
              <a href="${this.data.cta.link}" target="_blank" class="footer-cta-link link" rel="noopener noreferrer">
                ${this.data.cta.linkText}
              </a>
            </div>
          ` : ''}
          
          <div class="footer-content">
            <div class="footer-social">
              ${this.data.socialLinks.map(link => `
                <a href="${link.url}" 
                   target="_blank" 
                   class="footer-social-link" 
                   aria-label="${link.name}"
                   rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    ${this.getSocialIcon(link.icon)}
                  </svg>
                </a>
              `).join('')}
            </div>
            
            <p class="footer-copyright">${this.data.copyright}</p>
          </div>
        </div>
      </footer>
    `;
  }
}

export default Footer;

