import { Icon } from "@iconify/react";
import { Zoom } from "@material-ui/core";
import Tooltip from "@material-ui/core/Button";

const Skill = (props) => {
  return (
    <div
      className="container-skill"
      style={{ backgroundColor: `${props.color}` }}
    >
      <Tooltip
        title={props.name}
        transitioncomponent={Zoom}
        transitionprops={{ timeout: 600 }}
      >
        <Icon icon={props.icon} className="icons" />
      </Tooltip>
    </div>
  );
};

export default Skill;
