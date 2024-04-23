"use client"
import React, { useState } from 'react';

const Button = ({ value, setCount }) => ( 
  <div className="w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold" onClick={() => setCount(prevCount => prevCount + value)}>
    {value}
  </div>
);

const CalculatorBody = () => {
  const [count, setCount] = useState("");
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-evenly bg-gray-400 w-[20%] h-[65vh]'>

        <div className='mx-auto'><input type="text" className='bg-gray-600' value={count} /></div>

        <div className='flex space-x-3 px-3'>
          <Button value="AC" setCount={setCount} />
          <Button value="DE" setCount={setCount} />
          <Button value="." setCount={setCount} />
          <Button value="/" setCount={setCount} />
        </div>

        <div className='flex space-x-3 px-3'>
          <Button value="7" setCount={setCount} />
          <Button value="8" setCount={setCount} />
          <Button value="9" setCount={setCount} />
          <Button value="." setCount={setCount} />
        </div>

        <div className='flex space-x-3 px-3'>
          <Button value="4" setCount={setCount} />
          <Button value="5" setCount={setCount} />
          <Button value="6" setCount={setCount} />
          <Button value="*" setCount={setCount} />
        </div>

        <div className='flex space-x-3 px-3'>
          <Button value="1" setCount={setCount} />
          <Button value="2" setCount={setCount} />
          <Button value="3" setCount={setCount} />
          <Button value="-" setCount={setCount} />
        </div>

        <div className='flex space-x-3 px-3'>
          <Button value="?" setCount={setCount} />
          <Button value="00" setCount={setCount} />
          <Button value="0" setCount={setCount} />
          <Button value="=" setCount={setCount} />
        </div>

      </div>
    </div>
  );
}

export default CalculatorBody;
