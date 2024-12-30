import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const CircleTextScroll = () => {
  const circleRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // 원의 크기 확대 애니메이션
    gsap.to(circleRef.current, {
      scale: 20,
      duration: 8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: circleRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    // 텍스트 슬라이드 애니메이션
    gsap.fromTo(
      textRef.current,
      {
        x: '200%',
        opacity: 0,
      },
      {
        x: '0%',
        opacity: 1,
        duration: 8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: circleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );

    // 'Bliss.' 텍스트가 화면 중앙에 도달한 후, 스크롤을 내리면 'lis'와 '.' 흐려지는 속도 조정
    gsap.to('.lis, .dot', {
      opacity: 0.001, // 거의 투명
      duration: 100, // 아주 긴 시간
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 50%', // 텍스트가 화면 중앙에 도달하면 시작
        end: '+=3000', // 더 긴 스크롤 거리
        scrub: 15, // 느린 스크롤 동기화
      },
    });
  }, []);

  return (
    <Box className="relative w-full h-screen overflow-hidden">
      {/* 커지는 원 */}
      <Box
        ref={circleRef}
        className="absolute w-32 h-32 bg-blue-500 rounded-full top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
      >
        {/* 원 안의 텍스트 */}
        <Text
          ref={textRef}
          className="text-black text-2xl font-bold whitespace-nowrap opacity-100 absolute left-1/2 transform -translate-x-1/2"
        >
          <span>B</span>
          <span className="lis">lis</span>
          <span>s</span>
          <span className="dot">.</span>
        </Text>
      </Box>
    </Box>
  );
};

export default CircleTextScroll;
