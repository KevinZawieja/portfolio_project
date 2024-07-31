import React from "react";
import Title from "../home/Title";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex ">
        <div className="py-6">
          <h2 className="font-semibold mb-1">
            Auf dem Weg zum Abschluss meines Studiums.
          </h2>
          <p className="text-base leading-6 ">
            Spaß & Leidenschaft für die Frontend-Entwicklung sowie
            Backend-Entwicklung.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800">
          <h2 className="font-semibold mb-1">Aktive Pausen in der Woche</h2>
          <p className="text-base leading-6 ">
            Badminton, Wandern, Schwimmen und weitere Aktivitäten gehören neben
            der hauptsächlichen sitzenden Tätigkeit zu meinem Wochenplan.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
