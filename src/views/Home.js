import React from "react";
import "../style/Home.scss";
import icons from "../util/icons";
import { Link, useNavigate } from "react-router-dom";

const { MdOutlineLogout } = icons;

const Home = () => {
  const navigate = useNavigate();

  const handleCLickDoctor = () => {
    navigate("/doctor");
  };

  const handleCLickPatient = () => {
    navigate("/patient");
  };

  const handleCLickDiagnostic = () => {
    navigate("/diagnostic");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <span>HOSPITAL MANAGER</span>
          <button className="btn-logout me-1" onClick={() => handleLogout()}>
            <MdOutlineLogout size={24} />
          </button>
        </div>

        <div className="button">
          <button onClick={() => handleCLickDoctor()}>Doctor</button>
          <button onClick={() => handleCLickPatient()}>Patient</button>
          <button onClick={() => handleCLickDiagnostic()}>Diagnostic</button>
        </div>
      </div>
      <Link to="/home"></Link>
    </div>
  );
};

export default Home;
