import React, { useEffect } from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mockInformation } from '../../data/mockInformation'; // mockInformation.js에서 배열 불러오기

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  useEffect(() => {
    // GSAP 애니메이션 설정
    gsap.fromTo(
      '.planning-item', // planning-item 클래스를 가진 모든 텍스트에 애니메이션 적용
      { opacity: 0, y: 50 }, // 초기 상태
      {
        opacity: 1,
        y: 0,
        duration: 3,
        stagger: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.planning-group',
          start: 'top 100%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
          scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <Box
      className="planning-group"
      bg="black"
      py={64}
      px={[4, 8, 64]} // 기본 좌우 여백을 4에서 16으로 점진적으로 증가
      textAlign="center"
      color="white"
    >
      {/* Flexbox로 제목과 콘텐츠를 나누어 배치 */}
      <Flex direction="column" gap={32}>
        {/* 반복되는 제목과 콘텐츠를 섹션으로 배치 */}
        {mockInformation.map((item) => (
          <Flex
            key={item.id}
            direction={['column', 'row']}
            align={['flex-start', 'flex-start']} // 왼쪽 정렬을 맞추기 위해 flex-start 설정
            justify="space-between"
            gap={40}
            mb={8}
          >
            {/* 왼쪽 제목 */}
            <Box
              flex="1"
              textAlign={['center', 'left']}
              mb={8}
              display="flex"
              alignItems="flex-start" // 제목을 첫 번째 텍스트와 맞추기 위해 alignItems 수정
            >
              <Text className="planning-item" fontSize="5xl" fontWeight="bold" mb={4} color="white">
                {item.title}
              </Text>
            </Box>

            {/* 오른쪽 내용 */}
            <Box flex="2" textAlign="left">
              <Text className="planning-item" fontSize="3xl" fontWeight="semibold" mb={8}>
                {item.subtitle}
              </Text>
              <Text className="planning-item" fontSize="2xl" mb={8} color="white">
                {item.description}
              </Text>
              <Text className="planning-item" color="gray.200" lineHeight="1.8" mb={8}>
                {item.koreanDescription}
              </Text>
            </Box>
          </Flex>
        ))}

        {/* 각 섹션 아래에 길게 흰 구분선 추가 */}
        <Divider borderColor="white" borderWidth="2px" my={8} />
      </Flex>
    </Box>
  );
};

export default Information;
