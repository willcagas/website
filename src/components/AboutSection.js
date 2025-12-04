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
        <p>I like to research and build AI that solves real-world problems.</p>
        <p>My work spans across health tech, applied AI research, hackathon organizing, game development, education, and more.</p>
        <p>When I'm not tinkering with tech, I enjoy playing rec basketball, listening to music, and playing the piano.</p>
        <p>I'm also documenting my journey. Check it out <a href="https://www.instagram.com/willcagas.mov" target="_blank" rel="noopener noreferrer" class="link">@willcagas.mov</a>.</p>
        <p>If you're interested in tech, feel free to reach out about anything!</p>
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

