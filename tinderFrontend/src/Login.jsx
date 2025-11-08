import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(addUser(res.data));
    } catch (err) {
      console.log("Error in login:" + err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-4">
              <div className="label">
                <span className="label-text">Email: {emailId}</span>
              </div>
              <input
                type="email"
                placeholder="Email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password: {password}</span>
              </div>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
