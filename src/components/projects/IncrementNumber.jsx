import React, { useState } from "react";
import Toggle from "../../themeTemp/toggle";
import { IoIosArrowBack } from "../../icons/icons";
import { useNavigate } from "react-router-dom";

function IncrementNumber() {
  const navigate = useNavigate();
  const [initialNumber, setInitialNumber] = useState(0);
  const [previousRecords, setPreviousRecords] = useState([]);

  const handleDecrementValue = () => {
    setInitialNumber((prevState) => prevState - 1);
  };

  const handleIncrementValue = () => {
    setInitialNumber((prevState) => prevState + 1);
  };

  const handleResetValue = () => {
    setInitialNumber(0);
  };

  const handleSaveValue = () => {
    const records = [...previousRecords];
    records.push(initialNumber);
    setPreviousRecords(records);
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
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center py-6 text-black dark:text-white">
            Numerical Counter
          </h1>
     
        <div className="text-6xl font-bold text-white-300">{initialNumber}</div>
        <div className="flex-row mt-8">
          <button
            className="w-fit px-6 py-3 ml-4 my-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded transition transform duration-300 ease-in-out"
            onClick={handleDecrementValue}
          >
            <span className="text-xl">-</span>
          </button>
          <button
            className="w-fit px-6 py-3 ml-4 my-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded transition transform duration-300 ease-in-out"
            onClick={handleIncrementValue}
          >
            <span className="text-xl">+</span>
          </button>

          <button
            className="w-fit px-6 py-3 ml-4 my-2 bg-gray-700 hover:bg-gray-500 text-white font-bold rounded transition duration-300 ease-in-out"
            onClick={handleResetValue}
          >
            Reset
          </button>
          <button
            className="w-fit px-6 py-3 ml-4 my-2 bg-gray-700 hover:bg-gray-500 text-white font-bold rounded transition duration-300 ease-in-out"
            onClick={handleSaveValue}
          >
            Save
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold">Previous Record Count:</h2>
          <div className="text-lg flex flex-row">
            {previousRecords.map((record, index) => (
              <div key={index}>
                {index > 0 && <span className="mx-2">-</span>}
                <span>{record}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default IncrementNumber;
