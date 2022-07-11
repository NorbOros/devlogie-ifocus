import { Avatar, Container, Divider, Stack } from "@mui/material";
import { Fragment } from "react";
import CustomButton from "../UI/CustomButton/CustomButton";
import Button from "../UI/CustomButton/CustomButton";

const Header = () => {
  const reportClickHandler = () => {
    console.log("report button clicked");
  };

  const settingsClickHandler = () => {
    console.log("report button clicked");
  };

  return (
    <Container maxWidth="md" >
      <Stack direction="row" spacing={2}>
        <h1>IFocus</h1>
        <CustomButton
          clickHandler={reportClickHandler}
          name="Report"
          clickHandlerParam="1500000"
          variant="text"
        />
        <CustomButton
          clickHandler={settingsClickHandler}
          name="Settings"
          clickHandlerParam="1500000"
          variant="text"
        />
      </Stack>
    </Container>
  );
};

export default Header;
