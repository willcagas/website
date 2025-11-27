/**
 * Projects Data Structure
 * 
 * Replace this with your actual project data.
 * Each project should have:
 * - title: Project name
 * - date: Publication/completion date (YYYY-MM-DD format)
 * - description: Brief description (1-2 sentences)
 * - tags: Array of technology/topic tags
 * - liveLink: URL to live project (optional)
 * - repoLink: URL to repository (optional)
 * - image: Path to project image/screenshot (optional)
 * - featured: Boolean to mark featured projects
 */

const projects = [
  {
    title: "AcneCura",
    date: "2024-01-15",
    description: "AI-powered app that recommends personalized acne treatments in minutes. Helping users navigate long dermatologist wait times by recommending safe, personalized acne treatments.",
    tags: ["AI", "Healthcare", "Mobile App"],
    liveLink: "https://acnecura.io",
    repoLink: null,
    image: null,
    featured: true
  },
  {
    title: "HammerHacks",
    date: "2024-03-20",
    description: "Hamilton's first high school hackathon. Secured $12,000 in funding with support from McMaster Engineering, City of Hamilton, Inference Labs, Hack Club, and more.",
    tags: ["Event", "Organizing", "Community"],
    liveLink: "https://hammerhacks.ca/",
    repoLink: null,
    image: null,
    featured: true
  },
  {
    title: "Medical Imaging Complexity and its Effects on GAN Performance",
    date: "2024-10-15",
    description: "GAN training and synthetic medical imaging. Published and invited to present at GAISynMeD at ACCV 2024 in Hanoi, Vietnam.",
    tags: ["Research", "Machine Learning", "Medical Imaging"],
    liveLink: "https://willcagas.github.io/medgans/",
    repoLink: null,
    image: null,
    featured: true
  },
  {
    title: "Stanford University's Code in Place",
    date: "2024-04-01",
    description: "Teaching Stanford's CS106A course and Python basics to classes of international students online.",
    tags: ["Education", "Teaching", "Python"],
    liveLink: "https://codeinplace.stanford.edu",
    repoLink: null,
    image: null,
    featured: false
  },
  {
    title: "Sword Power Tycoon",
    date: "2023-08-10",
    description: "Developed sword powers and game mechanics. 18.2M+ plays on Roblox with 35,000+ favourites.",
    tags: ["Game Development", "Roblox", "Lua"],
    liveLink: "https://www.roblox.com/games/6937615628/Sword-Power-Tycoon",
    repoLink: null,
    image: null,
    featured: false
  },
  {
    title: "WasteBuster",
    date: "2023-12-05",
    description: "Sustainability app designed to tackle overconsumption through circular solutions, such as DIYs, local events, and a repurpose marketplace.",
    tags: ["Mobile App", "Sustainability", "iOS"],
    liveLink: "https://apps.apple.com/ca/app/wastebuster/id6450317120",
    repoLink: null,
    image: null,
    featured: false
  }
];

export default projects;

