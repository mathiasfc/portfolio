import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";
import { theme } from "@/styles/theme";
import StarsEffect from "@/components/StarsEffect";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  min-height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  position: relative;
`;

const UniverseGlowEffect = styled.img`
  top: 50%;
  left: 50%;
  width: 200%;
  transform: translate(-50%, -50%) scaleX(-1);
  pointer-events: none;
  overflow: hidden;
  position: fixed;
  border-style: none;
  z-index: -1;
`;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    /**
     * This function calculates the viewport height (vh) and sets it as a custom
     * CSS property (--vh) on the root element. This is necessary because on mobile
     * devices, the viewport height can change due to the dynamic browser UI (e.g.,
     * the address bar expanding/collapsing).
     */
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    window.addEventListener("orientationchange", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("orientationchange", setViewportHeight);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Component {...pageProps} />

          {/* Persistent Background Effects */}
          <StarsEffect />
          <UniverseGlowEffect
            src="/images/glow.svg"
            alt="Glow effect fixed at the background"
          />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
