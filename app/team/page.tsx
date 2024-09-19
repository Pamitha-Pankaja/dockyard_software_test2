// "use client";

// import React from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import Footer from "@/components/Footer";
// import { navItems } from "@/data";
// import { motion } from "framer-motion";
// import { ExpandableCard } from "@/components/ExpandableCard";
// import { TracingBeam } from "@/components/ui/tracing-beam";

// export default function TeamPage() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       {/* Floating Navigation Bar */}
//       <FloatingNav navItems={navItems} className="z-50" />

//       {/* Header with Company Logo */}
//       <motion.header
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.3 }}
//         className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-50 px-4"
//       >
//         <div className="text-xl font-bold">
//           <span className="text-2xl text-black-100">Dockyard</span>
//           <span className="text-purple">Software</span>
//         </div>
//       </motion.header>

//       <TracingBeam px-8>
//         {/* Team Details Section */}
//         <section className="flex flex-col items-center justify-center w-full min-h-screen gap-12 mt-20 py-16">
          
//           {/* Team Details Heading */}
//           <h1 className="text-4xl font-bold mb-8">
//             Meet our <span className="text-purple">amazing team</span>
//           </h1>

//           {/* First Row: Head of ICT and Head of Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-xl">
//             <ExpandableCard idsToShow={[2]} /> {/* Head of ICT */}
//             <ExpandableCard idsToShow={[3]} /> {/* Head of Section */}
//           </div>

//           {/* Second Row: Senior Software Engineers */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl">
//             <ExpandableCard idsToShow={[4]} />
//             <ExpandableCard idsToShow={[5]} />
//             <ExpandableCard idsToShow={[6]} />
//             <ExpandableCard idsToShow={[7]} />
//           </div>

//           {/* Third Row: Systems Administrators */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl">
//             <ExpandableCard idsToShow={[8]} />
//             <ExpandableCard idsToShow={[9]} />
//             <ExpandableCard idsToShow={[10]} />
//             <ExpandableCard idsToShow={[11]} />
//           </div>
//         </section>
//       </TracingBeam>

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
import { ExpandableCard } from "@/components/ExpandableCard";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TeamPage() {
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
        <AnimatePresence mode="wait">
          {logoVisible && (
            <motion.header
              initial={{ opacity: 1, y: -100 }}
              animate={{ y: logoVisible ? 0 : -100, opacity: logoVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-50 px-4"
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
              <FloatingNav navItems={navItems} />
            </motion.header>
          )}
        </AnimatePresence>

        <TracingBeam px-8>
          {/* Team Details Section */}
          <section className="flex flex-col items-center justify-center w-full min-h-screen gap-12 mt-20 py-16">
            {/* Team Details Heading */}
            <h1 className="text-4xl font-bold mb-8">
              Meet our <span className="text-purple">amazing team</span>
            </h1>

            {/* First Row: Head of ICT and Head of Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-xl">
              <ExpandableCard idsToShow={[2]} /> {/* Head of ICT */}
              <ExpandableCard idsToShow={[3]} /> {/* Head of Section */}
            </div>

            {/* Second Row: Senior Software Engineers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl">
              <ExpandableCard idsToShow={[4]} />
              <ExpandableCard idsToShow={[5]} />
              <ExpandableCard idsToShow={[6]} />
              <ExpandableCard idsToShow={[7]} />
            </div>

            {/* Third Row: Systems Administrators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl">
              <ExpandableCard idsToShow={[8]} />
              <ExpandableCard idsToShow={[9]} />
              <ExpandableCard idsToShow={[10]} />
              <ExpandableCard idsToShow={[11]} />
            </div>
          </section>
        </TracingBeam>

        {/* Footer */}
        <Footer className="relative z-10 w-full mt-20" />
      </div>
    </main>
  );
}
