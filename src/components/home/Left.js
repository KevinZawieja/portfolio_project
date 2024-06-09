import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsDownload } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiActivity, FiMail } from "react-icons/fi";
import Lebenslauf from "../../assets/Lebenslauf.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: [
      "Haw Student",
      "Bachelor of Science - Angewandte Informatik",
      "Front-End & Back-End",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-7/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover object-top rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">
            Kevin Zawieja
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span
              onClick={() =>
                window.open("https://github.com/KevinZawieja", "_blank")
              }
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FaGithub size={26} />
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kevin-zawieja-aab984214/",
                  "_blank"
                )
              }
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FaLinkedin size={26} />
            </span>
            <span
              onClick={() =>
                (window.location.href = "mailto:kevin_zawieja@hotmail.de")
              }
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FiMail size={26} />
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={Lebenslauf}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              LEBENSLAUF <BsDownload />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            PLATZHALTER <FiActivity />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
