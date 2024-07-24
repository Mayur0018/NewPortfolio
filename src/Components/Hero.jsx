import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';
import { TypeAnimation } from 'react-type-animation';

const textVariants = {
  hidden: { opacity: 0, scale: 0.9, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Hero = () => {
  const [animationCount, setAnimationCount] = useState(0);
  const [showStaticText, setShowStaticText] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: false, // Disable reset to keep the animation visible
    });
  }, []);

  const handleTypingComplete = () => {
    setAnimationCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount >= 5) {
        setShowStaticText(true);
      }
      return newCount;
    });
  };

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-slate-700 text-white px-4 md:px-8 lg:px-16"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center reveal"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        {!showStaticText ? (
          <TypeAnimation
            sequence={[
              "Hello, I'm Mayur Nishad", // Text to type out
              2000, // Wait 2 seconds before starting to erase
              "Frontend Developer", // Text to type out
              2000, // Wait 2 seconds before starting to erase
              () => handleTypingComplete(), // Callback after each sequence
            ]}
            speed={50}          // Speed of typing
            deleteSpeed={50}    // Speed of erasing
            cursor
            wrapper="span"
            repeat={Infinity}   // Repeat indefinitely
          />
        ) : (
          "Hello, I'm Mayur Nishad"
        )}
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mt-4 text-center reveal"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        {showStaticText ? "Frontend Developer" : (
          <TypeAnimation
            sequence={[
              "Frontend Developer", // Text to type out
              2000, // Wait 2 seconds before starting to erase
              "Hello, I'm Mayur Nishad", // Text to type out
              2000, // Wait 1 second before starting to erase
              () => handleTypingComplete(), // Callback after each sequence
            ]}
            speed={50}          // Speed of typing
            deleteSpeed={50}    // Speed of erasing
            cursor
            wrapper="span"
            repeat={Infinity}   // Repeat indefinitely
          />
        )}
      </motion.p>
    </section>
  );
};

export default Hero;
