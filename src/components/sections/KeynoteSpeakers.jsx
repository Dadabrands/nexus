import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { speakers } from "../../constants";

function KeynoteSpeakers() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-x-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            KEYNOTE
            <br />
            SPEAKERS
          </motion.h2>

          <motion.p
            className="mt-4 md:mt-0 text-lg md:text-xl max-w-xs"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Meet the industry leaders shaping the future of AI.
          </motion.p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {speakers.map((speaker, index) => {
            const isSecondRow = index >= 2; // Speakers 3 and 4 are in the second row
            return (
              <>
                {/* Text Card */}
                <motion.div
                  key={`${speaker.id}-text`}
                  className={`bg-gray-200 text-black rounded-3xl p-6 flex flex-col justify-between h-90 order-0 sm:order-0 ${
                    isSecondRow ? "lg:order-1" : "lg:order-0"
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index * 2}
                >
                  <h3 className="text-2xl font-bold">{speaker.name}</h3>
                  <p className="text-gray-700">{speaker.title}</p>
                </motion.div>

                {/* Image Card */}
                <motion.div
                  key={`${speaker.id}-image`}
                  className={`bg-gray-500 rounded-3xl overflow-hidden h-90 order-1 sm:order-1 ${
                    isSecondRow ? "lg:order-0" : "lg:order-1"
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index * 2 + 1}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>
              </>
            );
          })}
        </div>

        {/* "And more" Button */}
        <div className="mt-12 flex">
          <motion.div
            href="/speakers"
            className="inline-flex items-center border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition-colors"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
          >
            And more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default KeynoteSpeakers;
// import React from 'react'

// const KeynoteSpeakers = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default KeynoteSpeakers
