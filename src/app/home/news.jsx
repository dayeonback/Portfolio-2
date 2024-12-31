import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const CircleTextScroll = () => {
  const circleRef = useRef();
  const textRef = useRef();
  const newTextRef = useRef();
  const blissTextRef = useRef(); // Bliss 텍스트를 위한 ref 추가

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

    // 기존 텍스트의 슬라이드 및 초기 애니메이션
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

    // 기존 텍스트가 흐려지는 애니메이션
    gsap.to('.lis, .dot', {
      opacity: 0.05, // 거의 투명
      duration: 15, // 천천히 흐려짐
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 50%', // 기존 텍스트가 화면 중앙에 도달하면 시작
        end: '+=500', // 텍스트 흐려지는 스크롤 거리
        scrub: 1,
      },
    });

    // 새로운 텍스트 등장: 기존 텍스트 흐려진 후 나타남
    gsap.fromTo(
      newTextRef.current,
      { opacity: 0, y: '50%' }, // 초기 상태: 투명, 아래 위치
      {
        opacity: 1, // 점점 보이기
        y: '0%', // 원래 위치로 이동
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: textRef.current, // 기존 텍스트를 기준으로 트리거
          start: '+=1500', // 기존 텍스트가 흐려지고 추가 스크롤 후 시작
          end: '+=500', // 뉴 텍스트 나타나는 거리
          scrub: true,
        },
      }
    );

    // Bliss 텍스트 오른쪽에서 왼쪽으로 이동하는 애니메이션
    gsap.fromTo(
      blissTextRef.current,
      { x: '200%', opacity: 1 }, // 초기 상태: 오른쪽 끝에서 시작
      {
        x: '0%', // 왼쪽으로 이동
        opacity: 1, // 투명도 유지
        duration: 8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: circleRef.current,
          start: 'top 80%', // 원이 확대되기 시작할 때
          end: 'top 20%', // 원이 확대되기 끝날 때
          scrub: 1,
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
        {/* 기존 텍스트 */}
        <Text
          ref={textRef}
          className="text-black text-2xl font-bold whitespace-nowrap opacity-100 absolute left-1/2 transform -translate-x-1/2"
        >
          <span>B</span>
          <span className="lis">lis</span>
          <span>s</span>
          <span className="dot">.</span>
        </Text>

        {/* 새로운 텍스트 */}
        <Text
          ref={newTextRef}
          className="text-black text-2xl font-bold whitespace-nowrap opacity-0 absolute left-1/2 transform -translate-x-1/2 z-20"
        >
          <p>New</p>
        </Text>

        {/* Bliss 텍스트는 원과 동시에 확대되지 않으며 오른쪽에서 왼쪽으로 이동 */}
        <Text
          ref={blissTextRef}
          className="text-black text-2xl font-bold whitespace-nowrap opacity-100 absolute left-1/2 transform -translate-x-1/2 z-10"
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
