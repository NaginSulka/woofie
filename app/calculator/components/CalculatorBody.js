"use client"
import React, { useState } from 'react';

const CalculatorBody = () => {
  const [value, setValue] = useState("");

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-evenly bg-gray-400 w-[20%] h-[65vh] rounded-xl'>

        <div className='mx-3 py-2'>
          <input
            type="text"
            className='bg-gray-600 w-[100%] h-[60px] rounded-xl'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className='flex space-x-3 px-3'>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={()=> setValue("")} >AC</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={()=> setValue(value.slice(0,-1))}>DE</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + ".")}>.</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "/")}>/</button>
        </div>

        <div className='flex space-x-3 px-3'>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "7")}>7</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "8")}>8</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "9")}>9</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + ".")}>.</button>
        </div>

        <div className='flex space-x-3 px-3'>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "4")}>4</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "5")}>5</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "6")}>6</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "*")}>*</button>
        </div>

        <div className='flex space-x-3 px-3'>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "1")}>1</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "2")}>2</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "3")}>3</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "-")}>-</button>
        </div>

        <div className='flex space-x-3 px-3'>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' >?</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "00")}>00</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={() => setValue(value + "0")}>0</button>
          <button className='w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold rounded-md' onClick={()=>setValue(eval(value))}>=</button>
        </div>

      </div>
    </div>
  );
}

export default CalculatorBody;
