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
        start: 'top bottom', // 트리거 시작 위치: 화면 하단에서 시작
        end: '+=100%', // 트리거 종료 위치: 스크롤 100%까지
        scrub: 1, // 스크롤에 따라 애니메이션 동기화
        pin: true, // 섹션 고정
      },
    });

    // 원 확장 애니메이션
    tl.fromTo(
      '.circle',
      {
        scale: 0.2, // 초기 크기 (작게 보이는 상태)
        x: '-50%', // X축 중앙 위치
        y: '-50%', // Y축 중앙 위치
      },
      {
        scale: 3, // 원이 커지는 크기
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
        top="50%" // 화면 중앙에서 시작
        left="50%"
        transform="translate(-50%, -50%)" // 화면 중앙에 배치
        w="50vmin" // 초기 크기 (작게 시작)
        h="50vmin" // 초기 크기 (작게 시작)
        bg="red"
        borderRadius="full"
        zIndex={0}
      />

      {/* 텍스트 */}
      <Text
        className="text"
        fontSize="8rem"
        fontWeight="bold"
        color="white" // 텍스트 색상 변경
        textAlign="center"
        position="relative"
        zIndex={1}
        opacity={0} // 초기 상태
      >
        CYLNR
      </Text>
    </Box>
  );
}
