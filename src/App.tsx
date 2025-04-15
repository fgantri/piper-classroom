import { Routes, Route } from "react-router-dom";
import Classroom from "./pages/Classroom";
import Class from "./pages/Class";
import NewClass from "./pages/NewClass";

function App() {
  return (
    <Routes>
      <Route path="/classroom" element={<Classroom />} />
      <Route path="/classroom/:id" element={<Class />} />
      <Route path="/classroom/new" element={<NewClass />} />
    </Routes>
  );
}

export default App;
