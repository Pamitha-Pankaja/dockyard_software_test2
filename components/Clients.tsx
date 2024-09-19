"use client";

import React from "react";
import Image from "next/image"; // Import Image from Next.js
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex items-center gap-4">
              <Image
                src={company.img}
                alt={company.name}
                width={40} // Adjust width for md screen size
                height={40} // Adjust height for md screen size
                className="md:w-10 w-5"
              />
              <span className="text-black-100 md:text-lg text-sm font-semibold">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
