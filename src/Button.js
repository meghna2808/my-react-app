import './Button.css';

function Button(props) {
  const classname = ["button"];
  if(props.customClassName){
    classname.push(props.customClassName);
  }
  return (
    <button disabled={props.disabled} className={classname.join(" ")} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;
