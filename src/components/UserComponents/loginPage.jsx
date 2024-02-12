import { Card, Modal } from "@mui/material";
import React, { useState } from "react";
import ContainerCard from "../../Ui-Components/Cards/ContainerCard";
import backgroundImage from "../../assets/images/wepik.jpeg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = ({ open, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ContainerCard>
          <div
            className="text-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}>
            <div className="container">
              <form>
                <div
                  className="section-title"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}>
                  <h2>Login</h2>

                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Username</label>
                    <div style={{ width: "30rem", position: "relative" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Password</label>
                    <div style={{ width: "30rem", position: "relative" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "70%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ContainerCard>
      </Modal>
    </>
  );
};

export default Login;
