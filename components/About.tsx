"use client";

import RetroGrid from "@/components/ui/retro-grid";

export default function About() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-background text-black-100 h-screen">
      {/* Retro Grid Background */}
      <RetroGrid
        speed="10s"
        gridColor="rgba(255,0,255,1)"
        darkGridColor="rgba(255, 0, 0, 0.2)"
      />

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-7xl px-1 py-20 md:py-16 lg:py-5">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-2">
          {/* Section Header */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            [Who Are We?]
          </h1>

          {/* Main Heading
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            We want to make your <br className="hidden md:block" /> business easier
          </h1> */}

          {/* Description Paragraph */}
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-8 text-black-100">
          Dockyard Total Solutions (Pvt) Ltd (DTS) is a fully owned subsidiary of Colombo 
          Dockyard PLC, leveraging over 35% government ownership and extensive ICT systems 
          engineering expertise.<br/><br/> Registered under the Companies Act of 2007, DTS offers 
          comprehensive ICT solutions through its Integrated ICT Solution Center, serving 
          diverse external entities. With a team of over 25 highly qualified software and 
          hardware engineers, DTS provides round-the-clock service, combining deep industry 
          knowledge with a commitment to excellence.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 pl-6">
          <div className="grid gap-10">
            {/* Vision */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">Vision</h3>
              <p className="text-lg leading-relaxed text-black-100">
                Un-detachable partner in total solutuins.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">Values</h3>
              <p className="text-lg leading-relaxed">
                We add value to the industry as the business partner through diversified business solutions derived from state of the art technology blended with our well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// 
// “The main business is developing software for general purposes and for specific purposes to various clients. The company has a research and development center with in place training services and also offer technical support in line with the business.”

