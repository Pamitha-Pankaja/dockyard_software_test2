// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(false);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         setVisible(false);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
//           className
//         )}
//       >
//         {navItems.map((navItem: any, idx: number) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className="hidden sm:block text-sm">{navItem.name}</span>
//           </Link>
//         ))}
//         <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
//           <span>Login</span>
//           <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
//         </button>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

//Proper one

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);
//   const heroRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const heroSection = heroRef.current;
//     if (!heroSection) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       },
//       {
//         threshold: 1.0,
//       }
//     );

//     observer.observe(heroSection);

//     return () => {
//       if (heroSection) observer.unobserve(heroSection);
//     };
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       let direction = current - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       {visible && (
//         <motion.div
//           initial={{
//             opacity: 1,
//             y: -100,
//           }}
//           animate={{
//             y: visible ? 0 : -100,
//             opacity: visible ? 1 : 0,
//           }}
//           transition={{
//             duration: 0.2,
//           }}
//           className={cn(
//             "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[9999] pr-2 pl-8 py-2 items-center justify-center space-x-4",
//             className
//           )}
//           style={{ zIndex: 9999, position: 'fixed' }} // Ensure zIndex is set high
//         >
//           {navItems.map((navItem: any, idx: number) => (
//             <Link
//               key={`link=${idx}`}
//               href={navItem.link}
//               className={cn(
//                 "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//               )}
//             >
//               <span className="block sm:hidden">{navItem.icon}</span>
//               <span className="hidden sm:block text-sm">{navItem.name}</span>
//             </Link>
//           ))}
//           <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
//             <span>Login</span>
//             <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
//           </button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };


// Add this ref to your Hero section in its parent component to connect with Intersection Observer
// <Hero ref={heroRef} />

//------------
//With logo

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);
//   const heroRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const heroSection = heroRef.current;
//     if (!heroSection) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 1.0,
//       }
//     );

//     observer.observe(heroSection);

//     return () => {
//       if (heroSection) observer.unobserve(heroSection);
//     };
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       let direction = current - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         setVisible(true);
//       } else {
//         setVisible(direction < 0);
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       {visible && (
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -50,
//           }}
//           animate={{
//             y: 0,
//             opacity: 1,
//           }}
//           exit={{
//             opacity: 0,
//             y: -50,
//           }}
//           transition={{
//             duration: 0.5,
//             ease: "easeOut",
//           }}
//           className={cn(
//             "flex items-center justify-between fixed top-4 left-0 right-0 z-[9999] px-4", // High z-index
//             className
//           )}
//         >
//           {/* Logo on the left */}
//           <div className="flex items-center space-x-2 ml-4">
//             <span className="text-2xl font-bold text-black dark:text-white">
//               Dockyard
//             </span>
//             <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">
//               Software
//             </span>
//           </div>

//           {/* Centered Navigation Bar with rounded border and styling */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -50,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//               y: -50,
//             }}
//             transition={{
//               duration: 0.5,
//               ease: "easeOut",
//             }}
//             className={cn(
//               "flex items-center justify-center max-w-fit mx-auto mt-4 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 space-x-4",
//               className
//             )}
//           >
//             {/* Navigation Items */}
//             {navItems.map((navItem: any, idx: number) => (
//               <Link
//                 key={`link=${idx}`}
//                 href={navItem.link}
//                 className={cn(
//                   "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//                 )}
//               >
//                 <span className="block sm:hidden">{navItem.icon}</span>
//                 <span className="hidden sm:block text-sm">{navItem.name}</span>
//               </Link>
//             ))}

//             {/* Login Button */}
//             <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
//               <span>Login</span>
//               <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };







"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Show nav on load
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // Show when hero section is in view
        } else {
          setVisible(false); // Hide when hero section is out of view
        }
      },
      {
        threshold: 1.0, // Trigger when the full hero section is in view
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
        setVisible(true); // Show when near the top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

