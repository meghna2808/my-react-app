import './Button.css';

function Button(props) {

  return (
    <button disabled={props.disabled} className="button" onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;
