import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ButtonLink from "./ButtonLink";

const Project = (props) => {
  return (
    <div
      className="container-project"
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <ButtonLink icon={faGithub} />
      <ButtonLink icon={faLinkedin} />
    </div>
  );
};

export default Project;
