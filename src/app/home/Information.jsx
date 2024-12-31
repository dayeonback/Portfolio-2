import React, { useEffect } from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  useEffect(() => {
    // GSAP 애니메이션 설정
    gsap.fromTo(
      '.planning-item', // planning-item 클래스가 있는 모든 텍스트에 애니메이션 적용
      { opacity: 0, y: 50 }, // 초기 상태
      {
        opacity: 1,
        y: 0,
        duration: 2, // 애니메이션 시간을 2초로 늘림
        stagger: 0.2, // 애니메이션이 순차적으로 발생하도록 설정
        ease: 'power3.out', // 부드럽게 애니메이션을 만들어주는 ease 함수
        scrollTrigger: {
          trigger: '.planning-group', // 트리거는 .planning-group 요소
          start: 'top 70%', // 요소의 상단이 화면의 50% 지점에 도달하면 애니메이션 시작
          end: 'bottom 30%', // 요소의 하단이 화면의 30% 지점에 도달하면 애니메이션 끝
          toggleActions: 'play reverse play reverse', // 스크롤을 내릴 때, 올릴 때 모두 애니메이션이 실행되도록 수정
          scrub: 1, // 애니메이션이 스크롤에 따라 더 느리게 반응하도록 설정
          // markers: false, // 마커를 표시하지 않음
        },
      }
    );
  }, []);

  const content = [
    {
      subtitle: 'Responsible for the start and end of communication for creativity.',
      description:
        'The Planning Group is in charge of various management tasks such as client communication, establishing and managing creative content strategies.',
      koreanDescription:
        '플래닝 그룹은 클라이언트 커뮤니케이션을 비롯해 크리에이티브 콘텐츠 전략 수립, 관리 등의 각종 매니지먼트 업무를 담당합니다.',
    },
    {
      subtitle: 'Responsible for the start and end of communication for creativity.',
      description:
        'The Planning Group is in charge of various management tasks such as client communication, establishing and managing creative content strategies.',
      koreanDescription:
        '플래닝 그룹은 클라이언트 커뮤니케이션을 비롯해 크리에이티브 콘텐츠 전략 수립, 관리 등의 각종 매니지먼트 업무를 담당합니다.',
    },
    {
      subtitle: 'Responsible for the start and end of communication for creativity.',
      description:
        'The Planning Group is in charge of various management tasks such as client communication, establishing and managing creative content strategies.',
      koreanDescription:
        '플래닝 그룹은 클라이언트 커뮤니케이션을 비롯해 크리에이티브 콘텐츠 전략 수립, 관리 등의 각종 매니지먼트 업무를 담당합니다.',
    },
    {
      subtitle: 'Responsible for the start and end of communication for creativity.',
      description:
        'The Planning Group is in charge of various management tasks such as client communication, establishing and managing creative content strategies.',
      koreanDescription:
        '플래닝 그룹은 클라이언트 커뮤니케이션을 비롯해 크리에이티브 콘텐츠 전략 수립, 관리 등의 각종 매니지먼트 업무를 담당합니다.',
    },
  ];

  return (
    <Box
      className="planning-group"
      bg="black" // 배경색을 검정으로 설정
      py={16}
      px={[4, 8, 16]}
      textAlign="center"
      color="white" // 기본 텍스트 색상을 흰색으로 설정
    >
      {/* Flexbox로 제목과 콘텐츠를 나누어 배치 */}
      <Flex direction="column" gap={8}>
        {/* 반복되는 제목과 콘텐츠를 섹션으로 배치 */}
        {content.map((item, index) => (
          <Flex
            key={index}
            direction={['column', 'row']} // 작은 화면에서는 세로로, 큰 화면에서는 가로로 배치
            align="center"
            justify="space-between"
            gap={8}
            mb={8} // 각 섹션 사이에 간격을 추가
          >
            {/* 왼쪽 제목 */}
            <Box flex="1" textAlign={['center', 'left']} mb={8}>
              <Text className="planning-item" fontSize="4xl" fontWeight="bold" mb={4} color="white">
                Planning Group
              </Text>
            </Box>

            {/* 오른쪽 내용 */}
            <Box flex="2" textAlign="left">
              <Text
                className="planning-item"
                fontSize="lg"
                color="gray.300" // 부제목 색상 약간 어둡게
                mb={4}
              >
                {item.subtitle}
              </Text>
              <Text className="planning-item" fontSize="2xl" fontWeight="semibold" mb={4} color="white">
                {item.description}
              </Text>
              <Text className="planning-item" color="gray.300" lineHeight="1.8" mb={8}>
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
