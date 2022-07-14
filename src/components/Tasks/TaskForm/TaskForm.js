import {
  AccordionActions,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  FormControl,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { taskActions } from "../../../store/slices/task-slice";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

const TaskForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = async (value) => {
    dispatch(
      taskActions.addTask({
        id: Date.now().toString(),
        name: value.name,
        description: value.description,
      })
    );
  };

  const cancel = (form) => {
    form.reset();
  };

  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <Form
        onSubmit={onSubmitForm}
        initialValues={{ name: "", description: "" }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Accordion>
              <AccordionSummary
                aria-controls={"task-form-content"}
                id={"task-form-header"}
              >
                <Typography>Add Task</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Field name="name">
                  {(props) => (
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      margin="normal"
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                    />
                  )}
                </Field>
                <Field name="description">
                  {(props) => (
                    <TextField
                      id="outlined-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      margin="normal"
                      multiline
                      rows={4}
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                    />
                  )}
                </Field>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  type="button"
                  variant="contained"
                  onClick={(event) => cancel(form)}
                  disabled={submitting || pristine}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                  Save
                </Button>
              </AccordionActions>
            </Accordion>
          </form>
        )}
      />
    </div>
  );
};

export default TaskForm;
