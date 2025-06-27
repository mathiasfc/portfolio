import Page from "@/components/Page";
import CommandTerminal from "@/components/CommandTerminal";
import * as s from "./style";

// Sample projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern, interactive portfolio built with Next.js featuring terminal-style UI, typing animations, and responsive design.",
    image: "/images/logo.jpeg", // Using existing logo as placeholder
    liveUrl: "https://mathiasfc.dev",
    repoUrl: "https://github.com/mathiasfc/portfolio",
    tech: ["Next.js", "TypeScript", "Styled Components", "React"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    image: null, // No image placeholder
    liveUrl: "https://demo-ecommerce.example.com",
    repoUrl: "https://github.com/mathiasfc/ecommerce",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, file attachments, and team collaboration features.",
    image: null,
    liveUrl: "https://taskapp.example.com",
    repoUrl: "https://github.com/mathiasfc/taskapp",
    tech: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and personalized alerts.",
    image: null,
    liveUrl: "https://weather-dash.example.com",
    repoUrl: "https://github.com/mathiasfc/weather-dashboard",
    tech: ["React", "OpenWeather API", "Chart.js", "PWA"],
  },
  {
    id: 5,
    title: "Crypto Tracker",
    description:
      "Cryptocurrency portfolio tracker with real-time price updates, profit/loss calculations, and market analysis.",
    image: null,
    liveUrl: "https://crypto-tracker.example.com",
    repoUrl: "https://github.com/mathiasfc/crypto-tracker",
    tech: ["Angular", "CoinGecko API", "Chart.js", "TypeScript"],
  },
  {
    id: 6,
    title: "Blog CMS",
    description:
      "Content management system for bloggers with markdown support, SEO optimization, and social media integration.",
    image: null,
    liveUrl: "https://blog-cms.example.com",
    repoUrl: "https://github.com/mathiasfc/blog-cms",
    tech: ["Next.js", "Sanity", "Vercel", "Tailwind CSS"],
  },
];

const PortfolioTemplate = () => {
  const pageTitle = "Portfolio | Mathias Falci";
  const pageDescription =
    "Explore Mathias Falci's portfolio of web development projects. From responsive websites to interactive web applications, each project showcases a commitment to creativity, functionality, and user experience.";

  return (
    <Page title={pageTitle} description={pageDescription}>
      <CommandTerminal
        pageTitle="portfolio"
        mobileText={`// Here, you'll discover \n // some of my latest works`}
        desktopText={`// Here, you'll discover some of my latest works`}
        delayToShowContent={3000}
        enableScrolling={true}
      >
        <s.InnerPortfolioPageContent>
          <s.CommandPrompt>ls -la ./projects --show-details</s.CommandPrompt>

          <s.ProjectsGrid>
            {projects.map((project) => (
              <s.ProjectCard key={project.id}>
                <s.ProjectImage>
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} logo`} />
                  ) : (
                    <s.ProjectPlaceholder>🚀</s.ProjectPlaceholder>
                  )}
                </s.ProjectImage>

                <s.ProjectTitle>{project.title}</s.ProjectTitle>

                <s.ProjectDescription>
                  {project.description}
                </s.ProjectDescription>

                <s.ProjectTech>
                  {project.tech.map((tech, index) => (
                    <s.TechTag key={index}>{tech}</s.TechTag>
                  ))}
                </s.ProjectTech>

                <s.ProjectLinks>
                  <s.ProjectLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${project.title} live site`}
                  >
                    live
                  </s.ProjectLink>
                  <s.ProjectLink
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${project.title} source code`}
                  >
                    code
                  </s.ProjectLink>
                </s.ProjectLinks>
              </s.ProjectCard>
            ))}
          </s.ProjectsGrid>
        </s.InnerPortfolioPageContent>
      </CommandTerminal>
    </Page>
  );
};

export default PortfolioTemplate;
