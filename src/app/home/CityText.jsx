import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Clock from '@/components/ui/Clock';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const CityTextScroll = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
    lineRefs.current.forEach((line, index) => {
      // 방향 설정: 홀수는 왼쪽으로, 짝수는 오른쪽으로
      const direction = index % 2 === 0 ? '-10%' : '10%';

      // GSAP ScrollTrigger 애니메이션
      gsap.to(line, {
        x: direction,
        duration: 3,
        scrollTrigger: {
          trigger: line, // 각 라인을 개별적으로 트리거
          start: 'top bottom', // 뷰포트에 라인이 들어오는 시점 (트리거 시작)
          end: '+=500', // 스크롤 길이 (길어질수록 느려짐)
          scrub: 5, // 스크롤 동기화 및 부드러운 속도 조절 (값을 더 낮게 하면 느리게)
        },
      });
    });
  }, []);

  // 시계 위치 데이터
  const clockPositions = [
    { top: '10%', left: '10%' },
    { top: '30%', left: '50%' },
    { top: '50%', left: '80%' },
    { top: '70%', left: '20%' },
  ];

  return (
    <Box w="100%" h="100vh" overflow="hidden" position="relative">
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
        <Box key={index} position="absolute" top={pos.top} left={pos.left} transform="translate(-50%, -50%)">
          <Clock />
        </Box>
      ))}
    </Box>
  );
};

export default CityTextScroll;
