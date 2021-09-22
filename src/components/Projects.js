import { useContext } from "react";
import { LanguageContext } from "../context/LanguangeContext";
import Project from "./Project";

const Projects = () => {
  const languageContext = useContext(LanguageContext);
  const { data } = languageContext;

  const projects = [
    { name: "Minddeco", url: "./assets/minddeco.png" },
    { name: "Petshop", url: "./assets/petshop.png" },
    { name: "Criptomonedas", url: "./assets/criptomonedas.png" },
    { name: "Mytinerary", url: "./assets/mytinerary.png" },
    { name: "Reviewers", url: "./assets/reviewers.png" },
    { name: "Minddeco2", url: "./assets/minddeco.png" },
  ];
  return (
    <div id={data.projects[5]} className="container-projects">
      <div className="projects">
        {projects.map((project) => {
          return <Project key={project.name} url={project.url} />;
        })}
      </div>
      <div className="container-projects-title">
        <h2 className="fontTitulos projects-title">{data.projects[5]}</h2>
      </div>
    </div>
  );
};

export default Projects;
