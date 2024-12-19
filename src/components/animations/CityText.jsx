import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          end: 'top top', // 라인이 뷰포트를 지나갈 때
          end: '+=500', // 스크롤 길이 (길어질수록 느려짐)
          scrub: 5, // 스크롤 동기화 및 부드러운 속도 조절 (값을 더 낮게 하면 느리게)
        },
      });
    });
  }, []);

  return (
    <Box w="100%" overflow="hidden">
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
    </Box>
  );
};

export default CityTextScroll;
