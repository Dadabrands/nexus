import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const Register = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 5,
    minutes: 30,
    seconds: 0,
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Calculate new time
        let { days, hours, minutes, seconds } = prevTime

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                // Timer complete
                clearInterval(timer)
                return prevTime
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    // Cleanup
    return () => clearInterval(timer)
  }, [])

  // Format time with leading zeros
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const numberVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, type: "spring" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6, type: "spring" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(0, 85, 255, 0.5)",
    },
    tap: { scale: 0.98 },
  }

  return (
    <div className="bg-black text-white py-16 md:py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            REGISTER
            <br />
            NOW
          </motion.h2>

          <motion.p
            className="mt-4 md:mt-0 text-lg md:text-xl max-w-xs"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Secure your spot at the Next-Gen AI Summit 2052 and join the future of AI innovation.
          </motion.p>
        </div>

        {/* Countdown card */}
        <motion.div
          className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 relative overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <motion.p
                className="text-xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Early Bird Pricing Ends In:
              </motion.p>

              {/* Countdown timer */}
              <div className="flex items-end">
                {/* Days */}
                <div className="text-center mr-2 md:mr-4">
                  <motion.div
                    key={`days-${timeLeft.days}`}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold"
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {formatTime(timeLeft.days)}
                  </motion.div>
                  <motion.p
                    className="text-sm mt-2 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    DAYS
                  </motion.p>
                </div>

                <span className="text-5xl md:text-7xl lg:text-8xl font-bold mx-1 md:mx-2">:</span>

                {/* Hours */}
                <div className="text-center mr-2 md:mr-4">
                  <motion.div
                    key={`hours-${timeLeft.hours}`}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold"
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {formatTime(timeLeft.hours)}
                  </motion.div>
                  <motion.p
                    className="text-sm mt-2 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    HOURS
                  </motion.p>
                </div>

                <span className="text-5xl md:text-7xl lg:text-8xl font-bold mx-1 md:mx-2">:</span>

                {/* Minutes */}
                <div className="text-center">
                  <motion.div
                    key={`minutes-${timeLeft.minutes}`}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold"
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {formatTime(timeLeft.minutes)}
                  </motion.div>
                  <motion.p
                    className="text-sm mt-2 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    MINUTES
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Blue starburst graphic */}
            <motion.div
              className="w-40 h-40 md:w-64 md:h-64 relative"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <BlueBurst />
            </motion.div>
          </div>

          {/* Register button */}
          <div className="mt-12 flex justify-center md:justify-start">
            <motion.a
              href="/register"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-full transition-colors"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              whileTap="tap"
            >
              Register Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background animation elements */}
      <div className="absolute top-1/4 right-10 -z-10 opacity-10">
        <motion.div
          className="w-96 h-96 rounded-full border border-blue-600"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

// Blue starburst/radial component
const BlueBurst = () => {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <motion.path
        d="M100 0L115 85L200 100L115 115L100 200L85 115L0 100L85 85L100 0Z"
        fill="url(#blue-gradient)"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      <motion.path
        d="M100 30L110 85L170 100L110 115L100 170L90 115L30 100L90 85L100 30Z"
        fill="url(#blue-gradient-2)"
        initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      />
      <defs>
        <linearGradient id="blue-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0040FF" />
          <stop offset="1" stopColor="#0080FF" />
        </linearGradient>
        <linearGradient id="blue-gradient-2" x1="30" y1="30" x2="170" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0060FF" />
          <stop offset="1" stopColor="#00A0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Register

