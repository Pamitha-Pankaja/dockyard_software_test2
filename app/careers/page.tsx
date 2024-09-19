// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import Footer from "@/components/Footer";
// import { navItems } from "@/data";
// import { motion } from "framer-motion";
// import { Careers } from "@/components/Careers";

// export default function CareersPage() {
//   const [navVisible, setNavVisible] = useState(true);
//   const heroRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const heroSection = heroRef.current;
//     if (!heroSection) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setNavVisible(entry.isIntersecting);
//       },
//       { threshold: 1.0 }
//     );

//     observer.observe(heroSection);

//     return () => {
//       if (heroSection) observer.unobserve(heroSection);
//     };
//   }, []);

//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       {/* Floating Navigation Bar */}
//       <FloatingNav navItems={navItems} className="z-50" />

//       {/* Tech Software Logo */}
//       <motion.header
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.3 }}
//         className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-50 px-4"
//       >
//         <div className="text-xl font-bold pl-4">
//           <span className="text-2xl text-black-100">Dockyard</span>
//           <span className="text-purple">Software</span>
//         </div>
//       </motion.header>

//       {/* About Section */}
//       <section className="relative z-10 w-full flex-grow mb-36">
//         <Careers/>


//         <div className="flex flex-col md:flex-row justify-between items-center py-2 px-6 bg-white">
//             {/* <!-- Left Content Container --> */}
//             <div className="w-full md:w-7/12 p-6 bg-white text-black-100 border border-transparent rounded-lg shadow-lg relative overflow-hidden">
//                 <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-shine"></div>
//                 <h1 className="text-5xl font-bold mb-6">Careers — Join us!</h1>
//                 <p className="mb-4">
//                 Vivanti prioritises diversity, equality, and inclusion (DEI) and actively promotes these values as specialists in healthcare marketing. We recognise and appreciate the diverse backgrounds, perspectives, experiences, and identities of our employees, clients, and stakeholders.
//                 </p>
//                 <p className="mb-4">
//                 As a healthcare marketing agency our internal policies aim to foster an inclusive work culture where everyone feels respected, valued, and empowered to contribute. Research shows that diverse teams are more innovative, creative, and better equipped to solve complex problems, and our international team exemplifies this.
//                 </p>
//                 <p className="font-semibold">
//                 Join our friendly team, where collaboration and positivity thrive.
//                 </p>
//             </div>

//             {/* <!-- Right Content Container --> */}
//             <div className="w-full md:w-4/12 p-6 mt-8 md:mt-0 bg-white text-black-100 border border-transparent rounded-lg shadow-lg relative overflow-hidden">
//                 <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-shine"></div>
//                 <h2 className="text-3xl font-semibold mb-6">Interested in joining our team?</h2>
//                 <a href="#" className="inline-block text-center bg-purple-500 text-purple font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
//                 Send us your CV
//                 </a>
//                 <p className="text-sm mt-4">Upload your CV — up to 32 MB</p>
//             </div>
//         </div>


//       </section>

//       {/* Footer */}
//       <Footer className="relative z-10 w-full mt-20" />
//     </main>
//   );
// }





"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { Careers } from "@/components/Careers";

export default function CareersPage() {
  const { scrollYProgress } = useScroll();
  const [logoVisible, setLogoVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogoVisible(true);
        } else {
          setLogoVisible(false);
        }
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setLogoVisible(true);
      } else {
        if (direction < 0) {
          setLogoVisible(true);
        } else {
          setLogoVisible(false);
        }
      }
    }
  });

  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Floating Navigation Bar */}
        <FloatingNav navItems={navItems} className="z-50" />

        <AnimatePresence mode="wait">
          {logoVisible && (
            <motion.header
              initial={{ opacity: 1, y: -100 }}
              animate={{ y: logoVisible ? 0 : -100, opacity: logoVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-40 px-4"
            >
              {/* Logo with animation matching the navbar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold pl-4"
              >
                <span className="text-2xl text-black-100">Dockyard</span>
                <span className="text-purple">Software</span>
              </motion.div>
            </motion.header>
          )}
        </AnimatePresence>

        {/* About Section */}
        <section className="relative z-10 w-full flex-grow mb-36" ref={heroRef}>
          <Careers />

          <div className="flex flex-col md:flex-row justify-between items-center py-2 px-6 bg-white">
            {/* Left Content Container */}
            <div className="w-full md:w-7/12 p-6 bg-white text-black-100 border border-transparent rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-shine"></div>
              <h1 className="text-5xl font-bold mb-6">Careers — Join us!</h1>
              <p className="mb-4">
                Vivanti prioritises diversity, equality, and inclusion (DEI) and actively promotes these values as specialists in healthcare marketing. We recognise and appreciate the diverse backgrounds, perspectives, experiences, and identities of our employees, clients, and stakeholders.
              </p>
              <p className="mb-4">
                As a healthcare marketing agency our internal policies aim to foster an inclusive work culture where everyone feels respected, valued, and empowered to contribute. Research shows that diverse teams are more innovative, creative, and better equipped to solve complex problems, and our international team exemplifies this.
              </p>
              <p className="font-semibold">
                Join our friendly team, where collaboration and positivity thrive.
              </p>
            </div>

            {/* Right Content Container */}
            <div className="w-full md:w-4/12 p-6 mt-8 md:mt-0 bg-white text-black-100 border border-transparent rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-shine"></div>
              <h2 className="text-3xl font-semibold mb-6">Interested in joining our team?</h2>
              <a
                href="#"
                className="inline-block text-center bg-purple-500 text-purple font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
              >
                Send us your CV
              </a>
              <p className="text-sm mt-4">Upload your CV — up to 32 MB</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer className="relative z-10 w-full mt-20" />
      </div>
    </main>
  );
}

