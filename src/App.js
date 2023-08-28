import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Diagnostic from "./views/Diagnostic";
import Doctor from "./views/Doctor";
import Patient from "./views/Patient";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
      </Routes>
    </div>
  );
}

export default App;
