import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonLink = (props) => {
  return (
    <div className="button-link">
      <FontAwesomeIcon
        icon={props.icon}
        style={{
          backgroundColor: " var(--tostado)",
          color: "white",
          fontSize: "1.5em",
        }}
      />
    </div>
  );
};

export default ButtonLink;
