/**
 * Pictures/Gallery Section Component
 * 
 * Displays photos with captions in a simple gallery layout.
 */

class PicturesSection {
  constructor() {
    this.pictures = [
      {
        image: "/assets/pictures/se-2030.JPG",
        caption: "Most cracked builders in Canada (i.e. Waterloo SE 2030)",
        objectPosition: "70% 40%"
      },
      {
        image: "/assets/pictures/bts-news.jpg",
        caption: "Behind-the-scenes Global News interview ft. my family",
        objectPosition: "0% 100%"
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
    const initialPictures = this.pictures.slice(0, 2);
    const remainingPictures = this.pictures.slice(2);
    const hasMore = remainingPictures.length > 0;
    
    return `
      <section id="pictures" class="pictures-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Pictures</h2>
          </div>
          
          <div class="pictures-grid">
            ${initialPictures.map(picture => `
              <figure class="picture-item">
                <img src="${picture.image}" alt="${picture.caption}" class="picture-image" loading="lazy" style="${picture.objectPosition ? `object-position: ${picture.objectPosition} !important;` : ''}">
                <figcaption class="picture-caption">${picture.caption}</figcaption>
              </figure>
            `).join('')}
          </div>
          ${hasMore ? `
            <div class="pictures-more" id="pictures-more">
              ${remainingPictures.map(picture => `
                <figure class="picture-item">
                  <img src="${picture.image}" alt="${picture.caption}" class="picture-image" loading="lazy" style="${picture.objectPosition ? `object-position: ${picture.objectPosition} !important;` : ''}">
                  <figcaption class="picture-caption">${picture.caption}</figcaption>
                </figure>
              `).join('')}
            </div>
          ` : ''}
          ${hasMore ? `
            <div class="pictures-toggle-container">
              <button class="pictures-toggle-btn" id="pictures-toggle-btn" aria-expanded="false">
                Show more
              </button>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  init() {
    const toggleBtn = document.getElementById('pictures-toggle-btn');
    const moreSection = document.getElementById('pictures-more');
    
    if (toggleBtn && moreSection) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          moreSection.classList.remove('pictures-more-visible');
          toggleBtn.textContent = 'Show more';
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          moreSection.classList.add('pictures-more-visible');
          toggleBtn.textContent = 'Show less';
          toggleBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  }
}

export default PicturesSection;

