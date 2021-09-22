import { useContext } from "react";
import { LanguageContext } from "../context/LanguangeContext";
import ButtonHero from "./ButtonHero";
import Navbar from "./Navbar";

const Header = () => {
  const languageContext = useContext(LanguageContext);
  const { data } = languageContext;

  return (
    <header id="header">
      <img className="hero" src="/assets/photo.png" alt="" />
      <Navbar />
      <div className="container-presentation">
        <h2 className="fontTitulos hello">{data.home[0]}</h2>
        <h1 className="fontTitulos name">Francesca Pozzolo</h1>
        <h1 className="fontTexto title">{data.home[1]}</h1>
        <div className="container-button">
          <ButtonHero title={data.home[2]} />
        </div>
      </div>
    </header>
  );
};

export default Header;
