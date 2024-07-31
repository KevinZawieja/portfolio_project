import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<AiOutlineDatabase />}
        title="API's & Librarys"
        subTitle="Erfahrungen mit Erkennen von Datenstrukturen und Extrahierung von Daten aus API's sowie Einarbeitung in neue Librarys und Frameworks."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="GUI Design"
        subTitle="Kenntnisse in der Gestaltung benutzerfreundlicher und ästhetisch ansprechender Oberflächen, um eine optimale User Experience zu gewährleisten."
      />
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development & Datenbanken"
        subTitle="Erfahrung in der Entwicklung von modernen Webanwendungen mit Java und React, einschließlich der Integration und Verwaltung von Datenbanken (SQL und NoSQL)."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Projektmanagement-Tools"
        subTitle="Erfahrung in der Anwendung von Jira und Azure DevOps zur Unterstützung agiler Methoden wie Scrum & Kanban und die damit verbundene eigenverantwortliche Organisation und Verwaltung von Projekten."
      />
    </div>
  );
};

export default MyServices;
