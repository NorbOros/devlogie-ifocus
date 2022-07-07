import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Fragment>
      <Header />
      <Counter />
      <Tasks />
    </Fragment>
  );
}

export default App;
