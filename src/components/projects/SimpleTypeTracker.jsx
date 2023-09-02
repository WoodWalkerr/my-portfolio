import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Toggle from "../../themeTemp/toggle";
import { IoIosArrowBack } from "../../icons/icons";
import { useNavigate } from "react-router-dom";

function SimpleTypeTracker() {
  const navigate = useNavigate();

  const [inputContent, setInputContent] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleTextChange = (event) => {
    if (event.target.value.length > 0) {
      setInputContent(event.target.value);
      setIsTyping(true);
      setButtonEnabled(true);
    } else {
      setInputContent("");
      setIsTyping(false);
      setButtonEnabled(false);
    }
  };

  const handleSendButton = () => {
    setIsTyping(false);
    setButtonEnabled(false);
    setInputContent("");
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 1000);
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
        <div className="flex flex-col items-center mt-5">
          <p className="text-3xl text-black dark:text-white font-bold mb-5">Type Tracker</p>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="mx-6 p-12">
                <form>
                  <p className="mb-4 font-bold text-black dark:text-white">User Messaging</p>
                  <div className="relative mb-4">
                    <textarea
                      type="text"
                      className="peer text-black block min-h-[auto] w-full rounded"
                      onChange={handleTextChange}
                      value={inputContent}
                      placeholder="Write a message"
                    />
                    {isTyping && (
                      <p className="mt-2 italic text-black  dark:text-white">User is typing ...</p>
                    )}
                  </div>
                </form>
                {buttonEnabled && (
                  <button
                    onClick={handleSendButton}
                    className="bg-blue-800 text-white font-bold py-2 px-4 rounded flex"
                  >
                    Send
                    <PaperAirplaneIcon className="h-6 w-6 text-white-500 ml-2" />
                  </button>
                )}
                {successMessage && (
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Success! </strong>
                    <span className="block sm:inline">
                      Message has been sent!
                    </span>
                    <span className="absolute top-0 bottom-0 right-0 py-3">
                      <title>Close</title>
                    </span>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleTypeTracker;
