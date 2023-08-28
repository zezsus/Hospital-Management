import React, { useState } from "react";
import "../style/Login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Xử lý logic đăng nhập với username và password
    if (username === "admin" && password === "123456") {
      navigate("/home");
    } else {
      // Xử lý logic khi đăng nhập thất bại
    }
  };
  return (
    <div className="login">
      <div className="container">
        <span className="header">LOGIN</span>
        <div className="content">
          <div className="username">
            <span>Username</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="pass">
            <span>Password</span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={() => handleLogin()}>Login</button>
      </div>
      <Link to="/"></Link>;
    </div>
  );
};

export default Login;
