import './Button.css';

function Button(props) {

  const click = ()=>{
    alert("hello");
  }

//   const btnColour = `${props.btnColour}` || "white";

  return (
    <button style={{color:`${props.btnColor}`}} class="button" onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;
