import { Fragment } from "react";
import Task from "../../Task/Task";
import Button from "../UI/Button/Button";

const Tasks = () => {

 const addNewTaskHandler = () => {
    console.log('Add new task handler clicked');
 };

  return (
    <Fragment>
        <div></div>
        <Task />
        <Button clickHandler={addNewTaskHandler} name='Add Task'/> 
    </Fragment>
  );
};

export default Tasks;
