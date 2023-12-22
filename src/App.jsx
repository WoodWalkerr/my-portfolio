import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./common/Dashboard";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
