import { useState } from "react";
import Toggle from "../../themeTemp/toggle";
import { IoIosArrowBack } from "../../icons/icons";
import { useNavigate } from "react-router-dom";

function ColorGenerator() {
  const navigate = useNavigate();
  const [colors, setColors] = useState([
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ]);

  function generateRandomColor() {
    const hexChars = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function updateColors() {
    const newColors = [];
    for (let i = 0; i < 3; i++) {
      newColors.push(generateRandomColor());
    }
    setColors(newColors);
  }

  return (
    <div className="w-full text-black  dark:text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto p-5 pb-20">
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
        <div className="h-screen">
          <h1 className="text-4xl font-bold text-center py-6 text-black dark:text-white">
            Random Color Generator
          </h1>
          <div className="flex justify-center align-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white w-[30%] font-bold py-2 px-4 rounded mb-6"
              onClick={updateColors}
            >
              Generate Colors
            </button>
          </div>
          <div className="flex justify-center">
            {colors.map((color) => (
              <div
                key={color}
                className="w-32 h-64 m-2 rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-2xl"
                style={{ backgroundColor: color }}
              >
                <p className="text-center text-white text-sm pt-10">{color}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorGenerator;
