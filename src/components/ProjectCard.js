/**
 * Project Card Component
 * 
 * Displays a single project in a card format.
 * Usage: new ProjectCard(projectData).render()
 */

class ProjectCard {
  constructor(project) {
    this.project = project;
  }

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  }

  render() {
    const { title, description, liveLink, repoLink } = this.project;
    
    return `
      <article class="project-item">
        <h3 class="project-title">
          ${liveLink ? `<a href="${liveLink}" target="_blank" class="project-title-link" rel="noopener noreferrer">${title}</a>` : title}
        </h3>
        <p class="project-description">${description}</p>
        ${repoLink ? `
          <a href="${repoLink}" target="_blank" class="project-link link" rel="noopener noreferrer">Repo →</a>
        ` : ''}
      </article>
    `;
  }
}

export default ProjectCard;

