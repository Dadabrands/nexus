// import { motion } from "framer-motion"

// const Speakers = () => {
//   // Company logos with their URLs
//   const logos = [
//     { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
//     { name: "Dribbble", url: "https://cdn.worldvectorlogo.com/logos/dribbble-ball-icon.svg" },
//     { name: "HubSpot", url: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
//     { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
//     { name: "Gumroad", url: "https://cdn.worldvectorlogo.com/logos/gumroad.svg" },
//     // Duplicate logos for seamless infinite scroll
//     { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
//     { name: "Dribbble", url: "https://cdn.worldvectorlogo.com/logos/dribbble-ball-icon.svg" },
//     { name: "HubSpot", url: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
//     { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
//     { name: "Gumroad", url: "https://cdn.worldvectorlogo.com/logos/gumroad.svg" },
//   ]

//   // Speaker profiless
//   const speakers = [
//     { id: 1, image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Dr. Sarah Chen" },
//     { id: 2, image: "https://randomuser.me/api/portraits/women/68.jpg", name: "Maya Rodriguez" },
//     { id: 3, image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Alex Johnson" },
//     { id: 4, image: "https://randomuser.me/api/portraits/women/65.jpg", name: "Zoe Williams" },
//   ]

//   return (
//     <div className="bg-black text-white py-16">
//       {/* Infinite scrolling logos */}
//       <div className="overflow-hidden mb-20">
//         <motion.div
//           className="flex items-center gap-16 md:gap-24"
//           animate={{ x: [0, -1500] }}
//           transition={{
//             x: {
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "loop",
//               duration: 30,
//               ease: "linear",
//             },
//           }}
//         >
//           {logos.map((logo, index) => (
//             <motion.div
//               key={index}
//               className="flex-shrink-0 h-12 w-32 md:h-16 md:w-40 flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <img
//                 src={logo.url || "/placeholder.svg"}
//                 alt={logo.name}
//                 className="max-h-full max-w-full object-contain filter invert"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Content grid */}
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Speakers card */}
//         <motion.div
//           className="bg-blue-600 rounded-3xl p-8 md:p-10"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-8"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Speakers
//           </motion.h2>

//           <div className="flex items-start gap-6 mb-10">
//             <motion.div className="flex-shrink-0 bg-gray-200 rounded-full p-4" whileHover={{ scale: 1.1, rotate: 10 }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-blue-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </motion.div>

//             <motion.p
//               className="text-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial
//               intelligence.
//             </motion.p>
//           </div>

//           {/* Speaker avatars with staggered animation */}
//           <div className="flex mb-8">
//             {speakers.map((speaker, index) => (
//               <motion.div
//                 key={speaker.id}
//                 className="relative -ml-4 first:ml-0"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: 0.1 * index }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5, zIndex: 10 }}
//               >
//                 <img
//                   src={speaker.image || "/placeholder.svg"}
//                   alt={speaker.name}
//                   className="w-16 h-16 rounded-full border-2 border-blue-600 object-cover"
//                 />
//                 <motion.div
//                   className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 500, delay: 0.2 + 0.1 * index }}
//                   viewport={{ once: true }}
//                 >
//                   +
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.a
//             href="/speakers"
//             className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full transition-colors"
//             whileHover={{ scale: 1.05, x: 5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             And more
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </motion.a>
//         </motion.div>

//         {/* Right column with two cards */}
//         <div className="flex flex-col gap-6">
//           {/* Technologies card */}
//           <motion.div
//             className="bg-blue-600 rounded-3xl p-8 md:p-10"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold mb-6"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Technologies
//             </motion.h2>

//             <motion.p
//               className="text-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               Explore advanced machine learning, natural language processing, AI-driven automation, and emerging
//               cybersecurity applications.
//             </motion.p>
//           </motion.div>

//           {/* Networking card */}
//           <motion.div
//             className="bg-gray-200 text-black rounded-3xl p-8 md:p-10"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold mb-6"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               Networking Opportunities
//             </motion.h2>

//             <motion.p
//               className="text-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               viewport={{ once: true }}
//             >
//               Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new
//               partnerships.
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Speakers



// import { motion } from "framer-motion";
// import Button from "../common/Button";
// import { sponsors, speakers } from "../../constants";

// function Speakers() {
//   return (
//     <section className="bg-black text-white py-16">
//       {/* Infinite Scrolling Logos */}
//       <div className="overflow-hidden mb-20">
//         <motion.div
//           className="flex items-center gap-16 md:gap-24"
//           animate={{ x: [0, -1500] }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 30,
//               ease: "linear",
//             },
//           }}
//         >
//           {sponsors.map((logo, index) => (
//             <motion.div
//               key={index}
//               className="flex-shrink-0 h-12 w-32 md:h-16 md:w-40 flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <img
//                 src={logo.url || "/placeholder.svg"}
//                 alt={logo.name}
//                 className="max-h-full max-w-full object-contain filter invert"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Content Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Speakers Card */}
//         <motion.div
//           className="bg-blue rounded-3xl p-8 md:p-10"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-8"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Speakers
//           </motion.h2>

//           <div className="flex items-start gap-6 mb-10">
//             <motion.div
//               className="flex-shrink-0 bg-gray-200 rounded-full p-4"
//               whileHover={{ scale: 1.1, rotate: 10 }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-blue"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </motion.div>

//             <motion.p
//               className="text-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.
//             </motion.p>
//           </div>

//           {/* Speaker Avatars */}
//           <div className="flex mb-8">
//             {speakers.map((speaker, index) => (
//               <motion.div
//                 key={speaker.id}
//                 className="relative -ml-4 first:ml-0"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: 0.1 * index }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5, zIndex: 10 }}
//               >
//                 <img
//                   src={speaker.image || "/placeholder.svg"}
//                   alt={speaker.name}
//                   className="w-16 h-16 rounded-full border-2 border-blue object-cover"
//                 />
//                 <motion.div
//                   className="absolute -bottom-1 -right-1 bg-blue rounded-full w-5 h-5 flex items-center justify-center text-xs text-white"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 500, delay: 0.2 + 0.1 * index }}
//                   viewport={{ once: true }}
//                 >
//                   +
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Button href="/speakers">And more</Button>
//           </motion.div>
//         </motion.div>

//         {/* Right Column with Two Cards */}
//         <div className="flex flex-col gap-6">
//           {/* Technologies Card */}
//           <motion.div
//             className="bg-blue rounded-3xl p-8 md:p-10"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold mb-6"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Technologies
//             </motion.h2>

//             <motion.p
//               className="text-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.
//             </motion.p>
//           </motion.div>

//           {/* Networking Card */}
//           <motion.div
//             className="bg-gray-200 text-black rounded-3xl p-8 md:p-10"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold mb-6"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               Networking Opportunities
//             </motion.h2>

//             <motion.p
//               className="text-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               viewport={{ once: true }}
//             >
//               Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Speakers;

import { motion } from "framer-motion";
import Button from "../common/Button";
import { sponsors, speakers } from "../../constants";

function Speakers() {
  return (
    <section className="bg-black text-white py-16">
      {/* Infinite Scrolling Logos */}
      <div className="overflow-hidden mb-20">
        <motion.div
          className="flex items-center gap-16 md:gap-24"
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {sponsors.map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 h-12 w-32 md:h-16 md:w-40 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={logo.url || "/placeholder.svg"}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Speakers Card */}
        <motion.div
          className="bg-[var(--color-blue)] rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Speakers
          </motion.h2>

          <div className="flex items-start gap-6 mb-10">
            <motion.div
              className="flex-shrink-0 bg-gray-200 rounded-full p-4"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[var(--color-blue)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.div>

            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.
            </motion.p>
          </div>

          {/* Speaker Avatars */}
          <div className="flex mb-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                className="relative -ml-4 first:ml-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5, zIndex: 10 }}
              >
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-16 h-16 rounded-full border-2 border-[var(--color-blue)] object-cover"
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 bg-[var(--color-blue)] rounded-full w-5 h-5 flex items-center justify-center text-xs text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.2 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  +
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button href="/speakers">And more</Button>
          </motion.div>
        </motion.div>

        {/* Right Column with Two Cards */}
        <div className="flex flex-col gap-6">
          {/* Technologies Card */}
          <motion.div
            className="bg-[var(--color-blue)] rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Technologies
            </motion.h2>

            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.
            </motion.p>
          </motion.div>

          {/* Networking Card */}
          <motion.div
            className="bg-gray-200 text-black rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Networking Opportunities
            </motion.h2>

            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;