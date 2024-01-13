import styled, { css, keyframes } from "styled-components";

const zoomAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    transform: rotate(5deg);
    animation-timing-function: ease-in;
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(2.2);
  }
`;

const planetZoomAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    transform: rotate(5deg);
    animation-timing-function: ease-out;
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: .1;
    transform: scale(2.2);
  }
`;

const commonStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const StarsEffectContainer = styled.div`
  ${commonStyle}
  z-index: -1;
  background-color: #040d21;

  > div:nth-child(1) {
    background-position: 10% 90%;
    animation-delay: 0s;
  }

  > div:nth-child(2) {
    background-position: 20% 50%;
    background-size: 270px 500px;
    animation-delay: 0.3s;
  }

  > div:nth-child(3) {
    background-position: 40% -80%;
    animation-delay: 1.2s;
  }

  > div:nth-child(4) {
    background-position: -20% -30%;
    transform: rotate(60deg);
    animation-delay: 2.5s;
  }

  > div:nth-child(5) {
    background-image: radial-gradient(
        2px 2px at 10px 100px,
        #eee,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 20px 10px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 150px 40px, #ddd, rgba(0, 0, 0, 0));
    background-position: 80% 30%;
    animation-delay: 4s;
  }

  > div:nth-child(6) {
    background-position: 50% 20%;
    animation-delay: 6s;
  }
`;

export const MovingStars = styled.div`
  ${commonStyle}
  background-image: radial-gradient(
      2px 2px at 50px 200px,
      #eee,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 250px 250px;
  opacity: 0;
  animation: ${zoomAnimation} 10s infinite;
`;

type SmallPlanetProps = {
  readonly $randomPosition: string;
  readonly $randomColor: string;
};

export const SmallPlanet = styled.div<SmallPlanetProps>`
  ${commonStyle}

  ${({ $randomPosition, $randomColor }) => css`
    background-image: radial-gradient(
        30px 0.5px at ${$randomPosition} ${$randomPosition},
        ${$randomColor},
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at ${$randomPosition} ${$randomPosition},
        ${$randomColor},
        rgba(0, 0, 0, 0)
      );

    background-repeat: no-repeat;
    background-size: 600px 600px;
    background-position: 50% 20%;
    animation-delay: 10s;
    opacity: 0;
    animation: ${planetZoomAnimation} 10s infinite;
  `}
`;
