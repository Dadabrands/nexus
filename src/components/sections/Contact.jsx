import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EVENT_DETAILS } from "../../constants";

// Import social media icons (you can use SVGs or a font icon library like react-icons)
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

// Import the map SVG (adjust the path as needed)
import MapSVG from "../../assets/images/map.svg";

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted!");
  };

  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-x-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Contact Info + Form */}
        <div className="flex flex-col lg:flex-row lg:gap-12 mb-16">
          {/* Left Side: Header and Contact Info */}
          <div className="flex-1 mb-12 lg:mb-0">
            <motion.h2
              className="text-xl md:text-xl lg:text-xl font-bold tracking-wider leading-tight"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              We’re Here To
              <br />
              Connect And
              <br />
              Assist YOU
            </motion.h2>

            <motion.p
              className="mt-4 text-lg md:text-xl max-w-md text-gray-300"
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.
            </motion.p>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Contact Us */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <h3 className="text-xl font-bold uppercase mb-2">Contact Us</h3>
                <p className="text-gray-300">+31 20 123 4567</p>
              </motion.div>

              {/* Event Location */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <h3 className="text-xl font-bold uppercase mb-2">Event Location</h3>
                <p className="text-gray-300">{EVENT_DETAILS.location}</p>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <h3 className="text-xl font-bold uppercase mb-2">Email</h3>
                <p className="text-gray-300">info@nexus.com</p>
              </motion.div>

              {/* Follow Us */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
              >
                <h3 className="text-xl font-bold uppercase mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                    <FaFacebookF size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                    <FaYoutube size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            className="flex-1 bg-[#2a2a2a] rounded-3xl p-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <h3 className="text-xl font-bold uppercase mb-2">Get In Touch</h3>
            <p className="text-gray-300 mb-6">Reach out with inquiries about tickets, partnerships, or event details.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-700 transition-colors"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="rounded-3xl overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
        >
          <img src={MapSVG} alt="Event Location Map" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;