import React from "react";
import profileImage from "/assets/me2.jpg"; // Ensure the correct path

const About = () => {
  const techStack = [
    {
      stack: "Javascript",
      logo: "/assets/js.png",
    },
    {
      stack: "React.js",
      logo: "/assets/react.png",
    },
    {
      stack: "NodeJS",
      logo: "/assets/node.png",
    },
    {
      stack: "Typescript",
      logo: "/assets/typescript.png",
    },
    {
      stack: "Tailwind CSS",
      logo: "/assets/tailwind.png",
    },
    {
      stack: "Python",
      logo: "/assets/python.png",
    },
    // {
    //   stack: "Rust",
    //   logo: "/assets/rust.png",
    // },
    // {
    //   stack: "Swift",
    //   logo: "/assets/swift.png",
    // },
  ];

  return (
    <div id="about" className="bg-gray-900 min-h-[50vh] mx-auto w-full py-10 px-4 md:px-20 flex flex-col justify-center">
        <span className="text-[32px] font-semibold text-green-400 mb-4">/ about me</span>
        <div className="flex flex-row flex-wrap items-start justify-start gap-8 w-full">
          {/* About Text Section */}
          <div className="w-full text-justify text-base text-gray-300">
            <p className="mb-4">
             I am a <b className="text-white">Software Developer</b> specializing in frontend development, passionate about building user-friendly and efficient applications.
            </p>
            <p className="mb-4">Here are some technologies I have been working with:</p>

            {/* Tech Stack List */}
              <ul className="grid grid-cols-2 gap-3">
              {techStack.map((tech, i) => (
                <li key={i} className="flex items-center space-x-2 text-base text-gray-300">
                  <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
                  <span>{tech.stack}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              Outside of work, I’m advancing my skills in cybersecurity and data forensics, with the goal of making the digital world safer and more efficient. I also play video games and make art too!
            </p>
          </div>

          {/* Profile Image Section */}
          {/* <div className="md:pl-10 w-fit justify-center md:justify-start hidden md:block">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-[300px] h-auto rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 md:ml-8"
            />
          </div> */}
        </div>
    </div>
  );
};

export default About;
