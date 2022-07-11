import Button from "@mui/material/Button";

const CustomButton = ({
  clickHandler,
  name,
  clickHandlerParam,
  variant,
}) => {
  return (
    <Button
      variant={variant}
      onClick={(event) => clickHandler(clickHandlerParam)}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
