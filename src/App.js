import { Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Stack spacing={2} alignItems={"center"}>
      <Header />
      {/* <Counter /> */}
      <Tasks />
    </Stack>
  );
}

export default App;
