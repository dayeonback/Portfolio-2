import React, { useEffect, useRef } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const ScrollSlide = () => {
  const containerRef = useRef(null); // 슬라이드 컨테이너 참조
  const slideRefs = useRef([]); // 각 슬라이드 참조 배열

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
      xPercent: -100 * (slideRefs.current.length - 1), // 슬라이드가 이동하는 거리 설정
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top', // 시작 위치
        end: `+=${(containerRef.current.offsetWidth * slides.length) / 2}`, // 총 스크롤 거리 줄이기 끝 위치
        scrub: true, // 스크롤에 따라 애니메이션 동기화
        pin: true, // 스크롤 고정
        anticipatePin: 1,
        markers: false,
      },
    });
  }, [slides.length]); // slides.length를 의존성 배열에 추가

  return (
    <Box ref={containerRef} position="relative" w="100%" h="100vh" overflow="hidden">
      <Box
        display="flex"
        width={`${slides.length * 70}vw`} // 간격 포함 전체 슬라이드 너비 계산
        height="70%"
        gap="5vw" // 슬라이드 간격 추가
        justifyContent="center"
        alignItems="center"
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            flex="none"
            w="60vw" // 슬라이드 너비
            h={{ base: '40vh', md: '50vh', lg: '60vh' }}
            position="relative"
            borderRadius="20px" // 모서리 둥글게 설정
            overflow="hidden"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.3)" // 그림자 효과
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
              <Text fontSize="2xl" fontWeight="bold">
                {slide.title}
              </Text>
              <Text fontSize="md" mt={2}>
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
