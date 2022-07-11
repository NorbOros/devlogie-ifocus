import {
  AccordionActions,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  FormControl,
} from "@mui/material";
import CustomButton from "../../UI/CustomButton/CustomButton";
import { taskActions } from "../../../store/slices/task-slice";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const dispatch = useDispatch();

  const saveTaskHandler = (event) => {
    event.preventDefault();

    dispatch(
      taskActions.addTask({
        id: Date.now().toString(),
        name: "Some task name",
        description: "Some detailed task description.",
      })
    );
  };

  const cancel = () => {};

  return (
    <Accordion>
      <AccordionSummary
        aria-controls={"task-form-content"}
        id={"task-form-header"}
      >
        <Typography>Add Task</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="normal"
          z
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          margin="normal"
          multiline
          rows={4}
        />
      </AccordionDetails>
      <AccordionActions>
        <CustomButton clickHandler={cancel} name="Cancel" variant="outlined" />
        <CustomButton
          clickHandler={saveTaskHandler}
          name="Save"
          variant="outlined"
        />
      </AccordionActions>
    </Accordion>
  );
};

export default TaskForm;
