import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  const navigate = useNavigate();

  const { success, loading, authLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form align-form-center">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 w-5 bg-success">
        <div className="form-group m-2 w-10 h-5">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          {loading ? "Loading..." : "Login"}
        </button>
        <div>
          Don't have an account?
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
