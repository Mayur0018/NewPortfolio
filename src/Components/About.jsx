import { motion } from "framer-motion";
import images1 from "../images/myimage.png";

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="min-h-screen p-8 bg-gradient-to-r from-gray-900 to-slate-700 flex flex-col items-center"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-4 text-center transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.img 
        src={images1}
        alt="Frontend Developer" 
        className="rounded-lg w-full max-w-xs sm:max-w-md lg:max-w-lg mb-8 transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      />
      <motion.p 
        className="text-base sm:text-sm lg:text-xl leading-relaxed text-center text-white font-medium transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Hey, I&apos;m Mayur Nishad, a passionate frontend developer looking to kickstart my career in web development. 
        As a fresher, I bring a strong foundation in HTML, CSS, and JavaScript, and I&apos;m eager to learn and grow 
        with a dynamic team. I am committed to creating visually appealing and user-friendly websites, focusing 
        on delivering a seamless and responsive user experience.
      </motion.p>
    </motion.section>
  );
};

export default About;
