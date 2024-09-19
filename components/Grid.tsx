import React from 'react'
import { BentoGrid } from './ui/bento-grid';
import { BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/data';


const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid



// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { BentoGrid, BentoGridItem } from './ui/bento-grid';
// import { gridItems } from '@/data';

// const Grid = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // Adjusting offset for correct animation timing
//   });

//   // Define animation transforms
//   const y = useTransform(scrollYProgress, [0, 1], ["170vh", "0vh"]); // Slides Grid up from outside the viewport
//   const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]); // Fade-in effect, finishes early

//   return (
//     <motion.section
//       id='about'
//       ref={ref}
//       style={{ y, opacity }}
//       className="relative py-20 z-120 lg:w-full" // Adjust z-index to ensure Grid covers Hero
//     >
//       <BentoGrid className="w-fullmax-w-none">
//         {gridItems.map((item, i) => (
//           <BentoGridItem
//             id={item.id}
//             key={i}
//             title={item.title}
//             description={item.description}
//             className={item.className}
//             img={item.img}
//             imgClassName={item.imgClassName}
//             titleClassName={item.titleClassName}
//             spareImg={item.spareImg}
//           />
//         ))}
//       </BentoGrid>
//     </motion.section>
//   );
// }

// export default Grid;


