import "@/App.css";

import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";

import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Task1 />} />
        <Route index path="/task2" element={<Task2 />} />
        <Route index path="/task3" element={<Task3 />} />
        <Route index path="/task4" element={<Task4 />} />
      </Routes>
    </>
  );
}

export default App;
