import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { gsap } from 'gsap';

const CityText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      y: '-100%',
      duration: 8,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <Box ref={textRef} className="overflow-hidden text-white text-6xl font-bold">
      <div className="flex flex-col space-y-16">
        <span>LONDON</span>
        <span>LOS ANGELES</span>
        <span>NEW YORK</span>
        <span>DALLAS</span>
      </div>
    </Box>
  );
};

export default CityText;
