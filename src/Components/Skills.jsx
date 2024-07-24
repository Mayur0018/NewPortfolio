import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css"; // Import default styles

const skillsData = [
  { name: "HTML", imgSrc: "https://img.icons8.com/color/48/000000/html-5.png" },
  { name: "CSS", imgSrc: "https://img.icons8.com/color/48/000000/css3.png" },
  {
    name: "JavaScript",
    imgSrc: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "React",
    imgSrc:
      "https://img.icons8.com/?size=100&id=Nlsua06Gvxel&format=png&color=000000",
  },
  {
    name: "Tailwind CSS",
    imgSrc:
      "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  },
  // New Skills
  // { name: "TypeScript", imgSrc: "https://img.icons8.com/color/48/000000/typescript.png" },
  // { name: "GraphQL", imgSrc: "https://img.icons8.com/color/48/000000/graphql.png" },
  // { name: "Docker", imgSrc: "https://img.icons8.com/color/48/000000/docker.png" },
  // { name: "Firebase", imgSrc: "https://img.icons8.com/color/48/000000/firebase.png" },
];

const backendSkillsData = [
  {
    name: "Php",
    imgSrc:
      "https://img.icons8.com/?size=100&id=qcPZJD5DNDto&format=png&color=000000",
  },
  // {
  //   name: "Node.js",
  //   imgSrc: "https://img.icons8.com/color/48/000000/nodejs.png",
  // },
  // {
  //   name: "Express.js",
  //   imgSrc: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
  // },
  // {
  //   name: "MongoDB",
  //   imgSrc: "https://img.icons8.com/color/48/000000/mongodb.png",
  // },
  // New Backend Skills
  { name: "SQL", imgSrc: "https://img.icons8.com/color/48/000000/sql.png" },
  // { name: "Redis", imgSrc: "https://img.icons8.com/color/48/000000/redis.png" },
  {
    name: "Next.js",
    imgSrc:
      "https://img.icons8.com/?size=100&id=101876&format=png&color=000000",
  },
];

const otherSkillsData = [
  { name: "Git", imgSrc: "https://img.icons8.com/color/48/000000/git.png" },
  {
    name: "Postman",
    imgSrc:
      "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
  },
  // New Other Skills
  // { name: "Jira", imgSrc: "https://img.icons8.com/color/48/000000/jira.png" },
  // { name: "Slack", imgSrc: "https://img.icons8.com/color/48/000000/slack.png" },
];

const Skills = () => {
  return (
    <>
      <motion.section
        id="skills"
        className="min-h-screen p-8 bg-gradient-to-r from-gray-900 to-slate-700 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center sm:flex">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ x: "100vw", opacity: 1 }}
              animate={{ x: "-100vw" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
              }} // Slower duration
            >
              <img
                src={skill.imgSrc}
                alt={skill.name}
                className="w-8 h-8 mt-4 md:w-10 md:h-10"
              />
              <p className="mt-2 text-sm md:text-base">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <motion.div
            className="max-w-sm bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Frontend Skills
              </h2>
              <ul className="list-disc list-inside space-y-2 grid grid-cols-2 gap-5">
                {skillsData.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-white bg-opacity-50 border-2 border-gray-500 p-2 rounded-md shadow-md bg-gradient-to-r from-gray-900 to-slate-700 flex items-center"
                  >
                    <img
                      src={skill.imgSrc}
                      alt={skill.name}
                      className="w-6 h-6 mr-2 md:w-8 md:h-8"
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="max-w-sm bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Backend Skills
              </h2>
              <ul className="list-disc list-inside space-y-2 grid grid-cols-2 gap-5">
                {backendSkillsData.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-white bg-opacity-50 border-2 border-gray-500 p-2 rounded-md shadow-md bg-gradient-to-r from-gray-900 to-slate-700 flex items-center"
                  >
                    <img
                      src={skill.imgSrc}
                      alt={skill.name}
                      className="w-6 h-6 mr-2 md:w-8 md:h-8"
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="max-w-sm bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Other Skills
              </h2>
              <ul className="list-disc list-inside space-y-2 grid grid-cols-2 gap-5">
                {otherSkillsData.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-white bg-opacity-50 border-2 border-gray-500 p-2 rounded-md shadow-md bg-gradient-to-r from-gray-900 to-slate-700 flex items-center"
                  >
                    <img
                      src={skill.imgSrc}
                      alt={skill.name}
                      className="w-6 h-6 mr-2 md:w-8 md:h-8"
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
