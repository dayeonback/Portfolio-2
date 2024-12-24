import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    // GSAP 애니메이션 설정
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section', // 스크롤 트리거 대상
        start: 'top top', // 트리거 시작 위치
        end: '+=150%', // 트리거 종료 위치
        scrub: 1, // 스크롤에 따라 애니메이션 동기화
        pin: true, // 섹션 고정
      },
    });

    // 원 확장 및 이동 애니메이션
    tl.fromTo(
      '.circle',
      {
        scale: 0.2, // 초기 크기
        x: '-50%', // X축 초기 위치
        y: '-50%', // Y축 중앙에서 시작
      },
      {
        scale: 10, // 최종 크기
        x: '-50%', // X축 중앙 고정
        y: '-50%', // Y축 중앙 고정
        duration: 1.5,
        ease: 'power2.out',
      }
    );

    // 텍스트 페이드 인
    tl.fromTo(
      '.text',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.inOut' },
      '<' // 이전 애니메이션과 동시에 실행
    );
  }, []);

  return (
    <Box className="hero-section" position="relative" h="200vh" w="full" bg="black">
      {/* 작은 원 */}
      <Box
        className="circle"
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)" // 화면 중앙에서 시작
        w="50vmin"
        h="50vmin"
        bg="red"
        borderRadius="full"
        zIndex={0}
      />

      {/* 텍스트 */}
      <Text
        className="text"
        fontSize="8rem"
        fontWeight="bold"
        color="black"
        textAlign="center"
        position="relative"
        zIndex={1}
        opacity={0} // 초기 상태
      >
        Bliss
      </Text>
    </Box>
  );
}
