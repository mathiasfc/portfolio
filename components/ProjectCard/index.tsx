import React from "react";
import { motion } from "framer-motion";
import * as s from "./style";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  liveUrl: string;
  repoUrl: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  variants?: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  return (
    <motion.div variants={variants}>
      <s.Card>
        <s.ImageContainer>
          {project.image ? (
            <s.ProjectImage
              src={project.image}
              alt={`${project.title} preview`}
            />
          ) : (
            <s.ImagePlaceholder>
              <s.PlaceholderIcon>🚀</s.PlaceholderIcon>
            </s.ImagePlaceholder>
          )}
        </s.ImageContainer>

        <s.Content>
          <s.Title>{project.title}</s.Title>

          <s.Description>{project.description}</s.Description>

          <s.TechStack>
            {project.tech.map((tech, index) => (
              <s.TechTag key={index}>{tech}</s.TechTag>
            ))}
          </s.TechStack>

          <s.Actions>
            <s.ActionButton
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${project.title} live site`}
            >
              <s.ButtonIcon>🟢</s.ButtonIcon>
              Live
            </s.ActionButton>
            <s.ActionButton
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${project.title} source code`}
            >
              <s.ButtonIcon>💻</s.ButtonIcon>
              Source
            </s.ActionButton>
          </s.Actions>
        </s.Content>
      </s.Card>
    </motion.div>
  );
};

export default ProjectCard;
