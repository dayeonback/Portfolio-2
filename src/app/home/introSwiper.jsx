// import React, { useEffect, useRef } from 'react';
// import { Box, Flex, Heading } from '@chakra-ui/react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import 'tailwindcss/tailwind.css';

// gsap.registerPlugin(ScrollTrigger);

// const Slide = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slides = gsap.utils.toArray('.slide');

//     gsap.to(slides, {
//       xPercent: -100 * (slides.length - 1),
//       ease: 'none',
//       scrollTrigger: {
//         trigger: sliderRef.current,
//         pin: true,
//         scrub: 1,
//         snap: 1 / (slides.length - 1),
//         end: () => '+=' + sliderRef.current.offsetWidth,
//       },
//     });
//   }, []);

//   return (
//     <Box ref={sliderRef} className="w-screen h-screen overflow-hidden flex" bg="black">
//       {/* 슬라이드 1 */}
//       <Flex
//         className="slide"
//         bgImage="url('https://source.unsplash.com/random/1')"
//         bgSize="cover"
//         bgPosition="center"
//         justify="center"
//         align="center"
//         flex="0 0 100vw"
//       >
//         <Heading color="white" fontSize="5xl" textAlign="center">
//           NIVEA
//         </Heading>
//       </Flex>

//       {/* 슬라이드 2 */}
//       <Flex
//         className="slide"
//         bgImage="url('https://source.unsplash.com/random/2')"
//         bgSize="cover"
//         bgPosition="center"
//         justify="center"
//         align="center"
//         flex="0 0 100vw"
//       >
//         <Heading color="white" fontSize="5xl" textAlign="center">
//           Global Campaigns
//         </Heading>
//       </Flex>

//       {/* 슬라이드 3 */}
//       <Flex
//         className="slide"
//         bgImage="url('https://source.unsplash.com/random/3')"
//         bgSize="cover"
//         bgPosition="center"
//         justify="center"
//         align="center"
//         flex="0 0 100vw"
//       >
//         <Heading color="white" fontSize="5xl" textAlign="center">
//           Innovative & Creative
//         </Heading>
//       </Flex>
//     </Box>
//   );
// };

// export default Slide;
