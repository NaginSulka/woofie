import React from "react";

const Navbar = (props) => {
  return (
    <div className= {`bg-gray-800 text-white flex items-center justify-between p-5 border-4 mb-36`}>
      <div className="text-2xl ml-10">
        <span>{props.heading}</span>
      </div>
      <ul className="flex space-x-16 mr-16">
        <li className=" text-xl">Home</li>
        <li className=" text-xl">Features</li>
        <li className=" text-xl">Services</li>
        <li className=" text-xl">Our work</li>
      </ul> 
    </div>
  );
};

export default Navbar;