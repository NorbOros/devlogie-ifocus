import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: "t1", name: "First task", description: "some description" }],
};

const addTask = (state, action) => {
  const { id, name, description } = action.payload;

  state.tasks.push({
    id: "task_" +  id,
    name: name,
    description: description,
  });
};

const deleteTask = (state, action) => {
  const taskId = action.payload;
  console.log(taskId);
};

const changeStatus = (state, action) => {};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask,
    deleteTask,
    changeStatus,
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
