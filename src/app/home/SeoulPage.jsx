import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
      ease: "power2.out",
    });
    gsap.to(minuteRef.current, {
      rotate: minuteAngle,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(secondRef.current, {
      rotate: secondAngle,
      duration: 0.2,
      ease: "power2.out",
    }); // 초침은 1초에 한 번씩 움직임
  }, [currentTime]);

  // 현재 날짜 포맷
  const getFormattedDate = () => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return currentTime.toLocaleDateString("en-US", options).toUpperCase();
  };

  // 현재 시간 포맷
  const getFormattedTime = () => {
    return currentTime.toLocaleTimeString("en-US", { hour12: false });
  };

  return (
    <Box w="100%" h="150vh" bg="black" position="relative" overflow="hidden">
      {/* Background Image */}
      <Image
        src="/images/pattern/main/seoul.jpg"
        alt="Seoul"
        objectFit="contain"
        w="100%"
        h="auto"
        position="absolute"
        top="0"
        left="0"
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
        {/* Header (Top Text) */}
        <Box
          position="absolute"
          top="15%"
          left="50%"
          transform="translateX(-50%)"
          textAlign="center"
          lineHeight="1.2" // 줄 간격 조정
        >
          <Text
            fontSize="7xl"
            fontWeight="bold"
            color="white"
            fontFamily="Chosunilbo_myungjo"
          >
            FINALLY, WE&#39; RE
          </Text>
          <Text fontSize="6xl" color="#08fc96" fontWeight="bold">
            IN SEOUL
          </Text>
        </Box>
        {/* Clock */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="80vw"
          h="80vw"
        >
          {/* Hour Hand */}
          <Box
            ref={hourRef}
            w="6px" // 시침 너비
            h="70%" // 시침 길이 증가
            bg="white"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)" // 검정 그림자
            position="absolute"
            top="40%" // 중심에 맞추기
            left="50%" // 중심에 맞추기
            transform="translateX(-50%) translateY(-50%)" // 위치 조정
            transformOrigin="bottom"
            borderRadius="5px"
          />

          {/* Minute Hand */}
          <Box
            ref={minuteRef}
            w="5px" // 분침 너비 약간 증가
            h="70%" // 분침 길이 증가
            bg="gray.300"
            boxShadow="0 0 8px rgba(0, 0, 0, 0.5)" // 검정 그림자
            position="absolute"
            top="30%" // 중심에 맞추기
            left="50%" // 중심에 맞추기
            transform="translateX(-50%) translateY(-50%)" // 위치 조정
            transformOrigin="bottom"
            borderRadius="3px"
          />

          {/* Second Hand */}
          <Box
            ref={secondRef}
            w="2px" // 초침의 얇은 폭
            h="80%" // 초침 길이 증가
            bg="#08fc96"
            boxShadow="0 0 8px rgba(0, 0, 0, 0.7)" // 검정 그림자
            position="absolute"
            top="25%" // 중심에 맞추기
            left="50%" // 중심에 맞추기
            transform="translateX(-50%) translateY(-50%)" // 위치 조정
            transformOrigin="bottom"
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
            boxShadow="0 0 15px rgba(0, 0, 0, 0.8)" // 검정 그림자
          />
        </Box>

        {/* Date and Time (Bottom Text) */}
        <Box
          position="absolute"
          bottom="20%"
          left="50%"
          transform="translateX(-50%)"
          textAlign="center"
          lineHeight="1.2" // 줄 간격 조정
        >
          <Text fontSize="5xl" color="white" fontFamily="Chosunilbo_myungjo">
            {getFormattedDate()}
          </Text>
          <Text fontSize="6xl" color="white" fontWeight="bold">
            {getFormattedTime()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
