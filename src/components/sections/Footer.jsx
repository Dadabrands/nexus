"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const linkVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  }

  const socialVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.footer
      className="bg-black text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <motion.div className="bg-gray-200 text-black rounded-3xl p-8 md:p-10" variants={itemVariants}>
            <motion.h3 className="text-2xl md:text-3xl font-bold mb-8" variants={itemVariants}>
              Next-Gen AI Summit 2052
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {/* Navigation links - left column */}
              <div className="space-y-4">
                <motion.a
                  href="/agenda"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  Agenda
                </motion.a>
                <motion.a
                  href="/speakers"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  Speakers
                </motion.a>
                <motion.a
                  href="/register"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  Register
                </motion.a>
                <motion.a
                  href="/venue"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  Venue
                </motion.a>
                <motion.a
                  href="/faq"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  FAQ
                </motion.a>
              </div>

              {/* Navigation links - right column */}
              <div className="space-y-4">
                <motion.a
                  href="/terms"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  Terms & Conditions
                </motion.a>
                <motion.a
                  href="/privacy"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="/cookies"
                  className="block text-gray-700 hover:text-black transition-colors"
                  variants={itemVariants}
                  whileHover={linkVariants.hover}
                >
                  Cookie Policy
                </motion.a>
              </div>
            </div>

            <motion.p className="text-sm text-gray-600" variants={itemVariants}>
              © 2052 Next-Gen AI Summit. All rights reserved.
            </motion.p>
          </motion.div>

          {/* Right column */}
          <motion.div className="bg-blue-600 text-white rounded-3xl p-8 md:p-10" variants={itemVariants}>
            <motion.h3 className="text-2xl md:text-3xl font-bold mb-4" variants={itemVariants}>
              STAY UPDATED
            </motion.h3>

            <motion.p className="mb-8" variants={itemVariants}>
              Subscribe for event updates & exclusive content.
            </motion.p>

            <motion.form onSubmit={handleSubmit} className="mb-12" variants={itemVariants}>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-white/50 focus:border-white py-2 px-0 text-white placeholder-white/70 outline-none transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                className="bg-white text-blue-600 rounded-full py-3 px-8 font-medium hover:bg-opacity-90 transition-colors"
                disabled={isSubmitting || isSubmitted}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Submitting..." : isSubmitted ? "Thank you!" : "Stay updated"}
              </motion.button>
            </motion.form>

            <motion.h4 className="text-xl font-bold mb-4" variants={itemVariants}>
              FOLLOW US
            </motion.h4>

            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

