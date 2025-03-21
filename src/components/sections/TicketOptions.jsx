"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const TicketOptions = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // Ticket data
  const tickets = [
    {
      id: 1,
      type: "EARLY BIRD PASS",
      price: "€299",
      description: "Limited time offer!",
      featured: true,
      buttonStyle: "bg-gray-200 text-blue-600 hover:bg-white",
    },
    {
      id: 2,
      type: "STANDARD PASS",
      price: "€399",
      description: "",
      featured: false,
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-500",
    },
    {
      id: 3,
      type: "VIP EXPERIENCE",
      price: "€699",
      description: "Includes exclusive speaker meetups & front-row seating",
      featured: false,
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-500",
    },
  ]

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
        delay: 0.2 + i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  }

  const priceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4 + i * 0.15,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + i * 0.15,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <div className="bg-black text-white py-16 md:py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Ticket Options
        </motion.h2>

        {/* Ticket cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[400px] ${
                ticket.featured ? "bg-blue-600" : "bg-black border border-white/20"
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{
                y: -10,
                boxShadow: ticket.featured
                  ? "0 20px 40px rgba(0, 85, 255, 0.3)"
                  : "0 20px 40px rgba(255, 255, 255, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {ticket.type}
                </motion.h3>

                {ticket.description && (
                  <motion.p
                    className="text-lg mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    {ticket.description}
                  </motion.p>
                )}
              </div>

              <div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-8"
                  variants={priceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {ticket.price}
                </motion.div>

                <motion.a
                  href={`/tickets/${ticket.type.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`inline-flex items-center ${ticket.buttonStyle} font-medium py-3 px-6 rounded-full transition-colors w-full justify-center`}
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get your ticket
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Animated accent for featured card */}
              {ticket.featured && (
                <motion.div
                  className="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full opacity-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background animation elements */}
      <div className="absolute top-1/3 left-0 -z-10 opacity-5">
        <motion.div
          className="w-80 h-80 rounded-full border-2 border-blue-600"
          animate={{
            x: [-50, 50, -50],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="absolute bottom-1/4 right-0 -z-10 opacity-5">
        <motion.div
          className="w-64 h-64 rounded-full border-2 border-white"
          animate={{
            x: [50, -50, 50],
            y: [50, 0, 50],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

export default TicketOptions

