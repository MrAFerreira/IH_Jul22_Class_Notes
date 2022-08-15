function Button(props) {
  return (
    <a href={props.link}>
      <button> {props.text}</button>
    </a>
  );
}

//For components it's always the same syntax
// export default - name of the component
export default Button;
