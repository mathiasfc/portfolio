import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/Carousel";
import { projects } from "@/utils/projects";

// Simple animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const PortfolioTemplate = () => {
  const pageTitle = "Portfolio | Mathias Falci";
  const pageDescription =
    "Explore Mathias Falci's portfolio of web development projects. From responsive websites to interactive web applications, each project showcases a commitment to creativity, functionality, and user experience.";

  return (
    <Page title={pageTitle} description={pageDescription}>
      <Carousel containerVariants={containerVariants}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variants={projectVariants}
          />
        ))}
      </Carousel>
    </Page>
  );
};

export default PortfolioTemplate;
