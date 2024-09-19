// "use client";
// import Image from "next/image";
// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "@/hooks/use-outside-click";
// import { teamDetails } from "@/data/index"; // Importing teamDetails from your data folder

// export function ExpandableCard() {
//   const [active, setActive] = useState<(typeof teamDetails)[number] | boolean | null>(null);
//   const id = useId();
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//     <>
//       <AnimatePresence>
//         {active && typeof active === "object" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/20 h-full w-full z-10"
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {active && typeof active === "object" ? (
//           <div className="fixed inset-0 grid place-items-center z-[100]">
//             <motion.button
//               key={`button-${active.name}-${id}`}
//               layout
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 transition: {
//                   duration: 0.05,
//                 },
//               }}
//               className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//               onClick={() => setActive(null)}
//             >
//               <CloseIcon />
//             </motion.button>
//             <motion.div
//               layoutId={`card-${active.name}-${id}`}
//               ref={ref}
//               className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
//             >
//               <motion.div layoutId={`image-${active.name}-${id}`}>
//                 <Image
//                   priority
//                   width={200}
//                   height={200}
//                   src={active.image || "/default-image.jpg"} // Ensure consistent image URLs
//                   alt={active.name}
//                   className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
//                 />
//               </motion.div>

//               <div>
//                 <div className="flex justify-between items-start p-4">
//                   <div className="">
//                     <motion.h3
//                       layoutId={`title-${active.name}-${id}`}
//                       className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
//                     >
//                       {active.name}
//                     </motion.h3>
//                     <motion.p
//                       layoutId={`designation-${active.designation}-${id}`}
//                       className="text-neutral-600 dark:text-neutral-400 text-base"
//                     >
//                       {active.designation}
//                     </motion.p>
//                   </div>

//                   {/* <motion.a
//                     layout
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     // href={active.ctaLink || "#"}
//                     target="_blank"
//                     className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
//                   >
//                     {/* {active.ctaText || 'Learn More'} 
//                   </motion.a> */}
//                 </div>
//                 <div className="pt-4 relative px-4">
//                   <motion.div
//                     layout
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
//                   >
//                     {typeof active.des === "string" ? active.des : ""}
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ) : null}
//       </AnimatePresence>
//       <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
//         {teamDetails.map((teamMember) => (
//           <motion.div
//             layoutId={`card-${teamMember.name}-${id}`}
//             key={teamMember.id}
//             onClick={() => setActive(teamMember)}
//             className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
//           >
//             <div className="flex gap-4 flex-col w-full">
//               <motion.div layoutId={`image-${teamMember.name}-${id}`}>
//                 <Image
//                   width={100}
//                   height={100}
//                   src={teamMember.image || "/default-image.jpg"} // Ensure consistent image URLs
//                   alt={teamMember.name}
//                   className="h-60 w-full rounded-lg object-cover object-top"
//                 />
//               </motion.div>
//               <div className="flex justify-center items-center flex-col">
//                 <motion.h3
//                   layoutId={`title-${teamMember.name}-${id}`}
//                   className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
//                 >
//                   {teamMember.name}
//                 </motion.h3>
//                 <motion.p
//                   layoutId={`designation-${teamMember.designation}-${id}`}
//                   className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
//                 >
//                   {teamMember.designation}
//                 </motion.p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </ul>
//     </>
//   );
// }

// export const CloseIcon = () => {
//   return (
//     <motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//         transition: {
//           duration: 0.05,
//         },
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-black"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>
//   );
// };


//2024/10/19
// "use client";
// import Image from "next/image";
// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "@/hooks/use-outside-click";
// import { teamDetails } from "@/data/index"; // Importing teamDetails from your data folder

// interface ExpandableCardProps {
//   idsToShow?: number[]; // Optional prop to filter members by IDs
// }

// export function ExpandableCard({ idsToShow }: ExpandableCardProps) {
//   // Filter team members by IDs if idsToShow is provided
//   const members = idsToShow
//     ? teamDetails.filter((member) => idsToShow.includes(member.id))
//     : teamDetails;

//   const [active, setActive] = useState<(typeof teamDetails)[number] | boolean | null>(null);
//   const id = useId();
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//     <>
//       <AnimatePresence>
//         {active && typeof active === "object" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/20 h-full w-full z-10"
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {active && typeof active === "object" ? (
//           <div className="fixed inset-0 grid place-items-center z-[100]">
//             <motion.button
//               key={`button-${active.name}-${id}`}
//               layout
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{
//                 opacity: 0,
//                 transition: { duration: 0.05 },
//               }}
//               className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//               onClick={() => setActive(null)}
//             >
//               <CloseIcon />
//             </motion.button>
//             <motion.div
//               layoutId={`card-${active.name}-${id}`}
//               ref={ref}
//               className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
//             >
//               <motion.div layoutId={`image-${active.name}-${id}`}>
//                 <Image
//                   priority
//                   width={200}
//                   height={200}
//                   src={active.image || "/default-image.jpg"}
//                   alt={active.name}
//                   className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
//                 />
//               </motion.div>

//               <div>
//                 <div className="flex justify-between items-start p-4">
//                   <div className="">
//                     <motion.h3
//                       layoutId={`title-${active.name}-${id}`}
//                       className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
//                     >
//                       {active.name}
//                     </motion.h3>
//                     <motion.p
//                       layoutId={`designation-${active.designation}-${id}`}
//                       className="text-neutral-600 dark:text-neutral-400 text-base"
//                     >
//                       {active.designation}
//                     </motion.p>
//                   </div>
//                 </div>
//                 <div className="pt-4 relative px-4">
//                   <motion.div
//                     layout
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
//                   >
//                     {typeof active.des === "string" ? active.des : ""}
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ) : null}
//       </AnimatePresence>
//       <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
//         {members.map((member) => (
//           <motion.div
//             layoutId={`card-${member.name}-${id}`}
//             key={member.id}
//             onClick={() => setActive(member)}
//             className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
//           >
//             <div className="flex gap-4 flex-col w-full">
//               <motion.div layoutId={`image-${member.name}-${id}`}>
//                 <Image
//                   width={100}
//                   height={100}
//                   src={member.image || "/default-image.jpg"}
//                   alt={member.name}
//                   className="h-60 w-full rounded-lg object-cover object-top"
//                 />
//               </motion.div>
//               <div className="flex justify-center items-center flex-col">
//                 <motion.h3
//                   layoutId={`title-${member.name}-${id}`}
//                   className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
//                 >
//                   {member.name}
//                 </motion.h3>
//                 <motion.p
//                   layoutId={`designation-${member.designation}-${id}`}
//                   className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
//                 >
//                   {member.designation}
//                 </motion.p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </ul>
//     </>
//   );
// }

// export const CloseIcon = () => {
//   return (
//     <motion.svg
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.05 } }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-black"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>
//   );
// };


"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { teamDetails } from "@/data/index"; // Importing teamDetails from your data folder

interface ExpandableCardProps {
  idsToShow?: number[]; // Optional prop to filter members by IDs
}

export function ExpandableCard({ idsToShow }: ExpandableCardProps) {
  // Filter team members by IDs if idsToShow is provided
  const members = idsToShow
    ? teamDetails.filter((member) => idsToShow.includes(member.id))
    : teamDetails;

  const [active, setActive] = useState<(typeof teamDetails)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}-${id}`} className="aspect-w-4 aspect-h-3">
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.image || "/default-image.jpg"}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`designation-${active.designation}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.designation}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.des === "string" ? active.des : ""}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2 w-full max-w-6xl">
        {members.map((member) => (
          <motion.div
            layoutId={`card-${member.name}-${id}`}
            key={member.id}
            onClick={() => setActive(member)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${member.name}-${id}`} className="aspect-w-4 aspect-h-3">
                <Image
                  width={500}
                  height={500}
                  src={member.image || "/default-image.jpg"}
                  alt={member.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${member.name}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  layoutId={`designation-${member.designation}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {member.designation}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
