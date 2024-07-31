import React from "react";
import { FaBrain, FaChrome } from "react-icons/fa";
import { MdCalendarToday, MdDesignServices } from "react-icons/md";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard
        icon={<FaBrain />}
        des="Vier Gewinnt KI Simulated Annealing.."
      />
      <FunFactCard
        icon={<MdCalendarToday />}
        des="Weekly-Planner Android Studios"
      />
      <FunFactCard icon={<FaChrome />} des="Web-Browser Python" />
      <FunFactCard
        icon={<MdDesignServices />}
        des="Tools für Wireframes, Logoerstellung, Dokumentation.."
      />
    </div>
  );
};

export default FunFact;
