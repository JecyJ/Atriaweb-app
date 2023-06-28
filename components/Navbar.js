// 'use client'


// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [nav, setNav] = useState(false);
//   const [activePage, setActivePage] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!nav) {
//         const currentScrollPos = window.pageYOffset;
//         setShowNavbar(
//           prevScrollPos > currentScrollPos || currentScrollPos <= 0
//         );
//         setPrevScrollPos(currentScrollPos);

//         const instituteSection = document.getElementById("atria-institute");
//         const academySection = document.getElementById("atria-academy");
//         const healthSection = document.getElementById("atria-health");

//         if (
//           activePage === "/atriainstitute" &&
//           instituteSection &&
//           currentScrollPos >= instituteSection.offsetTop
//         ) {
//           setActivePage("");
//         } else if (
//           activePage === "/atriaacademy" &&
//           academySection &&
//           currentScrollPos >= academySection.offsetTop
//         ) {
//           setActivePage("");
//         } else if (
//           activePage === "/atriahealth" &&
//           healthSection &&
//           currentScrollPos >= healthSection.offsetTop
//         ) {
//           setActivePage("");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, nav, activePage]);

//   function handleNav() {
//     setNav((prevNav) => !prevNav);
//   }

//   function handleLinkClick(page) {
//     setActivePage(page);
//   }

//   const menuVariants = {
//     hidden: { opacity: 0, y: "100%" },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 1 }}
//       animate={{ opacity: showNavbar ? 1 : 0 }}
//       className={`fixed top-0 w-full py-5 shadow-xl z-50 bg-transparent transition-opacity duration-900 ${
//         showNavbar || !nav ? "pointer-events-auto" : "pointer-events-none"
//       }`}
//     >
//       <div className="flex justify-between items-center md:px-0 max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto bg-transparent">
//         <Link href="/">
//           <h1
//             className={`text-4xl font-semibold ${
//               activePage === "/atriainstitute" ||
//               activePage === "/atriaacademy" ||
//               activePage === "/atriahealth"
//                 ? "text-white"
//                 : "text-[#3c4e3d]"
//             }`}
//           >
//             atria
//           </h1>
//         </Link>
//         <ul className="text-[#3c4e3d] text-base list-disc list-inside hidden md:block">
//           <Link href="/atriainstitute">
//             <li 
//               className={`${
//               activePage === "/atriainstitute" ||
//               activePage === "/atriaacademy" ||
//               activePage === "/atriahealth"
//                 ? "text-white"
//                 : "text-[#3c4e3d]"
//               }`}
//               onClick={() => handleLinkClick("/atriainstitute")}
//             >
//               Atria Institute
//             </li>
//           </Link>
//           <Link href="/atriaacademy">
//             <li 
//               className={`${
//               activePage === "/atriainstitute" ||
//               activePage === "/atriaacademy" ||
//               activePage === "/atriahealth"
//                 ? "text-white"
//                 : "text-[#3c4e3d]"
//               }`}
//               onClick={() => handleLinkClick("/atriaacademy")}
//             >
//               Atria Academy of Science & Medicine
//             </li>
//           </Link>
//           <Link href="/atriahealth">
//             <li 
//               className={`${
//               activePage === "/atriainstitute" ||
//               activePage === "/atriaacademy" ||
//               activePage === "/atriahealth"
//                 ? "text-white"
//                 : "text-[#3c4e3d]"
//               }`}
//               onClick={() => handleLinkClick("/atriahealth")}
//             >
//               Atria Health Collaborative
//             </li>
//           </Link>
//         </ul>
//         <div
//           onClick={handleNav}
//           className={`md:hidden text-[#3c4e3d] cursor-pointer" ${
//               activePage === "/atriainstitute" ||
//               activePage === "/atriaacademy" ||
//               activePage === "/atriahealth"
//                 ? "text-white"
//                 : "text-[#3c4e3d]"
//               }`}
//         >
//           <HiOutlineMenuAlt1 size={24} />
//         </div>
//         <AnimatePresence>
//           {nav && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={menuVariants}
//               className="fixed md:hidden left-0 top-0 right-0 bottom-0 w-full h-full bg-[#3c4e3d] ease-in-out duration-700"
//             >
//               <div className="max-w-[520px] m-auto mt-6 flex justify-between items-center">
//                 <Link href="/">
//                   <h1
//                     onClick={handleNav}
//                     className="text-4xl text-white font-semibold"
//                   >
//                     atria
//                   </h1>
//                 </Link>
//                 <div
//                   onClick={handleNav}
//                   className="text-white cursor-pointer"
//                 >
//                   <AiOutlineClose size={24} />
//                 </div>
//               </div>
//               <ul className="text-white text-5xl mt-8 max-w-[520px] md:max-w-[1250px] m-auto">
//                 <Link href="/atriainstitute">
//                   <li
//                     onClick={() => {
//                       handleLinkClick("/atriainstitute");
//                       handleNav();
//                     }}
//                   >
//                     Atria Institute
//                   </li>
//                 </Link>
//                 <Link href="/atriaacademy">
//                   <li
//                     onClick={() => {
//                       handleLinkClick("/atriaacademy");
//                       handleNav();
//                     }}
//                     className="my-12"
//                   >
//                     Atria Academy of Science & Medicine
//                   </li>
//                 </Link>
//                 <Link href="/atriahealth">
//                   <li
//                     onClick={() => {
//                       handleLinkClick("/atriahealth");
//                       handleNav();
//                     }}
//                   >
//                     Atria Health Collaborative
//                   </li>
//                 </Link>
//               </ul>
//               <ul className="max-w-[520px] md:max-w-[1250px] m-auto text-white mt-24">
//                 <Link href="/career">
//                   <li
//                     onClick={handleNav}
//                     className="mb-12"
//                   >
//                     Career Opportunities
//                   </li>
//                 </Link>
//                 <Link href="/request">
//                   <li onClick={handleNav}>Request Info</li>
//                 </Link>
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.section>
//   );
// };

// export default Navbar;






'use client'


import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!nav) {
        const currentScrollPos = window.pageYOffset;
        setShowNavbar(
          prevScrollPos > currentScrollPos || currentScrollPos <= 0
        );
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, nav]);

  function handleNav() {
    setNav((prevNav) => !prevNav);
  }

  const menuVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      className={`fixed top-0 w-full py-5 shadow-xl z-50 bg-transparent transition-opacity duration-900 ${
        showNavbar || !nav ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center md:px-0 max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto bg-transparent">
        <Link href="/">
          <h1 className="text-4xl text-[#3c4e3d] font-semibold">atria</h1>
        </Link>
        <ul className="text-[#3c4e3d] text-base list-disc list-inside hidden md:block">
          <Link href="/atriainstitute">
            <li>Atria Institute</li>
          </Link>
          <Link href="/atriaacademy">
            <li>Atria Academy of Science & Medicine</li>
          </Link>
          <Link href="/atriahealth">
            <li>Atria Health Collaborative</li>
          </Link>
        </ul>
        <div
          onClick={handleNav}
          className="md:hidden text-[#3c4e3d] cursor-pointer"
        >
          <HiOutlineMenuAlt1 size={24} />
        </div>
        <AnimatePresence>
          {nav && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed md:hidden left-0 top-0 right-0 bottom-0 w-full h-full bg-[#3c4e3d] ease-in-out duration-700"
            >
              <div className="max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto mt-6 flex justify-between items-center">
                <Link href="/">
                  <h1
                    onClick={handleNav}
                    className="text-4xl text-white font-semibold"
                  >
                    atria
                  </h1>
                </Link>
                <div
                  onClick={handleNav}
                  className="text-white cursor-pointer"
                >
                  <AiOutlineClose size={24} />
                </div>
              </div>
              <ul className="text-white text-5xl mt-8 max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto">
                <Link href="/atriainstitute">
                  <li onClick={handleNav}>Atria Institute</li>
                </Link>
                <Link href="/atriaacademy">
                  <li onClick={handleNav} className="my-12">
                    Atria Academy of Science & Medicine
                  </li>
                </Link>
                <Link href="/atriahealth">
                  <li onClick={handleNav}>Atria Health Collaborative</li>
                </Link>
              </ul>
              <ul className="max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto text-white mt-24">
                <Link href="/career">
                  <li onClick={handleNav} className="mb-12">
                    Career Opportunities
                  </li>
                </Link>
                <Link href="/request">
                  <li onClick={handleNav}>Request Info</li>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Navbar;






// "use client"

// import Link from "next/link";
// import { motion } from 'framer-motion';
// import { useEffect, useState} from "react";
// import { HiOutlineMenuAlt1 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [nav, setNav] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!nav) {
//         const currentScrollPos = window.pageYOffset;
//         setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
//         setPrevScrollPos(currentScrollPos);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos, nav]);

//   function handleNav() {
//     setNav(prevNav => !prevNav);
//   }

//   const menuVariants = {
//     hidden: { opacity: 0, y: '-100%' },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 1 }}
//       animate={{ opacity: showNavbar ? 1 : 0 }}
//       className={`fixed top-0 w-full py-5 shadow-xl z-50 bg-transparent transition-opacity duration-900 ${
//         showNavbar || !nav ? 'pointer-events-auto' : 'pointer-events-none'
//       }`}
//     >
//       <div className='flex justify-between items-center md:px-0 max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto bg-transparent'>
//         <Link href='/'>
//           <h1 className='text-4xl text-[#3c4e3d] font-semibold'>atria</h1>
//         </Link>
//         <ul className='text-[#3c4e3d] text-base list-disc list-inside hidden md:block'>
//           <Link href='/atriainstitute'>
//             <li>Atria Institute</li>
//           </Link>
//           <Link href='/atriaacademy'>
//             <li>Atria Academy of Science & Medicine</li>
//           </Link>
//           <Link href='/atriahealth'>
//             <li>Atria Health Collaborative</li>
//           </Link>
//         </ul>
//         <div onClick={handleNav} className='md:hidden text-[#3c4e3d] cursor-pointer'>
//           <HiOutlineMenuAlt1 size={24} />
//         </div>
//         <motion.div
//           initial='hidden'
//           animate={nav ? 'visible' : 'hidden'}
//           variants={menuVariants}
//           className={nav ? 'fixed md:hidden left-0 top-0 right-0 bottom-0 w-full h-full bg-[#3c4e3d] ease-in-out duration-700' : 'fixed md:hidden bottom-[-100%] h-full bg-[#3c4e3d] ease-in-out duration-700'}
//         >
//           <div className='max-w-[520px] m-auto mt-6 flex justify-between items-center'>
//             <Link href='/'>
//               <h1 onClick={handleNav} className='text-4xl text-white font-semibold'>atria</h1>
//             </Link>
//             <div onClick={handleNav} className='text-white cursor-pointer'>
//               <AiOutlineClose size={24} />        
//             </div>
//           </div>
//           <ul className='text-white text-5xl mt-8 max-w-[520px] md:max-w-[1250px] m-auto'>
//             <Link href='/atriainstitute'>
//               <li onClick={handleNav}>Atria Institute</li>
//             </Link>
//             <Link href='/atriaacademy'>
//               <li onClick={handleNav} className='my-12'>Atria Academy of Science & Medicine</li>
//             </Link>
//             <Link href='/atriahealth'>
//               <li onClick={handleNav}>Atria Health Collaborative</li>
//             </Link>
//           </ul>
//           <ul className='max-w-[520px] md:max-w-[1250px] m-auto text-white mt-24'>
//             <Link href='/career'>
//               <li onClick={handleNav} className='mb-12'>Career Opportunities</li>
//             </Link>
//             <Link href='/request'>
//               <li onClick={handleNav}>Request Info</li>
//             </Link>
//           </ul>
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

// export default Navbar;



// "use client"


// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { HiOutlineMenuAlt1 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [navOpen, setNavOpen] = useState();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!navOpen) {
//         const currentScrollPos = window.pageYOffset;
//         setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
//         setPrevScrollPos(currentScrollPos);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos, navOpen]);


//   const handleNav = () => {
//     setNavOpen(prevNavOpen => !prevNavOpen);
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 1 }}
//       animate={{ opacity: showNavbar ? 1 : 0 }}
//       className={`fixed top-0 w-full shadow-xl z-50 bg-transparent transition-opacity duration-900 ${
//         showNavbar || !navOpen ? 'pointer-events-auto' : 'pointer-events-none'
//       }`}
//     >
//       <div className="flex justify-between items-center px-4 py-2 mx-auto max-w-7xl">
//         <Link href="/">
//           <h1 className="text-4xl font-semibold text-[#3c4e3d]">atria</h1>
//         </Link>
//         <ul className="hidden md:block text-[#3c4e3d] text-base list-disc list-inside">
//           <Link href="/atriainstitute">
//             <li onClick={handleNav}>Atria Institute</li>
//           </Link>
//           <Link href="/atriaacademy">
//             <li onClick={handleNav}>Atria Academy of Science & Medicine</li>
//           </Link>
//           <Link href="/atriahealth">
//             <li onClick={handleNav}>Atria Health Collaborative</li>
//           </Link>
//         </ul>
//         <div
//           onClick={handleNav}
//           className="md:hidden text-[#3c4e3d] cursor-pointer"
//         >
//           <HiOutlineMenuAlt1 size={24} />
//         </div>
//         <div className={navOpen ? 'fixed md:hidden left-0 top-0 right-0 bottom-0 w-[100%] h-full bg-[#3c4e3d] ease-in-out duration-700' : 'fixed md:hidden bottom-[-100%] h-full bg-[#3c4e3d] ease-in-out duration-700'}>
//           <div className="max-w-7xl m-auto mt-6 flex justify-between items-center px-4">
//             <Link href="/">
//               <h1 onClick={handleNav} className="text-4xl text-white font-semibold">atria</h1>
//             </Link>
//             <div onClick={handleNav} className="text-white cursor-pointer">
//               <AiOutlineClose size={24} />
//             </div>
//           </div>
//           <ul className="text-white text-5xl mt-8 max-w-7xl m-auto">
//             <Link href="/atriainstitute">
//               <li onClick={handleNav} className='cursor-pointer'>Atria Institute</li>
//             </Link>
//             <Link href="/atriaacademy">
//               <li onClick={handleNav} className="my-12 cursor-pointer">Atria Academy of Science & Medicine</li>
//             </Link>
//             <Link href="/atriahealth">
//               <li onClick={handleNav} className='cursor-pointer'>Atria Health Collaborative</li>
//             </Link>
//           </ul>
//           <ul className="max-w-7xl m-auto text-white mt-24">
//             <Link href="/career">
//               <li onClick={handleNav} className="mb-12 cursor-pointer">Career Opportunities</li>
//             </Link>
//             <Link href="/request">
//               <li onClick={handleNav} className='cursor-pointer'>Request Info</li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Navbar;






// "use client"

// import Link from "next/link";
// import { motion } from 'framer-motion';
// import { useEffect, useState} from "react";
// import {HiOutlineMenuAlt1} from 'react-icons/hi'
// import {AiOutlineClose} from 'react-icons/ai'


// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [nav, setNav] = useState()

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!nav) {
//         const currentScrollPos = window.pageYOffset;
//         setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
//         setPrevScrollPos(currentScrollPos);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos, nav]);

//   function handleNav(){
//     return setNav(prevNav => !prevNav)
//   }
  


//   return (
//     <motion.section initial={{ opacity: 1 }}
//     animate={{ opacity: showNavbar ? 1 : 0 }}
//     className={`fixed top-0 w-full py-5 shadow-xl z-50 bg-transparent transition-opacity duration-900 ${
//       showNavbar || !nav ? 'pointer-events-auto' : 'pointer-events-none'
//     }`}
//     >
//       <div className='flex justify-between items-center md:px-0 max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto bg-transparent'>
//         <Link href='/'>
//           <h1 className='text-4xl text-[#3c4e3d] font-semibold'>atria</h1>
//         </Link>
//         <ul className='text-[#3c4e3d] text-base list-disc list-inside hidden md:block'>
//         <Link href='/atriainstitute'>
//           <li>Atria Institute</li>
//         </Link>
//         <Link href='/atriaacademy'>
//           <li>Atria Academy of Science & Medicine</li>
//         </Link>
//         <Link href='/atriahealth'>
//           <li>Atria Health Collaborative</li>
//         </Link>
//         </ul>
//         <div onClick={handleNav} className='md:hidden text-[#3c4e3d] cursor-pointer'>
//           <HiOutlineMenuAlt1 size={24} />
//         </div>
//         <div className={nav ? 'fixed md:hidden left-0 top-0 right-0 bottom-0 w-[100%] h-full bg-[#3c4e3d] ease-in-out duration-700' : 'fixed md:hidden bottom-[-100%] h-full bg-[#3c4e3d] ease-in-out duration-700'}>
//           <div className='max-w-[520px] m-auto mt-6 flex justify-between items-center'>
//             <Link href='/'>
//               <h1 onClick={handleNav} className='text-4xl text-white font-semibold'>atria</h1>
//             </Link>
//             <div onClick={handleNav} className='text-white cursor-pointer'>
//               <AiOutlineClose size={24} />        
//             </div>
//           </div>
//           <ul className='text-white text-5xl mt-8 max-w-[520px] md:max-w-[1250px] m-auto'>
//           <Link href='/atriainstitute'>
//             <li onClick={handleNav}>Atria Institute</li>
//           </Link>
//           <Link href='/atriaacademy'>
//             <li onClick={handleNav} className='my-12'>Atria Academy of Science & Medicine</li>
//           </Link>
//           <Link href='/atriahealth'>
//             <li onClick={handleNav}>Atria Health Collaborative</li>
//           </Link>
//           </ul>
//           <ul className='max-w-[520px] md:max-w-[1250px] m-auto text-white mt-24'>
//           <Link href='/career'>
//             <li onClick={handleNav} className='mb-12'>Career Opportunities</li>
//           </Link>
//           <Link href='/request'>
//             <li onClick={handleNav}>Request Info</li>
//           </Link>
//           </ul>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// export default Navbar;