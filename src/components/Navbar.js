/* eslint-disable no-use-before-define */
import { Link } from "react-scroll";
import { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { LanguageContext } from "../context/LanguangeContext";

const Navbar = () => {
  const languageContext = useContext(LanguageContext);
  const { data, setLanguage } = languageContext;

  //State
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);

  const changeMenu = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", changeMenu);
    if (width <= 750) {
      setToggle(true);
    } else {
      setToggle(false);
      setModal(false);
    }

    return () => {
      window.removeEventListener("resize", changeMenu);
    };
  }, [width]);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <div className="nav-container">
      {toggle ? (
        <Icon
          icon="ci:hamburger"
          style={{ color: "white" }}
          onClick={() => showModal()}
        />
      ) : (
        <nav className="fontTitulos navbar">
          {data.navbar.map((link) => (
            <Link
              key={link}
              className="link-item"
              to={link}
              smooth={true}
              spy={true}
            >
              {link}
            </Link>
          ))}
          <div className="languages">
            <h3 onClick={() => setLanguage("ES")}>ES</h3>
            <h3 onClick={() => setLanguage("EN")}>EN</h3>
          </div>
        </nav>
      )}
      {modal && (
        <div className="nav-modal">
          <Icon
            icon="ci:hamburger"
            className="icon-nav-bar"
            onClick={() => showModal()}
          />
          {data.navbar.map((link) => (
            <Link
              key={link}
              className="link-item"
              to={link}
              smooth={true}
              spy={true}
            >
              {link}
            </Link>
          ))}
          <div className="languages-modal">
            <h3 onClick={() => setLanguage("ES")}>ES</h3>
            <h3 onClick={() => setLanguage("EN")}>EN</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
