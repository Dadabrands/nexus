import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-4xl font-light tracking-wider text-white">
          nexus
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="px-6 py-2 border border-white rounded-full text-white hover:bg-gray-800 transition-colors"
          >
            Home
          </a>
          <a href="/schedule" className="text-white hover:text-blue transition-colors">
            Schedule
          </a>
          <a href="/speakers" className="text-white hover:text-blue transition-colors">
            Speakers
          </a>
          <a href="/tickets" className="text-white hover:text-blue transition-colors">
            Tickets
          </a>
          <a href="/venue" className="text-white hover:text-blue transition-colors">
            Venue
          </a>
          <a href="/sponsors" className="text-white hover:text-blue transition-colors">
            Sponsors
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-6 text-xl">
              <a
                href="/"
                className="px-6 py-2 border border-white rounded-full text-white"
              >
                Home
              </a>
              <a href="/schedule" className="text-white">Schedule</a>
              <a href="/speakers" className="text-white">Speakers</a>
              <a href="/tickets" className="text-white">Tickets</a>
              <a href="/venue" className="text-white">Venue</a>
              <a href="/sponsors" className="text-white">Sponsors</a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;