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
    // 원의 크기 확대 애니메이션 (속도 조절)
    gsap.to(circleRef.current, {
      scale: 20, // 원이 커지는 비율
      duration: 8, // duration을 늘려서 애니메이션을 느리게 만듦
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: circleRef.current,
        start: 'top 80%', // 원이 화면의 80%에 도달하면 애니메이션 시작
        end: 'top 20%', // 끝나는 시점은 화면의 20%에 해당
        scrub: 1, // 스크롤과 동기화
      },
    });

    // 텍스트 슬라이드 애니메이션 (속도 조절)
    gsap.fromTo(
      textRef.current,
      {
        x: '200%', // 초기 위치는 오른쪽 끝
        opacity: 0, // 시작할 때 텍스트는 보이지 않음
      },
      {
        x: '0%', // 최종 위치는 화면 중앙으로 이동 (원래는 '50%'였으나 더 중앙에 배치)
        opacity: 1, // 텍스트가 보이도록
        duration: 8, // duration을 늘려서 애니메이션을 느리게 만듦
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: circleRef.current,
          start: 'top 80%', // 원이 커지면서 텍스트가 이동 시작
          end: 'top 20%', // 끝나는 시점
          scrub: 1, // 스크롤과 동기화
        },
      }
    );
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
          className="text-white text-2xl font-bold whitespace-nowrap opacity-100 absolute left-1/2 transform -translate-x-1/2"
        >
          Bliss
        </Text>
      </Box>
    </Box>
  );
};

export default CircleTextScroll;
