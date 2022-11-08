import React from "react";
import Titulo from "../Titulo/Titulo";
import TextContainer from "../TextContainer/TextContainer";
import "./Resume.css";
function Resume() {
  return (
    <div className="container-resume">
      <Titulo titulo="Ricky And Morty" />
      <TextContainer texto="Es un genio, pero es irresponsable, alcohólico, egoísta, un poco depresivo y con poca cordura. Rick por diferentes razones termina mudándose a la casa de su hija Beth y en ese momento se encuentra con su nieto Morty; un chico de 14 años de edad, tímido y no muy listo. Al juntarse con su nieto, Rick y Morty viven una variedad de aventuras a lo largo del cosmos y universos paralelos. " />
    </div>
  );
}

export default Resume;
