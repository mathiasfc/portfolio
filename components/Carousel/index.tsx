import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import * as s from "./style";

interface CarouselProps {
  children: React.ReactNode[];
  containerVariants?: any;
}

const Carousel: React.FC<CarouselProps> = ({ children, containerVariants }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      containScroll: "trimSnaps",
      dragFree: true,
    },
    [
      WheelGesturesPlugin({
        forceWheelAxis: "x", // Force horizontal scrolling even with vertical wheel/trackpad gestures
      }),
    ]
  );

  // Fallback wheel handler in case the plugin doesn't work
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!emblaApi) return;

      event.preventDefault();

      // Convert vertical wheel delta to horizontal scroll
      const scrollDelta = event.deltaY !== 0 ? event.deltaY : event.deltaX;

      if (scrollDelta > 0) {
        emblaApi.scrollNext();
      } else if (scrollDelta < 0) {
        emblaApi.scrollPrev();
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const emblaNode = emblaApi.rootNode();
    if (!emblaNode) return;

    // Add wheel event listener as fallback
    emblaNode.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      emblaNode.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi, handleWheel]);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <s.CarouselContainer>
        <s.CarouselViewport ref={emblaRef}>
          <s.CarouselInner>
            {children.map((child, index) => (
              <s.CarouselSlide key={index}>{child}</s.CarouselSlide>
            ))}
          </s.CarouselInner>
        </s.CarouselViewport>
      </s.CarouselContainer>
    </motion.div>
  );
};

export default Carousel;
