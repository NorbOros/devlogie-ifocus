const Button = (props) => {
  const { clickHandler, name, param } = props;

  return <button onClick={(event) => clickHandler(param)}>{name}</button>;
};

export default Button;
