import React, { useState } from 'react';
import { bgheader, bgside, bgtext } from '../utility/color';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // Data for submenu items
  const racingSportsItems = ['Horse Racing', 'Greyhound Racing'];
  const othersItems = ['Live Casino', 'Slot Game', 'Fantasy Game'];
  const allSportsItems = [
    'Live Casino', 'Slot Game', 'Fantasy Game',
    'Live Casino', 'Slot Game', 'Fantasy Game',
    'Live Casino', 'Slot Game', 'Fantasy Game',
    'Live Casino', 'Slot Game', 'Fantasy Game',
    'Live Casino', 'Slot Game', 'Fantasy Game'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="" style={{ backgroundColor: bgheader, color: bgtext }}>
      <div>
        <p 
          className='px-4 flex justify-between items-center' 
          onClick={toggleDropdown} 
          style={{ cursor: 'pointer' }}
        >
          Racing Sports
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </p>
        {isOpen && (
          <div style={{ color: bgheader, backgroundColor: bgside }}>
            {racingSportsItems.map((item, index) => (
              <p key={index} className='border-gray-300 border-b px-6'>{item}</p>
            ))}
          </div>
        )}
      </div>

      <div>
        <p 
          className='px-4 flex justify-between items-center' 
          onClick={toggleDropdown1} 
          style={{ cursor: 'pointer' }}
        >
          Others
          {isOpen1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </p>
        {isOpen1 && (
          <div style={{ color: bgheader, backgroundColor: bgside }}>
            {othersItems.map((item, index) => (
              <p key={index} className='border-gray-300 border-b px-6'>{item}</p>
            ))}
          </div>
        )}
      </div>

      <div>
        <p 
          className='px-4 flex justify-between items-center' 
          onClick={toggleDropdown2} 
          style={{ cursor: 'pointer' }}
        >
          All Sports
          {isOpen2 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </p>
        {isOpen2 && (
          <div style={{ color: bgheader, backgroundColor: bgside }}>
            {allSportsItems.map((item, index) => (
              <p key={index} className='border-gray-300 border-b px-6'>{item}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
