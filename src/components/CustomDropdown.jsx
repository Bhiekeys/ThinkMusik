import  { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const SimpleDropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsDropdownOpen(false);
//   };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center px-4 py-2 text-[#21.467px] text-[#fff] rounded-md focus:outline-none ">
        {selectedOption || 'Bass'}
        <HiChevronDown className="ml-2 h-5 w-5" />
      </button>
      {/* {isDropdownOpen && (
        <div className=" ">
          <button
            onClick={() => handleOptionClick('Bass')}
            className="block w-full px-4 py-2 text-sm ">
            Bass
          </button>
          <button
            onClick={() => handleOptionClick('Piano')}
            className="block w-full px-4 py-2 text-sm text-gray-700 ">
            Piano
          </button>
        </div>
      )} */}
    </div>
  );
};

export default SimpleDropdown;
