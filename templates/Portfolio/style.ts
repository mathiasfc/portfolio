import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowEffect = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
  }
`;

export const InnerPortfolioPageContent = styled.div`
  margin-top: 30px;
  padding: 20px 0;

  /* Custom scrollbar styling for terminal aesthetic */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(21, 32, 43, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 255, 0.4);
    border-radius: 4px;

    &:hover {
      background: rgba(0, 255, 255, 0.6);
    }
  }

  /* Firefox scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 255, 0.4) rgba(21, 32, 43, 0.3);
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProjectCard = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 255, 0.6);
    animation: ${glowEffect} 2s infinite;
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 160px;
  background: rgba(21, 32, 43, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(0, 255, 255, 0.1) 50%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ProjectTitle = styled.h3`
  color: #00ffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  font-family: "Courier New", monospace;

  &::before {
    content: "> ";
    color: #ff6b6b;
  }
`;

export const ProjectDescription = styled.p`
  color: #e4e4e7;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 15px 0;
  opacity: 0.9;
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

export const TechTag = styled.span`
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: "Courier New", monospace;
  border: 1px solid rgba(0, 255, 255, 0.3);
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

export const ProjectLink = styled.a`
  color: #00ffff;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: "Courier New", monospace;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    border-color: rgba(0, 255, 255, 0.6);
    transform: translateX(2px);
  }

  &::before {
    content: "$ ";
    color: #ff6b6b;
  }
`;

export const CommandPrompt = styled.div`
  color: #00ffff;
  font-family: "Courier New", monospace;
  margin-bottom: 20px;

  &::before {
    content: "> ";
    color: #ff6b6b;
  }
`;

export const ProjectPlaceholder = styled.div`
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  opacity: 0.5;
`;
