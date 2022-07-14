import {Stack, Divider} from "@mui/material";
import { useSelector } from "react-redux";
import Task from "./Task/Task";
import TaskForm from "./TaskForm/TaskForm";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <Stack spacing={2}>
      <h2>Tasks</h2>
      <Divider/>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <TaskForm/>
    </Stack>
  );
};

export default Tasks;
