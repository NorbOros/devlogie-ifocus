import { Fragment } from "react";
import Button from "../UI/Button/Button";

const Header = () => {
  const reportClickHandler = () => {
    console.log("report button clicked");
  };

  const settingsClickHandler = () => {
    console.log("report button clicked");
  };
  return (
    <Fragment>
      <h1>IFocus</h1>
      {/* <Button clickHandler={reportClickHandler} name="Report" />
      <Button clickHandler={settingsClickHandler} name="Settings" /> */}
    </Fragment>
  );
};

export default Header;
