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

    gsap.to(hourRef.current, {
      rotate: hourAngle,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.to(minuteRef.current, {
      rotate: minuteAngle,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.to(secondRef.current, {
      rotate: secondAngle,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, [currentTime]);

  // 현재 날짜
  const getFormattedDate = () => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return currentTime.toLocaleDateString('en-US', options).toUpperCase();
  };

  // 현재 시간
  const getFormattedTime = () => {
    return currentTime.toLocaleTimeString('en-US', { hour12: false });
  };

  return (
    <Box w="100%" h="240vh" bg="black" position="relative" overflow="hidden">
      {/* Background Image */}
      <Image
        src="/images/pattern/main/seoul.jpg"
        alt="Seoul"
        objectFit="contain"
        w="40%"
        h="auto"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        borderRadius="30px"
        zIndex="1"
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-b, transparent, black)"
        zIndex="2"
      />

      {/* Content */}
      <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="3">
        {/* Top Text */}
        <Box position="absolute" top="15%" left="50%" transform="translateX(-50%)" textAlign="center" lineHeight="1.2">
          <Text
            fontSize={['3rem', '4rem', '6rem', '8rem', '11rem']}
            fontWeight="bold"
            color="white"
            fontFamily="Chosunilbo_myungjo"
            whiteSpace="nowrap"
          >
            FINALLY, WE&#39;RE
          </Text>
          <Text
            fontSize={['3rem', '4rem', '6rem', '8rem', '10rem']}
            color="#08fc96"
            fontWeight="bold"
            whiteSpace="nowrap"
          >
            IN SEOUL
          </Text>
        </Box>

        {/* Clock */}
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="50vw" h="50vw">
          {/* Hour Hand */}
          <Box
            ref={hourRef}
            w="2%"
            h="70%"
            bg="white"
            position="absolute"
            top="-20%"
            left="50%"
            transform="translateX(-50%)"
            transformOrigin="50% 100%"
            borderRadius="50px"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.8)"
          />

          {/* Minute Hand */}
          <Box
            ref={minuteRef}
            w="1.5%"
            h="80%"
            bg="white"
            position="absolute"
            top="-30%"
            left="50%"
            transform="translateX(-50%)"
            transformOrigin="50% 100%"
            borderRadius="50px"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.8)"
          />

          {/* Second Hand */}
          <Box
            ref={secondRef}
            w="1%"
            h="100%"
            bg="#08fc96"
            position="absolute"
            top="-50%"
            left="50%"
            transform="translateX(-50%)"
            transformOrigin="50% 100%"
            borderRadius="50px"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.8)"
          />

          {/* Center Hands */}
          <Box
            ref={centerRef}
            w="7%"
            h="7%"
            bg="white"
            borderRadius="50%"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.8)"
          />
        </Box>

        {/* Bottom Text */}
        <Box
          position="absolute"
          bottom="20%"
          left="50%"
          transform="translateX(-50%)"
          textAlign="center"
          lineHeight="1.2"
        >
          <Text
            fontSize={['4rem', '5rem', '7rem', '9rem', '11rem']}
            color="white"
            fontFamily="Chosunilbo_myungjo"
            whiteSpace="nowrap"
          >
            {getFormattedDate()}
          </Text>
          <Text fontSize={['3rem', '4rem', '6rem', '8rem', '10rem']} color="white" fontWeight="bold">
            {getFormattedTime()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
