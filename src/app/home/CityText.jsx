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
          // markers: true,
        },
      });
    });
  }, []);

  // 각 도시의 시간대 정보
  const cityTimeZones = {
    LONDON: 'Europe/London',
    'LOS ANGELES': 'America/Los_Angeles',

    'NEW YORK': 'America/New_York',
    TAIPEI: 'Asia/Taipei',
    JAPAN: 'Asia/Tokyo',
    AUSTRALIA: 'Australia/Sydney',
    IRELAND: 'Europe/Dublin',
  };

  // 시계 위치 데이터
  const clockPositions = [
    { top: '5%', left: '25%' },
    { top: '20%', left: '70%' },
    { top: '40%', left: '10%' },
    { top: '60%', left: '90%' },
    { top: '80%', left: '20%' },
    { top: '90%', left: '80%' },
    { top: '110%', left: '50%' },
  ];

  return (
    <Box w="100%" h="100vh" overflow="visible" position="relative">
      {/* 텍스트 라인 */}
      {['LONDON', 'LOS ANGELES', 'NEW YORK', 'TAIPEI', 'JAPAN', 'AUSTRALIA', 'IRELAND'].map((city, index) => (
        <Text
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          fontFamily="Chosunilbo_myungjo"
          fontSize={['8rem', '9rem', '11rem', '13rem', '15rem']}
          fontWeight="light"
          textAlign="center"
          whiteSpace="nowrap"
          lineHeight="1"
          mb={['-5%', '-4%', '-3%', '-2%']} // 퍼센트 기반 여백
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
          width={['8%', '7%', '6%', '5%']} // 퍼센트 기반 너비
          height={['8%', '7%', '6%', '5%']} // 퍼센트 기반 높이
          fontWeight="light"
          textAlign="center"
          whiteSpace="nowrap"
          lineHeight="1"
          mb={['-2%', '-1.5%', '-1%', '-0.5%']} // 퍼센트 기반 여백
        >
          <Clock timezone={cityTimeZones[Object.keys(cityTimeZones)[index]]} />
        </Box>
      ))}
    </Box>
  );
};

export default CityTextScroll;
