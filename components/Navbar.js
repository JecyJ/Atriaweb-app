'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const [isAtriaPage, setIsAtriaPage] = useState(false);

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

  useEffect(() => {
    setIsAtriaPage(
      router.pathname !== "/" &&
        (router.pathname === "/atriainstitute" ||
          router.pathname === "/atriaacademy" ||
          router.pathname === "/atriahealth")
    );
  }, [router.pathname]);

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
          <h1
            className={`text-4xl font-semibold ${
              isAtriaPage ? "text-white" : "text-[#3c4e3d]"
            }`}
            onClick={() => {
              setIsAtriaPage(false);
            }}
          >
            atria
          </h1>
        </Link>
        <ul
          className={`${
            isAtriaPage ? "text-white" : "text-[#3c4e3d]"
          } text-base list-disc list-inside hidden md:block`}
        >
          <Link href="/atriainstitute">
            <li
              onClick={() => {
                setIsAtriaPage(true);
                handleNav();
              }}
            >
              Atria Institute
            </li>
          </Link>
          <Link href="/atriaacademy">
            <li
              onClick={() => {
                setIsAtriaPage(true);
                handleNav();
              }}
            >
              Atria Academy of Science & Medicine
            </li>
          </Link>
          <Link href="/atriahealth">
            <li
              onClick={() => {
                setIsAtriaPage(true);
                handleNav();
              }}
            >
              Atria Health Collaborative
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className={`md:hidden cursor-pointer ${isAtriaPage ? "text-white" : "text-[#3c4e3d]"}`}>
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
                    onClick={() => {
                      setIsAtriaPage(true);
                      handleNav();
                    }}
                    className={`text-4xl font-semibold ${
                      isAtriaPage ? "text-[#3c4e3d]" : "text-white"
                    }`}
                  >
                    atria
                  </h1>
                </Link>
                <div onClick={handleNav} className="text-white cursor-pointer">
                  <AiOutlineClose size={24} />
                </div>
              </div>
              <ul className="text-white text-5xl mt-8 max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto">
                <Link href="/atriainstitute">
                  <li
                    onClick={() => {
                      setIsAtriaPage(true);
                      handleNav();
                    }}
                  >
                    Atria Institute
                  </li>
                </Link>
                <Link href="/atriaacademy">
                  <li
                    onClick={() => {
                      setIsAtriaPage(true);
                      handleNav();
                    }}
                    className="my-12"
                  >
                    Atria Academy of Science & Medicine
                  </li>
                </Link>
                <Link href="/atriahealth">
                  <li
                    onClick={() => {
                      setIsAtriaPage(true);
                      handleNav();
                    }}
                  >
                    Atria Health Collaborative
                  </li>
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