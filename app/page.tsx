// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid />
//         <RecentProjects/>
//       </div>
//     </main>
//   );
// }

//changed bg-black-100 to white-100
//Nimesh

//--------------------
//Proper one

// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";
// import { TeamPreview } from "@/components/TeamPreview";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid/> {/* Ensure Grid is directly below Hero for the scroll effect */}
//         <RecentProjects />
//         <TeamPreview />
//         <Clients /> 
//         <Experience />
//         <Approach />
//         <Footer />
//       </div>
//     </main>
//   );
// }


// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       {/* Fixed Text at the top left corner */}
//       <div className="fixed top-5 left-5 z-50">
//         <span className="text-xl font-bold">Dockyard</span> 
//         <span className="text-xl font-semibold">Software</span>
//       </div>

//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid />
//         <RecentProjects />
//             <Clients/>
//       </div>
//     </main>
//   );
// }


// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";
// import { TeamPreview } from "@/components/TeamPreview";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid /> {/* Ensure Grid is directly below Hero for the scroll effect */}
//         <RecentProjects /> {/* Add bg-white to every section */}
//         <TeamPreview />
//         <Clients/>
//         <Experience/>
//         <Approach/>
//         <Footer/>
//       </div>
//     </main>
//   );
// }





"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { TeamPreview } from "@/components/TeamPreview";

export default function Home() {
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
              className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-50"
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
        <Hero />
        <Grid />
        <RecentProjects />
        <TeamPreview />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

