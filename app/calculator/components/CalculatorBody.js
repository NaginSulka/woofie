import React from 'react';

const Button = ({ value }) => (
  <div className="w-1/4 h-16 flex justify-center items-center bg-gray-800 text-lg font-semibold">
    {value}
  </div>
);

const CalculatorBody = () => {
  return (
  <div className='flex justify-center'>
    <div className='flex flex-col justify-evenly bg-gray-400 w-[20%] h-[65vh]'>

      <div className='mx-auto'><input type="text" className='bg-gray-600' /></div>

      <div className='flex space-x-3 px-3'>
        <Button value="AC" />
        <Button value="DE" />
        <Button value="." />
        <Button value="/" />
      </div>

      <div className='flex space-x-3 px-3'>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="." />
      </div>  

      <div className='flex space-x-3 px-3'>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="*" />
      </div>  

      <div className='flex space-x-3 px-3'>
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="-" />
      </div>  

      <div className='flex space-x-3 px-3'>

        <Button value="?" />
        <Button value="00" />
        <Button value="0" />
        <Button value="=" />
      </div>  

    </div>
    </div>
  );
}

export default CalculatorBody;