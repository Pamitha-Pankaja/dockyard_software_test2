// import { cn } from "@/lib/utils";

// export default function RetroGrid({
//   className,
//   angle = 65,
//   speed = "15s", // Default speed
//   gridColor = "rgba(0, 0, 0, 0.3)", // Default light color
//   darkGridColor = "rgba(255, 255, 255, 0.2)", // Default dark color
// }: {
//   className?: string;
//   angle?: number;
//   speed?: string;
//   gridColor?: string;
//   darkGridColor?: string;
// }) {
//   return (
//     <div
//       className={cn(
//         "pointer-events-none absolute inset-0 overflow-hidden opacity-50 [perspective:200px]",
//         className
//       )}
//       style={{
//         "--grid-angle": `${angle}deg`,
//         "--grid-speed": speed,
//       } as React.CSSProperties}
//     >
//       {/* Grid */}
//       <div
//         className="absolute inset-0 [transform:rotateX(var(--grid-angle))]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, ${gridColor} 1px, transparent 0),
//             linear-gradient(to bottom, ${gridColor} 1px, transparent 0)`,
//         }}
//       >
//         <div
//           className={cn(
//             "animate-grid",
//             "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
//             // Dark mode styles
//             `dark:[background-image:linear-gradient(to right, ${darkGridColor} 1px, transparent 0), linear-gradient(to bottom, ${darkGridColor} 1px, transparent 0)]`
//           )}
//         />
//       </div>

//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
//     </div>
//   );
// }

// /components/ui/retro-grid.tsx

import { cn } from "@/lib/utils";

export default function RetroGrid({
  className,
  angle = 65,
  speed = "15s", // Default speed for animation
  gridColor = "rgba(0, 0, 0, 0.3)", // Default color for grid lines in light mode
  darkGridColor = "rgba(255, 255, 255, 0.2)", // Default color for grid lines in dark mode
}: {
  className?: string;
  angle?: number;
  speed?: string;
  gridColor?: string;
  darkGridColor?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
      style={{
        "--grid-angle": `${angle}deg`,
        "--grid-speed": speed,
      } as React.CSSProperties}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 [transform:rotateX(var(--grid-angle))]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px", // Ensure the grid cells are of appropriate size
        }}
      >
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            // Dark mode styles
            `dark:[background-image:linear-gradient(to right, ${darkGridColor} 1px, transparent 1px), linear-gradient(to bottom, ${darkGridColor} 1px, transparent 1px)]`
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}




