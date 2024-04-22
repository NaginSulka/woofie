import React, { useState } from "react";

const Input = (props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-5 mt-32">
        <input
          placeholder="Enter your text"
          className="text-black h-10 pl-4 md:w-[30vw] md:max-w-xs rounded-xl mb-2 md:mb-0"
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          value={inputText}
        />
        <button
          className="bg-gray-800 w-10 h-10 rounded-full text-3xl justify-center text-center"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Input;
