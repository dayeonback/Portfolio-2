import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Clock from '@/components/ui/Clock';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const CityTextScroll = () => {
  const lineRefs = useRef([]);
  const clockRefs = useRef([]);

  useEffect(() => {
    // 텍스트 라인 애니메이션
    lineRefs.current.forEach((line, index) => {
      const direction = index % 2 === 0 ? '-10%' : '10%';
      gsap.to(line, {
        x: direction,
        duration: 3,
        scrollTrigger: {
          trigger: line,
          start: 'top bottom',
          end: '+=500',
          scrub: 3,
        },
      });
    });

    // 시계 애니메이션
    clockRefs.current.forEach((clock, index) => {
      gsap.to(clock, {
        y: '-200px', // 위로 이동
        duration: 2,
        scrollTrigger: {
          trigger: clock,
          start: 'top bottom',
          end: 'top top',
          scrub: true, // 스크롤과 동기화
        },
      });
    });
  }, []);

  // 각 도시의 시간대 정보
  const cityTimeZones = {
    LONDON: 'Europe/London',
    TAIPEI: 'Asia/Taipei',
    'LOS ANGELES': 'America/Los_Angeles',
    'NEW YORK': 'America/New_York',
    JAPAN: 'Asia/Tokyo',
    AUSTRALIA: 'Australia/Sydney',
    IRELAND: 'Europe/Dublin',
  };

  // 시계 위치 데이터
  const clockPositions = [
    { top: '5%', left: '25%' },
    { top: '20%', left: '70%' },
    { top: '30%', left: '10%' },
    { top: '50%', left: '90%' },
    { top: '70%', left: '20%' },
    { top: '80%', left: '80%' },
    { top: '100%', left: '50%' },
  ];

  return (
    <Box w="100%" h="100vh" overflow="visible" position="relative">
      {/* 텍스트 라인 */}
      {['LONDON', 'TAIPEI', 'LOS ANGELES', 'NEW YORK', 'JAPAN', 'AUSTRALIA', 'IRELAND'].map((city, index) => (
        <Text
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          fontFamily="Chosunilbo_myungjo"
          fontSize="9rem"
          fontWeight="light"
          textAlign="center"
          whiteSpace="nowrap"
          lineHeight="1"
          marginBottom="-20px"
        >
          {city}
        </Text>
      ))}

      {/* 시계 컴포넌트 렌더링 */}
      {clockPositions.map((pos, index) => (
        <Box
          key={index}
          ref={(el) => (clockRefs.current[index] = el)}
          position="absolute"
          top={pos.top}
          left={pos.left}
          transform="translate(-50%, -50%)"
        >
          <Clock timezone={cityTimeZones[Object.keys(cityTimeZones)[index]]} />
        </Box>
      ))}
    </Box>
  );
};

export default CityTextScroll;
