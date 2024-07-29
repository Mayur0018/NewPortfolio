import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)" }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1, backgroundColor: "#f5f5f5" }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_v7q9t77', // Your Service ID
      'template_i40oogk', // Your Template ID
      formData,
      'GZZqkhgCl0SYb1Q8g' // Your Public Key (User ID)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Optionally, reset the form or show a success message here
      setFormData({ from_name: "", from_email: "", message: "" });
    }, (err) => {
      console.log('FAILED...', err);
      // Optionally, show an error message here
    });
  };

  return (
    <motion.section 
      id="contact" 
      className="h-[600px] p-8 bg-gradient-to-r from-gray-900 to-slate-700 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex justify-center mt-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 mt-8">
        <motion.input 
          className="p-2 bg-transparent border border-gray-300 placeholder-gray-400 text-white rounded-md w-full sm:w-3/4 md:w-1/2"
          type="text" 
          name="from_name"
          placeholder="Name" 
          value={formData.from_name}
          onChange={handleChange}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5 }}
        />
        <motion.input 
          className="p-2 bg-transparent border border-gray-300 placeholder-gray-400 text-white rounded-md w-full sm:w-3/4 md:w-1/2"
          type="email" 
          name="from_email"
          placeholder="Email" 
          value={formData.from_email}
          onChange={handleChange}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5 }}
        />
        <motion.textarea 
          className="p-2 bg-transparent border border-gray-300 placeholder-gray-400 text-white rounded-md w-full sm:w-3/4 md:w-1/2"
          name="message"
          rows="4" 
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5 }}
        />
        <motion.button 
          className="bg-transparent border border-white text-white p-2 font-bold rounded-md w-full sm:w-3/4 md:w-1/2"
          type="submit"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5 }}
        >
          Send
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
