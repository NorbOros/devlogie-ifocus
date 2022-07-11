import { Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { snackBarActions } from "../../../store/slices/sncackbar-slice";

const CustomSnackBar = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.snackbar.open);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(snackBarActions.changeSanckbarState());
  };

  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="The timer is still running, are you sure you want to switch?"
      action={action}
    />
  );
};

export default CustomSnackBar;
