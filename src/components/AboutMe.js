import { useContext } from "react";
import { LanguageContext } from "../context/LanguangeContext";

const AboutMe = () => {
  const languageContext = useContext(LanguageContext);
  const { data } = languageContext;

  return (
    <div
      id={data.about[0]}
      className="container-about-me"
      style={{ backgroundImage: 'url("./assets/circulos.png")' }}
    >
      <h2 className="fontTitulos">{data.about[0]}</h2>
      <p className="fontTexto">{data.about[1]}</p>
    </div>
  );
};

export default AboutMe;
