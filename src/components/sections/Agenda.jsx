import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Button from "../common/Button";
import { agenda, EVENT_DETAILS } from "../../constants";
import AgendaGraphics from "../../assets/images/agenda-graphic.svg"

function Agenda() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the title
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Parallax Effect */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider"
            style={{ y: titleY }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            AGENDA
          </motion.h2>

          <motion.div
            className="mt-4 md:mt-0 text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg">{EVENT_DETAILS.date} | Horizon</p>
            <p className="text-lg">Convention Center, Amsterdam</p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Days */}
          <div className="space-y-20 md:space-y-32">
            {agenda.map((day, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{day.day}</h3>
                    <p className="text-2xl md:text-3xl font-light">{day.time}</p>
                  </motion.div>
                </div>

                <div>
                  <motion.h4
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {day.title}
                  </motion.h4>

                  <motion.p
                    className="text-gray-300 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {day.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Image at Bottom Left */}
          <div className="absolute bottom-[-1] left-0 w-100 h-100 overflow-hidden">
            <img
              src={AgendaGraphics}
              alt="Agenda Graphic"
              className="w-full h-full object-cover rounded-bl-3xl"
            />
          </div>

          {/* View Schedule Button */}
          <div className="mt-16 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button href="/schedule">View detailed schedule</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agenda;