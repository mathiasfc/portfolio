import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import * as s from "./style";

interface CarouselProps {
  children: React.ReactNode[];
  containerVariants?: any;
}

const Carousel: React.FC<CarouselProps> = ({ children, containerVariants }) => {
  const [emblaRef] = useEmblaCarousel(
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
