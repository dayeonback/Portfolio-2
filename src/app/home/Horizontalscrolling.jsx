import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Horizontalscrolling = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
    // 텍스트 라인 애니메이션
    lineRefs.current.forEach((line, index) => {
      const direction = index % 2 === 0 ? '-10%' : '10%'; // 홀수, 짝수 인덱스에 따라 방향 설정
      gsap.to(line, {
        x: direction, // 왼쪽 또는 오른쪽으로 이동
        duration: 3,
        scrollTrigger: {
          trigger: line,
          start: 'top bottom', // 스크롤이 시작되는 지점
          end: '+=500', // 스크롤이 끝나는 지점
          scrub: 3, // 스크롤과 애니메이션을 동기화
        },
      });
    });
  }, []);

  return (
    <Box w="100%" h="100vh" overflow="visible" position="relative">
      {/* 텍스트 라인 */}
      {[
        '2025-01-02',
        'This is the first line of text',
        'This is the first line of text',
        'This is the second line',
        'Here comes the third line',
        'Now the fourth line',
        'This is the last line',
      ].map((line, index) => (
        <Text
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          fontFamily="Chosunilbo_myungjo"
          fontSize={['8rem', '9rem', '11rem', '13rem', '15rem']} // 화면 크기에 따른 폰트 크기 조정
          fontWeight="light"
          textAlign="center"
          whiteSpace="nowrap"
          lineHeight="1"
          mb={['-5%', '-4%', '-3%', '-2%']} // 퍼센트 기반 여백
        >
          {line}
        </Text>
      ))}
    </Box>
  );
};

export default Horizontalscrolling;
