import React, { useEffect, useRef } from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const ScrollSlide = () => {
  const containerRef = useRef(null); // 슬라이드 컨테이너
  const slideRefs = useRef([]); // 슬라이드 박스들

  const slides = [
    {
      img: '/images/pattern/main/Iceland.jpg',
      title: 'NIVEA',
      description: 'Global campaign for NIVEA.',
    },
    {
      img: '/images/pattern/main/Italy.jpg',
      title: 'Innocent',
      description: 'Campaign for Innocent.',
    },
    {
      img: '/images/pattern/main/Switzerland.jpg',
      title: 'Clam',
      description: 'Creative work for Clam.',
    },
    {
      img: '/images/pattern/main/Iceland.jpg',
      title: 'LinkedIn',
      description: 'Promoting LinkedIn globally.',
    },
  ];

  useEffect(() => {
    // 가로 슬라이드 애니메이션 설정
    gsap.to(slideRefs.current, {
      xPercent: -100 * (slideRefs.current.length - 1), // 각 슬라이드가 화면 밖으로 나가도록 설정
      ease: 'none', // 부드럽게 이동
      scrollTrigger: {
        trigger: containerRef.current, // 트리거로 슬라이드 컨테이너 사용
        start: 'top top', // 스크롤 시작 위치
        end: `+=${containerRef.current.offsetWidth}`, // 스크롤이 끝나는 위치
        scrub: true, // 스크롤에 따라 애니메이션이 매끄럽게 동작
        pin: true, // 스크롤 영역을 고정
        anticipatePin: 1,
        markers: false, // 디버그 마커 표시 안 함
      },
    });
  }, []);

  return (
    <Box ref={containerRef} position="relative" w="100%" h="100vh" overflow="hidden">
      <Box
        display="flex"
        width={`${slides.length * 100}vw`} // 각 슬라이드가 화면 너비를 차지하도록 설정
        height="100%"
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            flex="none" // 모든 박스가 동일한 너비를 차지하도록 설정
            w="100vw" // 슬라이드 너비를 화면 너비로 설정
            h="100vh"
            position="relative"
            overflow="hidden"
          >
            {/* 이미지 */}
            <Image src={slide.img} alt={slide.title} objectFit="cover" w="100%" h="100%" />
            {/* 텍스트 오버레이 */}
            <Box
              position="absolute"
              bottom="10%"
              left="50%"
              transform="translateX(-50%)"
              zIndex={10}
              textAlign="center"
              color="white"
            >
              <Text fontSize="4xl" fontWeight="bold">
                {slide.title}
              </Text>
              <Text fontSize="lg" mt={2}>
                {slide.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ScrollSlide;
