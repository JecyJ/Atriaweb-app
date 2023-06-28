// 'use client'

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useRef, useEffect } from 'react';
// import Hero from "@components/atria/Hero";
// import Academy from "@components/atria/academy";
// import Bgvideo from "@components/atria/bgvideo";
// import Health from "@components/atria/health";
// import Institute from "@components/atria/institute";
// import Learning from "@components/atria/learning";
// import Medicalminds from "@components/atria/medicalminds";
// import Mission from "@components/atria/mission";
// import Subscribe from "@components/atria/subscribe";

// const Atria = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const containerElement = containerRef.current;

//     if (containerElement) {
//       gsap.registerPlugin(ScrollTrigger);

//       const sections = containerElement.children;

//       gsap.to(sections, {
//         y: '100vh',
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: containerElement,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: true,
//         },
//       });
//     }
//   }, []);

//   return (
//     <section ref={containerRef}>
//       <div className="section">
//         <Hero />
//       </div>
//       <div className="section">
//         <Bgvideo />
//       </div>
//       <div className="section">
//         <Learning />
//       </div>
//       <div className="section">
//         <Mission />
//       </div>
//       <div className="section">
//         <Medicalminds />
//       </div>
//       <div className="section">
//         <Institute />
//       </div>
//       <div className="section">
//         <Academy />
//       </div>
//       <div className="section">
//         <Health />
//       </div>
//       <div className="section">
//         <Subscribe />
//       </div>
//     </section>
//   );
// };
// export default Atria;



import Hero from "@components/atria/Hero";
import Academy from "@components/atria/academy";
import Bgvideo from "@components/atria/bgvideo";
import Health from "@components/atria/health";
import Institute from "@components/atria/institute";
import Learning from "@components/atria/learning";
import Medicalminds from "@components/atria/medicalminds";
import Mission from "@components/atria/mission";
import Subscribe from "@components/atria/subscribe";

const Atria = () => {
  return (
    <section>
      <Hero />
      <Bgvideo />
      <Learning />
      <Mission />
      <Medicalminds />
      <Institute />
      <Academy />
      <Health />
      <Subscribe />
    </section>
  )
}

export default Atria;