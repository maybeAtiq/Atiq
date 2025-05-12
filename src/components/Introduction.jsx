import React from "react";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";

const Introduction = () => {
  return (
    <div id="Introduction" className="flex flex-col mx-auto items-center justify-center h-screen w-full bg-gray-900 text-white px-4 md:px-20 py-6">
      <motion.div>
        {/* Typing Animation */}
        <motion.h1 
          className="text-4xl md:text-6xl font-semibold text-center" 
          style={{ fontFamily: "'Klee One', cursive" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 6 }}
        >
          hi, <span className="text-green-400">atiq</span> here.
        </motion.h1>

          <p className="text-lg md:text-xl text-gray-400 mt-4 text-center">
            conjuring code magic.
          </p>
          <p className="text-md md:text-base text-gray-300 mt-4 max-w-2xl text-center">
            I'm a software engineer from Nigeria, fascinated by large-scale, high-impact products. 
            I specialize in crafting seamless user experiences on web and mobile.
          </p>

          {/* Contact Button */}
          <div className="mx-auto w-fit">
          <a 
            href="mailto:hello@maybeatiq.dev"
            className="mt-6 inline-flex items-center border border-green-400 text-green-400 px-4 py-4 rounded-lg hover:border-green-600 transition"
          >
            <EmailIcon className="w-5 h-5 mr-2" />
            Say hi!
          </a></div>
        </motion.div>
    </div>
  );
};

export default Introduction;
