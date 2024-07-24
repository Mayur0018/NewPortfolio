import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const headerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setMenuOpen(false); // Close menu on link click for mobile screens
    }
  };

  return (
    <motion.header
      className="bg-gradient-to-r from-gray-900 to-slate-700 text-white flex justify-between items-center p-6 lg:px-16 lg:py-8"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="text-2xl font-bold lg:text-3xl"
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Mayur Portfolio
      </motion.div>

      {/* Menu Icon for Small Screens */}
      <div className="block lg:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-3xl sm:mt-2 sm:ml-10"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 right-0 w-full lg:relative lg:flex lg:items-center lg:w-auto bg-gradient-to-r from-gray-900 to-slate-700 lg:bg-transparent ${menuOpen ? 'block' : 'hidden'} lg:block`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="#hero"
          className="block lg:inline-block mx-2 lg:mx-4 hover:text-gray-400 lg:text-lg"
          onClick={handleLinkClick}
        >
          Home
        </a>
        <a
          href="#about"
          className="block lg:inline-block mx-2 lg:mx-4 hover:text-gray-400 lg:text-lg"
          onClick={handleLinkClick}
        >
          About
        </a>
        <a
          href="#skills"
          className="block lg:inline-block mx-2 lg:mx-4 hover:text-gray-400 lg:text-lg"
          onClick={handleLinkClick}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block lg:inline-block mx-2 lg:mx-4 hover:text-gray-400 lg:text-lg"
          onClick={handleLinkClick}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block lg:inline-block mx-2 lg:mx-4 hover:text-gray-400 lg:text-lg"
          onClick={handleLinkClick}
        >
          Contact
        </a>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
