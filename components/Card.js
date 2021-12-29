import moment from "moment";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  return (
    <div>
      {props.img ? <img className="img" src={props.img}></img> : null}
      <h3>{props.title}</h3>
      <p>{props.text}</p>

      {props.link ? (
        <a href={props.link.url}>
          <FontAwesomeIcon className="icon" icon={faLink} style={{ marginRight: "5px" }} size="1x" />
          {props.link.text}
        </a>
      ) : null}
      {props.date ? (
        <p>Date: {moment(props.date).format("yyyy-mm-dd")}</p>
      ) : null}
      {props.status ? <p>Status: {props.status}</p> : null}
    </div>
  );
}

export default Card;
