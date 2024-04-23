import React from "react";

const Navbar = (props) => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg border-4 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">{props.heading}</span>
          </div>
          <div className="flex">
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <a className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white" href="/calculator">Calculator</a>
                <a className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white" href="/todolist">TodoList</a>
                <a className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white" href="/work">Our Work</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
