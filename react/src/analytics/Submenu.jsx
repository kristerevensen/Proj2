// SubMenu.js

import React, { useState } from 'react';

const SubMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSubMenu}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Actions
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <ul className="space-y-2 text-sm py-2">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
                Item 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
                Item 3
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
                Item 4
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubMenu;
