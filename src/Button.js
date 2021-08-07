import './Button.css';

function Button(props) {

  return (
    <button disabled={props.disabled} class="button" onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;
