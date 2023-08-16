import logo from '../assets/logo.png';
import { BiMenu } from 'react-icons/bi';
import { navs } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="">
      <div
        className={`${
          isOpen ? 'w-[273px]' : 'w-16'
        } bg-[#191D31] duration-500 h-screen `}>
        <div
          className={` ${isOpen && 'flex'} ml-[14px] items-center gap-[16px] ${
            isOpen && 'ml-[32px] mr-[41px]'
          } pt-[18px] pb-[41px]`}>
          <BiMenu
            className="hidden sm:block text-[#D1D2D6] text-[32px] cursor-pointer"
            onClick={toggle}
          />
          {isOpen && <img src={logo} alt="logo" />}
        </div>

        {navs.map((nav) => {
          const { id, path, name, icon } = nav;
          return (
            <NavLink
              to={path}
              key={id}
              className={`${
                nav?.border && 'border-t border-[#373b4e]'
              } group flex items-center text-[14px]  text-[#D1D2D6] capitalize gap-[18px] ${
                isOpen && 'pl-[34px] pr-[90px]'
              } pl-[20px] py-[16px] transition-all hoverbg  hover:text-[#3375D9] hover:border-l-[4px]  hover:border-l-[#3375D9]`}>
              <div>{icon}</div>
             
              <h2
                style={{
                  transitionDelay: `${id + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !isOpen && 'opacity-0 translate-x-28 overflow-hidden '
                }`}>
                {name}
              </h2>
              <h2
                className={`${
                  isOpen && 'hidden'
                }  absolute left-48 bg-white font-semibold whitespace-pre text-[#373b4e] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                {name}
              </h2>
            </NavLink>
          );
        })}

        <main>{children}</main>
      </div>
    </div>
  );
};
export default Sidebar;
