/**
 * About Section Component
 * 
 * Brief introduction and background information.
 * Replace content with your actual about information.
 */

class AboutSection {
  constructor() {
    this.data = {
      title: "About",
      content: `
        <p>I like to build and research AI that solves real-world problems.</p>
        <p>Currently, I'm focused on developing AcneCura, an AI-powered solution for personalized acne treatment recommendations. My work spans health tech, AI research, education, hackathon organization, game development and more.</p>
        <p>When I'm not coding, I enjoy organizing community events like HammerHacks, teaching programming like through Stanford's Code in Place program, or playing recreational basketball and the piano.</p>
        <p>I'm also documenting my journey! Check it out <a href="https://www.instagram.com/willcagas.mov" target="_blank" rel="noopener noreferrer">@willcagas.mov</a>.🪿</p>
      `
    };
  }

  render() {
    return `
      <section id="about" class="about-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">${this.data.title}</h2>
          </div>
          <div class="about-content">
            ${this.data.content}
          </div>
        </div>
      </section>
    `;
  }
}

export default AboutSection;

