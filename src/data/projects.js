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
    description: [
      "AI-powered app that recommends personalized acne treatments in minutes",
      "Helping users navigate long dermatologist wait times by recommending safe, personalized acne treatments",
      "Featured on <strong>Global News</strong> and <strong>The Hamilton Spectator</strong>"
    ],
    tags: ["AI", "Healthcare", "Mobile App"],
    liveLink: "https://acnecura.io",
    repoLink: null,
    image: null,
    logo: "/assets/logos/acnecura.png",
    featured: true
  },
  {
    title: "DDPM Research in CMU's Xu Lab",
    date: "2024-11-01",
    description: [
      "Conducted short-term collaborative research on DDPMs in <strong>CMU's Xu Lab</strong> within the Computational Biology Department",
      "Specialized in DDPMs for clinical applications, focusing on medical image synthesis"
    ],
    tags: ["Research", "Machine Learning", "DDPMs", "Medical Imaging"],
    liveLink: "https://xulabs.github.io/",
    repoLink: null,
    image: null,
    logo: "/assets/logos/cmu.png",
    featured: true
  },
  {
    title: "HammerHacks",
    date: "2024-03-20",
    description: [
      "Hamilton's first high school hackathon",
      "Secured <strong>$12,000</strong> in funding from <strong>McMaster Engineering</strong>, <strong>City of Hamilton</strong>, <strong>Hack Club</strong>, <strong>Inference Labs</strong>, and more",
      "Resulted in <strong>140+ participants</strong> from <strong>17 high schools</strong> and <strong>~50 projects</strong>"
    ],
    tags: ["Event", "Organizing", "Community"],
    liveLink: "https://hammerhacks2024.wcagas.com",
    repoLink: null,
    image: null,
    logo: "/assets/logos/hammerhacks.png",
    featured: true
  },
  {
    title: "Medical Imaging Complexity and its Effects on GAN Performance",
    date: "2024-10-15",
    description: [
      "Used Larkin’s delentropy to show that tighter complexity distributions yield <strong>~2× lower FID</strong> with <strong>1,000 images</strong>, linking image complexity to optimal GAN data size",
      "Published and invited to present at GAISynMeD at <strong>ACCV 2024</strong> in <strong>Hanoi, Vietnam</strong>",
      "Cited by <strong>6 papers</strong> published at top conferences like <strong>ICCV</strong> and <strong>ACM</strong>"
    ],
    tags: ["Research", "Machine Learning", "Medical Imaging"],
    liveLink: "https://medgans.wcagas.com",
    repoLink: null,
    image: null,
    featured: true
  },
  {
    title: "Stanford University's Code in Place",
    date: "2024-04-01",
    description: [
      "Taught <strong>Stanford's CS106A</strong> course and Python basics to classes of international students online for <strong>CIP '24</strong> and <strong>CIP '25</strong>"
    ],
    tags: ["Education", "Teaching", "Python"],
    liveLink: "https://codeinplace.stanford.edu",
    repoLink: null,
    image: null,
    logo: "/assets/logos/stanford-cip.png",
    featured: false
  },
  {
    title: "Sword Power Tycoon",
    date: "2023-08-10",
    description: [
      "Developed sword powers and game mechanics",
      "Reached <strong>19M+ plays</strong> on Roblox with <strong>36K+ favourites</strong>"
    ],
    tags: ["Game Development", "Roblox", "Lua"],
    liveLink: "https://www.roblox.com/games/6937615628/Sword-Power-Tycoon",
    repoLink: null,
    image: null,
    logo: "/assets/logos/roblox-logo.png",
    featured: false
  },
];

export default projects;

