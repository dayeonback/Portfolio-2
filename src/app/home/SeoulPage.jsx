import { Box, Image, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const centerRef = useRef(null);

  // 업데이트되는 현재 시간
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // GSAP 애니메이션: 시계 바늘 회전
  useEffect(() => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const hourAngle = (hour % 12) * 30 + minute * 0.5; // 시침 각도
    const minuteAngle = minute * 6; // 분침 각도
    const secondAngle = second * 6; // 초침 각도

    gsap.to(hourRef.current, { rotate: hourAngle, duration: 1, ease: 'power2.out' });
    gsap.to(minuteRef.current, { rotate: minuteAngle, duration: 1, ease: 'power2.out' });
    gsap.to(secondRef.current, { rotate: secondAngle, duration: 0.2, ease: 'power2.out' }); // 초침은 1초에 한 번씩 움직임
  }, [currentTime]);

  // 현재 날짜 포맷
  const getFormattedDate = () => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return currentTime.toLocaleDateString('en-US', options).toUpperCase();
  };

  // 현재 시간 포맷
  const getFormattedTime = () => {
    return currentTime.toLocaleTimeString('en-US', { hour12: false });
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bg="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Header */}
      <Text fontSize="6xl" fontWeight="bold" color="white" textAlign="center" fontFamily="Chosunilbo_myunjo">
        FINALLY, WE&#39; RE
      </Text>
      <Text fontSize="7xl" color="green" fontWeight="bold" textAlign="center">
        IN SEOUL
      </Text>

      {/* Image with Gradient */}
      <Box w="100%" h="60%" mt={5} position="relative" overflow="hidden">
        <Image src="/public/images/pattern/main/Iceland.jpg" alt="Seoul" objectFit="cover" w="100%" h="100%" />
        <Box position="absolute" bottom="0" w="100%" h="50%" bgGradient="linear(to-b, transparent, black)" />
      </Box>

      {/* Date */}
      <Text fontSize="4xl" color="white" mt={5} textAlign="center" fontFamily="Chosunilbo_myunjo">
        {getFormattedDate()}
      </Text>

      {/* Time */}
      <Text fontSize="5xl" color="white" fontWeight="bold" textAlign="center">
        {getFormattedTime()}
      </Text>

      {/* Clock Animation */}
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="80vw" h="80vw">
        {/* Hour Hand */}
        <Box
          ref={hourRef}
          w="10px"
          h="60%"
          bg="white"
          boxShadow="0 0 10px rgba(255, 255, 255, 0.5)"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -100%)"
          transformOrigin="bottom"
          borderRadius="5px"
          zIndex="3"
        />
        {/* Minute Hand */}
        <Box
          ref={minuteRef}
          w="6px"
          h="50%"
          bg="gray.300"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -100%)"
          transformOrigin="bottom"
          borderRadius="3px"
          zIndex="2"
        />
        {/* Second Hand */}
        <Box
          ref={secondRef}
          w="2px" // 초침의 얇은 폭
          h="55%" // 초침 길이는 짧게 유지
          bg="red"
          boxShadow="0 0 8px rgba(255, 0, 0, 0.7)" // 초침에 붉은 그림자 추가
          position="absolute"
          top="50%" // 핸즈 중심과 약간 겹치도록 조정
          left="50%"
          transform="translate(-50%, -100%)"
          transformOrigin="bottom"
          zIndex="2"
        />

        {/* Center Hands */}
        <Box
          ref={centerRef}
          w="20px"
          h="20px"
          bg="white"
          borderRadius="50%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          boxShadow="0 0 15px rgba(255, 255, 255, 0.8)"
          zIndex="4"
        />
      </Box>
    </Box>
  );
};

export default Home;
