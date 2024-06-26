import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="w-full lgl:w-[95%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between py-6 px-8 lgl:p-0">
      {/* ================= Left Icons End here ======================== */}
      <div className="w-44 h-96 bg-transparent hidden lgl:flex flex-col gap-4 mr-4 mt-48">
        {/* ======= SIDE NAV START*/}
        {/* <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
          <div className="flex flex-col gap-1.5 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div> */}
        {/* ======= SIDE NAV START END */}
        {/* ======= Other Icons Start */}
        <div className="w-full h-80 bg-bodyColor rounded-2xl flex flex-col items-center justify-between py-4">
          {/* About Icon */}
          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              about
                ? "w-3/4 h-6 text-designColor text-xl flex items-start duration-300 cursor-pointer relative group"
                : "w-3/4 h-6 text-xl flex items-start text-textColor hover:text-designColor duration-300 cursor-pointer relative group"
            }`}
          >
            <FaUser />
            <span
              className={`${
                about
                  ? "text-black font-medium text-xs uppercase bg-designColor  px-4 py-[2px] rounded-xl absolute opacity-1 group-hover:opacity-100 translate-x-8 transition-all duration-300 z-20"
                  : " text-black font-medium text-xs uppercase bg-white hover:bg-designColor px-4 py-[2px] rounded-xl absolute translate-x-8 opacity-1 group-hover:opacity-100 transition-all duration-300 z-20"
              }`}
            >
              Über Mich
            </span>
          </span>
          {/* Resume Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(true) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              resume
                ? "w-3/4 h-6 text-designColor text-xl flex items-start duration-300 cursor-pointer relative group"
                : "w-3/4 h-6 text-xl flex items-start text-textColor hover:text-designColor duration-300 cursor-pointer relative group"
            }`}
          >
            <IoIosPaper />
            <span
              className={`${
                resume
                  ? "text-black font-medium text-xs uppercase bg-designColor  px-4 py-[2px] rounded-xl absolute opacity-1 group-hover:opacity-100 translate-x-8 transition-all duration-300 z-20"
                  : " text-black font-medium text-xs uppercase bg-white hover:bg-designColor px-4 py-[2px] rounded-xl absolute translate-x-8 opacity-1 group-hover:opacity-100 transition-all duration-300 z-20"
              }`}
            >
              {" "}
              Lebenslauf
            </span>
          </span>
          {/* Project Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setBlog(false) &
              setContact(false)
            }
            className={`${
              projects
                ? "w-3/4 h-6 text-designColor text-xl flex items-start duration-300 cursor-pointer relative group"
                : "w-3/4 h-6 text-xl flex items-start text-textColor hover:text-designColor duration-300 cursor-pointer relative group"
            }`}
          >
            <MdWork />
            <span
              className={`${
                projects
                  ? "text-black font-medium text-xs uppercase bg-designColor  px-4 py-[2px] rounded-xl absolute opacity-1 group-hover:opacity-100 translate-x-8 transition-all duration-300 z-20"
                  : " text-black font-medium text-xs uppercase bg-white hover:bg-designColor px-4 py-[2px] rounded-xl absolute translate-x-8 opacity-1 group-hover:opacity-100 transition-all duration-300 z-20"
              }`}
            >
              {" "}
              Projekte
            </span>
          </span>
          {/* Blog Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(true) &
              setContact(false)
            }
            className={`${
              blog
                ? "w-3/4 h-6 text-designColor text-xl flex items-start duration-300 cursor-pointer relative group"
                : "w-3/4 h-6 text-xl flex items-start text-textColor hover:text-designColor duration-300 cursor-pointer relative group"
            }`}
          >
            <SiGooglechat />
            <span
              className={`${
                blog
                  ? "text-black font-medium text-xs uppercase bg-designColor  px-4 py-[2px] rounded-xl absolute opacity-1 group-hover:opacity-100 translate-x-8 transition-all duration-300 z-20"
                  : " text-black font-medium text-xs uppercase bg-white hover:bg-designColor px-4 py-[2px] rounded-xl absolute translate-x-8 opacity-1 group-hover:opacity-100 transition-all duration-300 z-20"
              }`}
            >
              {" "}
              Freizeit
            </span>
          </span>
          {/* Contact Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(true)
            }
            className={`${
              contact
                ? "w-3/4 h-6 text-designColor text-xl flex items-start duration-300 cursor-pointer relative group"
                : "w-3/4 h-6 text-xl flex items-start text-textColor hover:text-designColor duration-300 cursor-pointer relative group"
            }`}
          >
            <FaEnvelope />
            <span
              className={`${
                contact
                  ? "text-black font-medium text-xs uppercase bg-designColor  px-4 py-[2px] rounded-xl absolute opacity-1 group-hover:opacity-100 translate-x-8 transition-all duration-300 z-20"
                  : " text-black font-medium text-xs uppercase bg-white hover:bg-designColor px-4 py-[2px] rounded-xl absolute translate-x-8 opacity-1 group-hover:opacity-100 transition-all duration-300 z-20"
              }`}
            >
              {" "}
              Kontakt
            </span>
          </span>
        </div>
        {/* ======= Other Icons End */}
      </div>
      {/* ================= Left Icons Start here ====================== */}
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
        {/* ======================== Home Left Start here ============================ */}
        <Left />
        {/* ======================== Home Left End here ============================== */}
        <div className="w-full lgl:w-full h-[98%] bg-bodyColor rounded-2xl flex justify-center items-center">
          {/* ======================== Smaller device content Start ======================== */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Projects />
            <Blog />
            <Contact />
          </div>
          {/* ======================== Smaller device content End ========================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-custom">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
