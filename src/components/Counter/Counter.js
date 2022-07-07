import { Fragment, useRef } from "react";
import Countdown from "react-countdown";
import Button from "../UI/Button/Button";

const Counter = (props) => {
  const ref = useRef();

  const startHandler = () => {
    ref.current?.start();
  };

  const pauseHandler = () => {
    ref.current?.pause();
  };

  const stopHandler = () => {
    ref.current?.stop();
  };

  const changeIntervalHandler = (interval) => {
    console.log("change interval clicked " + interval);
  };

  return (
    <Fragment>
      <Button
        clickHandler={changeIntervalHandler}
        name="Focus Time"
        param="25"
      />
      <Button
        clickHandler={changeIntervalHandler}
        name="Short Break"
        param="5"
      />
      <Button
        clickHandler={changeIntervalHandler}
        name="Long Break"
        param="15"
      />
      <Countdown date={Date.now() + 20000} ref={ref} autoStart={false} />
      <Button clickHandler={startHandler} name="Start" />
      <Button clickHandler={pauseHandler} name="Pause" />
      <Button clickHandler={stopHandler} name="Stop" />
    </Fragment>
  );
};

export default Counter;
