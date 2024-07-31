import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="Mein" subTitle="Hintergrund" />
      <AboutMe />
      <Title title="Fähigkeiten" subTitle="& Stärken" />
      <MyServices />
      <Title title="Sonstige" subTitle="Erfahrungen" />
      <FunFact />
    </section>
  );
};

export default About;
