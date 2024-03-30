"use client";
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
      <div className="flex justify-center space-x-[5px]">
        <input
          placeholder="Enter your text"
          className="text-black h-10 pl-4 w-[30vw] rounded-xl"
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          value={inputText}
        />
        <button
          className="bg-gray-800 w-[40px] rounded-full text-3xl justify-center text-center"
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
