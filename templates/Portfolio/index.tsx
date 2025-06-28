import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/Carousel";
import { projects } from "@/utils/projects";

// Enhanced animation variants with scroll-based animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    y: 30,
    scale: 0.8,
    rotateY: -15,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for smooth easing
      type: "spring",
      stiffness: 100,
      damping: 15,
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
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            variants={projectVariants}
            index={index}
          />
        ))}
      </Carousel>
    </Page>
  );
};

export default PortfolioTemplate;
