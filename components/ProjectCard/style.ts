import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(
    145deg,
    rgba(13, 17, 23, 0.95),
    rgba(21, 32, 43, 0.9)
  );
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 255, 255, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 255, 0.6),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(21, 32, 43, 0.8),
    rgba(13, 17, 23, 0.9)
  );
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(21, 32, 43, 0.6),
    rgba(13, 17, 23, 0.8)
  );
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 49%,
      rgba(0, 255, 255, 0.1) 50%,
      transparent 51%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const PlaceholderIcon = styled.div`
  font-size: 3.5rem;
  opacity: 0.4;
  filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.3));
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100% - 200px);
`;

export const Title = styled.h3`
  color: #00ffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  font-family: "Courier New", monospace;
  position: relative;
  line-height: 1.3;

  &::before {
    content: "❯ ";
    color: #ff6b6b;
    font-weight: normal;
  }
`;

export const Description = styled.p`
  color: #e4e4e7;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  flex-grow: 1;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechTag = styled.span`
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.15),
    rgba(0, 255, 255, 0.05)
  );
  color: #00ffff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-family: "Courier New", monospace;
  border: 1px solid rgba(0, 255, 255, 0.2);
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(0, 255, 255, 0.25),
      rgba(0, 255, 255, 0.1)
    );
    border-color: rgba(0, 255, 255, 0.4);
    transform: translateY(-1px);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

export const ActionButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #00ffff;
  text-decoration: none;
  padding: 12px 16px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 0.85rem;
  font-family: "Courier New", monospace;
  font-weight: 500;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.05),
    rgba(0, 255, 255, 0.02)
  );
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(0, 255, 255, 0.15),
      rgba(0, 255, 255, 0.08)
    );
    border-color: rgba(0, 255, 255, 0.5);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1rem;
  filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.5));
`;
