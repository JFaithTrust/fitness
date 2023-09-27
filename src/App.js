import "./App.css";
import { Home, ExerciseDetail } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Box } from "@mui/material";

function App() {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercisedetail/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
