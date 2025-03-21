

import { motion } from "framer-motion";
import Button from "../common/Button";
import { EVENT_DETAILS } from "../../constants";
import HeroGraphics from "../../assets/images/hero-graphic.svg"
function Hero() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg md:text-xl tracking-wider text-white">
                {EVENT_DETAILS.date}
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg md:text-xl tracking-wider text-white mt-4 md:mt-0">
                {EVENT_DETAILS.location}
              </h3>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            <div>
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wider text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                NEXT-GEN AI SUMMIT
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-white mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Explore the cutting-edge innovations shaping the future of artificial intelligence. Join global leaders and visionaries for two days of insights, discussions, and breakthroughs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button href="/tickets">Early bird tickets</Button>
              </motion.div>
            </div>

            {/* Rolling Image */}
            <motion.div
              className="hidden lg:block relative"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <img
                src={HeroGraphics}
                alt="AI Summit Graphic"
                className="w-64 md:w-80 lg:w-96"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;