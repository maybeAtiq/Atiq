import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";


const spotlightProjects = [
    {
    title: "SolGen",
    desc: "A browser extension for batch generation of solana wallets. Supports batch funding and withdrawal",
    techStack: "Next.js, Solana/web3.js, Tailwind CSS",
    link: "",
    open: "",
    image: "/assets/solgen.png",
  },
  {
    title: "Press-It!",
    desc: "A free PWA to compress scanned documents to under 500KB.",
    techStack: "Next.js, Node.js",
    open: "https://pressit.onrender.com/",
    image: "/assets/pressit.png",
  },
  {
    title: "Retro Reels Movie Night",
    desc: "A Ticketing site for Retro Reels Movie Night.",
    techStack: "Next.js,Tailwind CSS, Supabase",
    open: "https://retro-reels-ticket.vercel.app/",
    image: "/assets/retro1.png",
  },
  // {
  //   title: "Street10 Pizza",
  //   desc: "Pizza ordering and delivery website for Street10",
  //   techStack: "Next.js, MongoDB, AWS",
  //   link: "https://github.com/maybeAtiq/street-10-pizza",
  //   open: "",
  //   image: "/assets/me2.jpg",
  // },

];

const otherProjects = [
  {
    title: "MoDet",
    desc: "A motion detector built using Python and OpenCV.",
    techStack: "Python",
    link: "https://github.com/maybeAtiq/Motion-Detection",
  },
  {
    title: "QR Code Generator",
    desc: "Tool to enerate QR codes easily.",
    techStack: "Next.js, Tailwind CSS",
    link: "https://github.com/maybeAtiq/QR",
    open: "https://qr-code-by-atiq.vercel.app/",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % spotlightProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + spotlightProjects.length) % spotlightProjects.length);
  };

  return (
    <section id="projects" className="bg-gray-900 min-h-[50vh] mx-auto w-full py-10 px-4 md:px-20 flex flex-col justify-center">
      <h2 className="text-[32px] font-semibold text-green-400 mb-4">/ my projects</h2>

      {/* Spotlight Projects Carousel */}
      <div className="relative w-full h-48 md:h-96 overflow-hidden rounded-xl flex items-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={spotlightProjects[currentProject].title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            onClick={() => !isMobile && nextProject()}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 50) prevProject();
              if (info.offset.x < -50) nextProject();
            }}
          >
            <img
              src={spotlightProjects[currentProject].image}
              alt={spotlightProjects[currentProject].title}
              className="w-full object-cover md:object-center"
            />
            <div className="absolute inset-0 bg-black opacity-80 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-xl font-semibold">{spotlightProjects[currentProject].title}</h3>
              <p className="text-sm my-2">{spotlightProjects[currentProject].desc}</p>
              <p className="text-xs text-green-400">{spotlightProjects[currentProject].techStack}</p>
              <div className="mt-3 flex gap-4">
                <a href={spotlightProjects[currentProject]?.link} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="text-xl hover:text-green-400 transition" />
                </a>
                <a href={spotlightProjects[currentProject].open} target="_blank" rel="noopener noreferrer">
                  <OpenInNewIcon className="text-xl hover:text-green-400 transition" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {!isMobile && (
        <>
            (<button className="absolute left-3 text-white bg-gray-800 p-2 rounded-full hover:bg-green-400 transition" onClick={prevProject}>
                <ArrowBackIosRoundedIcon />
            </button>)
            (<button className="absolute right-3 text-white bg-gray-800 p-2 rounded-full hover:bg-green-400 transition" onClick={nextProject}>
                <ArrowForwardIosRoundedIcon />
            </button>)
          </>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-3">
        {spotlightProjects.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === currentProject ? "bg-green-400" : "bg-gray-600"}`}
            onClick={() => setCurrentProject(i)}
          />
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {otherProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <FolderOpenRoundedIcon className="text-green-400 text-2xl" />
              <div className="flex gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="text-xl text-white hover:text-green-400 cursor-pointer transition" />
                </a>
                {project.open && (
                  <a href={project.open} target="_blank" rel="noopener noreferrer">
                    <OpenInNewIcon className="text-xl text-white hover:text-green-400 transition" />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-base font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{project.desc}</p>
            <p className="text-gray-500 text-xs mt-2">{project.techStack}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
