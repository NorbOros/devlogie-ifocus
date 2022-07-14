import Button from "@mui/material/Button";

const CustomButton = ({
  clickHandler,
  name,
  clickHandlerParam,
  variant,
  type,
}) => {
  return (
    <Button
      variant={variant}
      onClick={(event) => clickHandler(clickHandlerParam)}
      type={type}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
