/**
 * Gallery Section Component
 * 
 * Displays photos with captions in a simple gallery layout.
 */

class GallerySection {
  constructor() {
    this.gallery = [
      {
        image: "/assets/pictures/se-2030.JPG",
        caption: "Most cracked builders in Canada (i.e. Waterloo SE 2030)",
        objectPosition: "0% 100%"
      },
      {
        image: "/assets/pictures/bts-news.jpg",
        caption: "Behind-the-scenes Global News interview ft. my family",
        objectPosition: "0% 40%"
      },
      {
        image: "/assets/pictures/sf-2025.png",
        caption: "Hack Club's Undercity hackathon at GitHub HQ in SF"
      },
      {
        image: "/assets/pictures/loo-park.jpg",
        caption: "Views from Waterloo Park, Waterloo, Canada"
      },
      {
        image: "/assets/pictures/dev-the-future.JPG",
        caption: "Panelist at the annual Apple x DevTheFuture conference",
        objectPosition: "70% 40%"
      },
      {
        image: "/assets/pictures/hamiltonians.jpg",
        caption: "Favourite Hamiltonians"
      },
      {
        image: "/assets/pictures/accv.jpg",
        caption: "Presenting research at ACCV 2024 in Hanoi, Vietnam"
      },
      {
        image: "/assets/pictures/hammerhacks.JPEG",
        caption: "Organizing team for HammerHacks, Hamilton's first high school hackathon"
      },
      {
        image: "/assets/pictures/code-in-place.jpg",
        caption: "First class teaching for Stanford Code in Place"
      },
      {
        image: "/assets/pictures/robotics.jpg",
        caption: "Winners of the FRC Ontario District Niagara College Event",
        objectPosition: "40% 40%"
      },
        
    ];
  }

  render() {
    const initialGallery = this.gallery.slice(0, 2);
    const remainingGallery = this.gallery.slice(2);
    const hasMore = remainingGallery.length > 0;
    
    return `
      <section id="gallery" class="gallery-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Gallery</h2>
          </div>
          
          <div class="gallery-grid">
            ${initialGallery.map(item => `
              <figure class="gallery-item">
                <img src="${item.image}" alt="${item.caption}" class="gallery-image" loading="lazy" style="${item.objectPosition ? `object-position: ${item.objectPosition} !important;` : ''}">
                <figcaption class="gallery-caption">${item.caption}</figcaption>
              </figure>
            `).join('')}
          </div>
          ${hasMore ? `
            <div class="gallery-more" id="gallery-more">
              ${remainingGallery.map(item => `
                <figure class="gallery-item">
                  <img src="${item.image}" alt="${item.caption}" class="gallery-image" loading="lazy" style="${item.objectPosition ? `object-position: ${item.objectPosition} !important;` : ''}">
                  <figcaption class="gallery-caption">${item.caption}</figcaption>
                </figure>
              `).join('')}
            </div>
          ` : ''}
          ${hasMore ? `
            <div class="gallery-toggle-container">
              <button class="gallery-toggle-btn" id="gallery-toggle-btn" aria-expanded="false">
                Show more
              </button>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  init() {
    const toggleBtn = document.getElementById('gallery-toggle-btn');
    const moreSection = document.getElementById('gallery-more');
    
    if (toggleBtn && moreSection) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          moreSection.classList.remove('gallery-more-visible');
          toggleBtn.textContent = 'Show more';
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          moreSection.classList.add('gallery-more-visible');
          toggleBtn.textContent = 'Show less';
          toggleBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  }
}

export default GallerySection;

