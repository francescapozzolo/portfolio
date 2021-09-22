import { Icon } from "@iconify/react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <div className="container-arrow">
        <Link to="header" smooth={true} spy={true}>
          <Icon icon="bi:arrow-down-circle" className="arrow" vFlip={true} />
        </Link>
      </div>
    </>
  );
};

export default Home;
