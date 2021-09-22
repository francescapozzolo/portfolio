import { Link } from "react-router-dom";

const ButtonHero = ({ title }) => {
  return (
    <Link to="Pdf" target="_blank" className="fontTexto button">
      {title}
    </Link>
  );
};

export default ButtonHero;
