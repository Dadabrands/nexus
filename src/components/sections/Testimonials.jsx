"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const Testimonials = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Testimonial data
  const testimonials = [
    // First set
    [
      {
        id: 1,
        title: "GAME-CHANGING INSIGHTS",
        quote: "This summit opened my eyes to the future of AI and how it will shape industries.",
        name: "Mark Vandenberg",
        role: "CTO, NeuralTech",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        color: "bg-[#1a1a1a]",
      },
      {
        id: 2,
        title: "THE BEST AI EVENT!",
        quote: "Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.",
        name: "Elena Rojas",
        role: "AI Researcher, DeepMind",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        color: "bg-blue-600",
      },
      {
        id: 3,
        title: "UNMATCHED OPPORTUNITIES",
        quote: "From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals.",
        name: "David Laurent",
        role: "CEO, FutureAI Labs",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        color: "bg-gray-200 text-black",
      },
    ],
    // Second set (you can add more testimonials here)
    [
      {
        id: 4,
        title: "INSPIRING CONNECTIONS",
        quote: "I made more valuable industry connections in three days than in the past year.",
        name: "Sarah Johnson",
        role: "AI Ethics Advisor, TechForward",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        color: "bg-blue-600",
      },
      {
        id: 5,
        title: "CUTTING-EDGE CONTENT",
        quote: "The presentations were at the absolute forefront of AI research and application.",
        name: "Michael Chen",
        role: "Lead Engineer, Quantum AI",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        color: "bg-[#1a1a1a]",
      },
      {
        id: 6,
        title: "CAREER-DEFINING EVENT",
        quote: "Attending this summit was pivotal for my career trajectory in artificial intelligence.",
        name: "Aisha Patel",
        role: "ML Researcher, Stanford",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        color: "bg-gray-200 text-black",
      },
    ],
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 + i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
      },
    }),
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" },
    tap: { scale: 0.95 },
  }

  return (
    <div className="bg-black text-white py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            What Past Attendees Say
          </motion.h2>

          <div className="flex space-x-4">
            <motion.button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-white flex items-center justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              aria-label="Previous testimonials"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              aria-label="Next testimonials"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials[currentIndex].map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`${testimonial.color} rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[350px]`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      {testimonial.title}
                    </motion.h3>

                    <motion.p
                      className="text-lg italic mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                  </div>

                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p
                        className={`text-sm ${testimonial.color.includes("gray-200") ? "text-gray-600" : "text-gray-300"}`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-600"}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background animation elements */}
      <div className="absolute top-1/4 right-10 -z-10 opacity-5">
        <motion.div
          className="w-96 h-96 rounded-full border-2 border-blue-600"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
          }}
        />
      </div>

      <div className="absolute bottom-1/4 left-10 -z-10 opacity-5">
        <motion.div
          className="w-80 h-80 rounded-full border-2 border-white"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
          }}
        />
      </div>
    </div>
  )
}

export default Testimonials

