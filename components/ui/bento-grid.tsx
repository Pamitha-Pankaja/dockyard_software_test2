"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useState, useRef } from "react";
import animationData from "@/data/confetti.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NextJS", "GraphQL"];

  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Video reference

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "coldock@cdl.lk";
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Set a timeout to reset the copied state after 10 seconds
    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 10000); // 10 seconds

    // Clear the timeout if the component unmounts or handleCopy is called again
    return () => clearTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video on hover
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when not hovered
      videoRef.current.currentTime = 0; // Reset the video to the beginning
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border text-blue-400 border-black-100/[0.3]",
        className
      )}
      style={{
        background: "rgba(216,191,216,0.3)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {id === 1 ? ( // Render video for the first grid item
            <video
              ref={videoRef}
              src="/tech.mp4" // Replace with your video source
              loop
              muted
              playsInline
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105" // Adding scale effect
              )}
            />
          ) : (
            img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center text-white bg-blue-950"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-blue-950"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-blue-950"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center text-white bg-blue-950"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
              <Lottie
                  options={defaultOptions}
                  height={200}
                  width={400}
                  key={copied ? "copied-true" : "copied-false"} // Change key based on copied state
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="bg-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
