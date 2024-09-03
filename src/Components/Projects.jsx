import  { useState } from 'react';
import img2 from "../images/flagapp.jpg";
import img3 from "../images/E-Commerce011.jpg";
const Projects = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Function to handle image click
  const handleImageClick = (projectName, projectLink) => {
    setModalContent({ projectName, projectLink });
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-slate-700 overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
        </div>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a
            href="#_"
            onClick={() => handleImageClick('Project 1', 'https://mayur0018.github.io/mayurpaushak.github.io/')}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              alt="Project 1"
            />
          </a>
          <a
            href="#_"
            onClick={() => handleImageClick('Project 2', 'https://flagapp-mayurs-projects-9bcb5f0d.vercel.app/')}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src={img2}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              alt="Project 2"
            />
          </a>
          <a
            href="#_"
            onClick={() => handleImageClick('Project 3', 'https://mayur0018.github.io/mayurpaushak.github.io/')}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src={img3}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              alt="Project 3"
            />
          </a>
          <a
            href="#_"
            onClick={() => handleImageClick('Project 4', '')}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              alt="Project 4"
            />
          </a>
        </div>

        {/* Modal for project details */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold mb-4">{modalContent.projectName}</h2>
              <p className="mb-4">Check out the GitHub repository for more details.</p>
              <a
                href={modalContent.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}  
      </div>
    </section>
  );
};

export default Projects;
