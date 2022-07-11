import { useRef, useState } from "react";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/slices/counter-slice";
import CustomButton from "../UI/CustomButton/CustomButton";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import CustomSnackBar from "../UI/Snackbar/SnackBar";

const Counter = (props) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const counterInterval = useSelector((state) => state.counter.interval);

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
    dispatch(counterActions.changeInterval(interval));
  };

  return (
    <Card>
      <CardContent>
        <CustomButton
          clickHandler={changeIntervalHandler}
          name="Focus"
          clickHandlerParam="1500000"
          variant="text"
        />
        <CustomButton
          clickHandler={changeIntervalHandler}
          name="Short Break"
          clickHandlerParam="900000"
          variant="text"
        />
        <CustomButton
          clickHandler={changeIntervalHandler}
          name="Long Break"
          clickHandlerParam="300000"
          variant="text"
        />
        <Typography variant="h2" component="div">
          <Countdown
            date={Date.now() + counterInterval}
            ref={ref}
            autoStart={false}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton
          clickHandler={startHandler}
          name="Start"
          variant="contained"
        />
        <CustomButton
          clickHandler={pauseHandler}
          name="Pause"
          variant="contained"
        />
        <CustomButton
          clickHandler={stopHandler}
          name="Stop"
          variant="contained"
        />
      </CardActions>
      <CustomSnackBar />
    </Card>
  );
};

export default Counter;
