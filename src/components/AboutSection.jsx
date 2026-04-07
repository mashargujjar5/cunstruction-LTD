import React, { useRef, useState, useEffect } from "react";
import { useInView, animate } from "framer-motion";

const AnimatedNumber = ({ value, prefix = "", suffix = "", decimals = 0, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate(v) {
          setDisplay(v);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-[#9A9A9A] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Centered Content */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Dreams, One<br />Project At A Time.
          </h2>
          <p className="text-white text-base md:text-lg max-w-4xl mx-auto font-medium leading-relaxed">
            At J R Foster Construction, We Don't Just Build Structures—We Build Trust, Reliability, And Lasting
            Relationships. With Years Of Expertise In Residential, Commercial, And Infrastructure Projects, We Are
            Committed To Delivering Excellence In Every Brick We Lay.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-[#FFD700] text-xl font-bold mb-3">
              Who We Are?
            </h3>
            <h2 className="text-[#2A2A2A] text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              What We Focus On Mutual<br />Success, Everyone Wins
            </h2>
            
            <div className="space-y-6 text-[#4A4A4A] text-sm md:text-base font-medium">
              <p>
                J R Foster Construction Is A Leading Construction Company With 10+ Years Of Experience In Residential,
                Commercial, And Industrial Projects.
              </p>
              <p>
                Based In Manchester, England, Mark & Steve Construction Ltd Is A Trusted Name In The Construction
                Industry, Known For Delivering High-Quality Projects With Precision, Integrity, And Innovation.
              </p>
              <p>
                We Specialize In A Broad Range Of Construction Services, From Residential And Commercial Builds To Large-
                Scale Renovations And Infrastructure Projects. Our Team Of Skilled Professionals Is Dedicated To
                Transforming Visions Into Reality, Focusing On Meticulous Planning, Sustainable Practices, And Superior
                Craftsmanship.
              </p>
              <p>
                With Years Of Experience And A Commitment To Client Satisfaction, Mark & Steve Construction Ltd
                Continues To Build Structures That Stand The Test Of Time And Create Lasting Value For Our Clients And
                Communities.
              </p>
            </div>

            <button className="mt-8 border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-semibold py-2 px-8 rounded-md transition-colors duration-300">
              About Us
            </button>
          </div>

          {/* Right Column - Stats */}
          <div className="flex flex-col justify-center space-y-12">
            {/* Stat 1 */}
            <div>
              <div className="text-[#FFD700] text-5xl md:text-6xl font-bold mb-2">
                <AnimatedNumber value={10} suffix="+" />
              </div>
              <p className="text-[#333333] text-xl md:text-2xl font-semibold">
                Years in Operation
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-[#FFD700] text-5xl md:text-6xl font-bold mb-2">
                <AnimatedNumber value={2.3} prefix="$" suffix="B+" decimals={1} />
              </div>
              <p className="text-[#333333] text-xl md:text-2xl font-semibold">
                Annual Construction Volume
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="text-[#FFD700] text-5xl md:text-6xl font-bold mb-2">
                <AnimatedNumber value={10} prefix="#" />
              </div>
              <p className="text-[#333333] text-xl md:text-2xl font-semibold">
                Rank in ENR's list of Top 1000<br />contractors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
