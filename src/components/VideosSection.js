/**
 * Videos Section Component
 * 
 * Displays embedded videos in a simple grid layout.
 */

class VideosSection {
  constructor() {
    this.videos = [
      {
        title: "Global News Interview",
        type: "iframe",
        embedSrc: "https://globalnews.ca/video/embed/11330376/",
        caption: "Global News interview about AcneCura"
      },
      {
        title: "HammerHacks Recap",
        type: "youtube",
        videoId: "Jb-2RpDonEs",
        caption: "HammerHacks recap video"
      }
    ];
  }

  render() {
    return `
      <section id="videos" class="videos-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Videos</h2>
          </div>
          
          <div class="videos-grid">
            ${this.videos.map(video => `
              <figure class="video-item">
                <div class="video-wrapper">
                  ${video.type === "youtube" ? `
                    <iframe 
                      src="https://www.youtube.com/embed/${video.videoId}" 
                      title="${video.title}"
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen
                      loading="lazy"
                      class="video-iframe">
                    </iframe>
                  ` : `
                    <iframe 
                      src="${video.embedSrc}" 
                      title="${video.title}"
                      frameborder="0" 
                      allowfullscreen
                      scrolling="no"
                      loading="lazy"
                      class="video-iframe">
                    </iframe>
                  `}
                </div>
                <figcaption class="video-caption">${video.title}</figcaption>
              </figure>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

export default VideosSection;

