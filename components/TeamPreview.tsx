
"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip"; // Update the path as necessary
import { people } from "@/data"; // Adjust the import path based on your file structure
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi"; // Importing an attractive icon

export function TeamPreview() {
  return (
    <section id="team" className="py-20">
      <h1 className="heading">
        Meet our <span className="text-purple">amazing team</span>
      </h1>

      <div className="flex flex-row items-center justify-center mb-4 w-full mt-12 md:mt-20">
        <AnimatedTooltip items={people} />

        {/* Adding a link with an icon */}
        <Link href="/team" className="flex items-center ml-4 text-purple-600 hover:text-purple-800">
          <FiArrowRightCircle size={24} />
          <span className="ml-2">See More</span>
        </Link>
      </div>
    </section>
  );
}

