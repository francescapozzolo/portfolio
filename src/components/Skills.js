import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguangeContext";
import Skill from "./Skill";

const Skills = () => {
  const languageContext = useContext(LanguageContext);
  const { data } = languageContext;

  const [width, setWidth] = useState(window.innerWidth);
  const [skillsCopy, setSkillsCopy] = useState([]);

  const changeMenu = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", changeMenu);
    if (width <= 600) {
      setSkillsCopy([...skills[0], ...skills[1], ...skills[2], ...skills[3]]);
    } else {
      setSkillsCopy([]);
    }
    console.log(skillsCopy);
    return () => {
      window.removeEventListener("resize", changeMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const skills = [
    [
      { name: "Javascript", icon: "mdi:language-javascript", color: "#F2D680" },
      { name: "HTML5", icon: "mdi:language-html5", color: "#99BF9C" },
      { name: "CSS3", icon: "mdi:language-css3", color: "#D95E32" },
      { name: "Github", icon: "mdi:github", color: "#F2B366" },
      { name: "Git", icon: "mdi:git", color: "#F2D680" },
      { name: "Figma", icon: "akar-icons:figma-fill", color: "#99BF9C" },
    ],
    [
      { name: "Mongo", icon: "cib:mongodb", color: "#F2D680" },
      { name: "Bootstrap", icon: "bi:bootstrap", color: "#99BF9C" },
      { name: "Express", icon: "simple-icons:express", color: "#D95E32" },
      { name: "Node", icon: "fa-brands:node", color: "#F2B366" },
      { name: "Ruby", icon: "teenyicons:ruby-outline", color: "#F2D680" },
    ],
    [
      {
        name: "Microsoft Excell",
        icon: "file-icons:microsoft-excel",
        color: "#F2D680",
      },
      { name: "React", icon: "akar-icons:react-fill", color: "#99BF9C" },
      { name: "React native", icon: "akar-icons:react-fill", color: "#D95E32" },
      { name: "Firebase", icon: "bx:bxl-firebase", color: "#F2B366" },
    ],
    [
      {
        name: "Microsoft Word",
        icon: "file-icons:microsoft-word",
        color: "#F2D680",
      },
      { name: "Python", icon: "akar-icons:python-fill", color: "#99BF9C" },
      { name: "Redux", icon: "akar-icons:redux-fill", color: "#D95E32" },
    ],
  ];

  return (
    <div id={data.knowledge} className="main-container-skills">
      {skillsCopy.length !== 0 ? (
        <div className="container-skills">
          {skillsCopy.map((skill) => {
            return (
              <Skill
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                color={skill.color}
              />
            );
          })}
        </div>
      ) : (
        skills.map((listSkills) => (
          <div key={listSkills[0].name} className="container-skills">
            {listSkills.map((skill) => {
              return (
                <Skill
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  color={skill.color}
                />
              );
            })}
          </div>
        ))
      )}
      <h2 className="fontTitulos knowledge-title">{data.knowledge}</h2>
    </div>
  );
};

export default Skills;
