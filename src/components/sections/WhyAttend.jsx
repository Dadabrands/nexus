// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { whyAttend } from "../../constants";

// const WhyAttend = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.2 });

//   // Animation variants
//   const titleVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const subtitleVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: 0.3 + i * 0.15,
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     }),
//   };

//   const numberVariants = {
//     hidden: { opacity: 0, scale: 0.5 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         delay: 0.5 + i * 0.15,
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       },
//     }),
//   };

//   return (
//     <div className="bg-black text-white py-16 md:py-24 relative overflow-x-hidden" ref={containerRef}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
//           <motion.h2
//             className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider"
//             variants={titleVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             WHY ATTEND?
//           </motion.h2>

//           <motion.p
//             className="mt-4 md:mt-0 text-lg md:text-xl max-w-md"
//             variants={subtitleVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders.
//           </motion.p>
//         </div>

//         {/* Reasons grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {whyAttend.map((reason, index) => {
//             const isRightAligned = index >= 2;
//             const isParagraphLeft = index >= 2;
//             // Cards 3 and 4 (index 2 and 3) are right-aligned
//             return (
//               <motion.div
//                 key={index}
//                 className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 relative overflow-hidden h-64"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={index}
//                 whileHover={{
//                   y: -5,
//                   boxShadow: "0 10px 30px rgba(0, 85, 255, 0.1)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Title */}
//                 <h3
//                   className={`text-lg md:text-3xl font-bold uppercase mb-6 ${
//                     isRightAligned ? "text-right" : "text-left"
//                   }`}
//                 >
//                   {reason.title}
//                 </h3>

//                 {/* Number and Description */}
//                 <div
//                   className={`flex flex-col-reverse md:flex-row md:items-end justify-between ${
//                     isRightAligned ? "md:flex-row-reverse" : ""
//                   }`}
//                 >
//                   {/* Number */}
//                   <motion.div
//                     className={`absolute bottom-[-15%] ${
//                       isRightAligned ? "right-3 text-right" : "left-3 text-left"
//                     } text-9xl md:text-9xl font-bold z-[-1]`}
//                     style={{
//                       background: "linear-gradient(90deg, #0147ff, #16244e)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                     variants={numberVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     custom={index}
//                   >
//                     {reason.number}
//                   </motion.div>

//                   {/* Description */}
//                   <p
//                     className={`text-gray-300 max-w-[200px]  mt-6 md:mt-0 ${
//                       isRightAligned ? "text-left" : "text-right"
//                     }`}
//                   >
//                     {reason.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyAttend;



import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { whyAttend } from "../../constants";

const WhyAttend = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
        duration: 0.6,
        delay: 0.3 + i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.5 + i * 0.15,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };
  return (
    <div className="bg-black text-white py-16 md:py-24 relative overflow-x-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            WHY ATTEND?
          </motion.h2>

          <motion.p
            className="mt-4 md:mt-0 text-lg md:text-xl max-w-md"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyAttend.map((reason, index) => {
            const isRightAligned = index >= 2;

            return (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 relative overflow-hidden h-64"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 85, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Title */}
                <h3
                  className={`text-lg md:text-3xl font-bold uppercase mb-6 ${
                    isRightAligned ? "text-right" : "text-left"
                  }`}
                >
                  {reason.title}
                </h3>

                {/* Number and Description */}
                <div className="flex flex-col md:flex-row justify-between items-end">
                  {/* Number */}
                  <motion.div
                    className={`absolute bottom-[-15%] ${
                      isRightAligned ? "right-10" : "left-3"
                    } text-9xl md:text-9xl font-bold z-[-1]`}
                    style={{
                      background: "linear-gradient(90deg, #0147ff, #16244e)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    variants={numberVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    {reason.number}
                  </motion.div>

                  {/* Description */}
                  <div className={`w-1/2 ${isRightAligned ? "text-left pl-6" : "text-right pr-6"} relative bottom-0`}>
                    <p className="text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;