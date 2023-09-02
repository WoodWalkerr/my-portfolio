import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorGenerator from "./components/projects/ColorGenerator";
import IncrementNumber from "./components/projects/IncrementNumber";
import Dashboard from "./common/Dashboard";
import Projects from "./components/Projects";
import HashPassword from "./components/projects/HashPassword";
import SimpleTypeTracker from "./components/projects/SimpleTypeTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
        <Route path="/number-incrementor" element={<IncrementNumber />} />
        <Route path="/hash-password" element={<HashPassword />} />
        <Route path="/type-tracker" element={<SimpleTypeTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
