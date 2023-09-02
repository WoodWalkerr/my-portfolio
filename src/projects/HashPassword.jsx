import React, { useState } from "react";
import bcrypt from "bcryptjs";
import Toggle from "../themeTemp/toggle";
import { IoIosArrowBack } from "../icons/icons";
import { useNavigate } from "react-router-dom";

function HashPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const encryptedPassword = () => {
    if (password) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      setHashedPassword(hashedPassword);
    }
  };

  const resetPassword = () => {
    setPassword("");
    setHashedPassword("");
  };

  return (
    <div className="w-full text-black  dark:text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto h-screen p-5 pb-20">
        <div className=" flex justify-between items-center mb-10">
          <button
            onClick={() => navigate("/projects")}
            className="text-white px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:transition-all hover:ease-in-out hover:scale-110"
          >
            <IoIosArrowBack />
          </button>
          <span>
            <Toggle />
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="mb-10 font-bold uppercase">Hash Password</span>
          <div className="flex flex-col">
            <span>Password:</span>
            <p className="truncate" style={{ maxWidth: "214px" }}>
              {password ? `${hashedPassword}` : "No Password entered"}
            </p>
            <input
              value={password}
              onChange={handleChangePassword}
              placeholder="Password"
              className="my-4 px-4 py-2 border text-black border-gray-300 rounded-md password-input"
              style={{ maxWidth: "214px" }}
            />

            <button
              onClick={encryptedPassword}
              type={password}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style={{ maxWidth: "214px" }}
            >
              Encrypt Now
            </button>
            <button
              onClick={resetPassword}
              type={password}
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              style={{ maxWidth: "214px" }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HashPassword;
