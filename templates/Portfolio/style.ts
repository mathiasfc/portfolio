import styled from "styled-components";

export const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 10px;
  }
`;
