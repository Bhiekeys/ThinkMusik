import bass from '../assets/bass.png';
import CustomDropdown from './CustomDropdown';
import notification from '../assets/notification.png';
import search from '../assets/search.png';
import candidate from '../assets/candidate.png';
import {RiArrowDropDownLine} from "react-icons/ri"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[71px] bg-[#191D31] md:px-10 w-full ">
      <div className="hidden md:flex items-center">
        <img src={bass} />
        <CustomDropdown />
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="flex items-center w-[249px] h-[40px] gap-1 pl-[18px] rounded-[5px] bg-[#131627] text-[#D1D2D6]">
          <img src={search} className="w-[20px] h-[20px] mt-1 " />
          <input
            type="text"
            placeholder="search"
            className="bg-[#131627] pr-[22px] py-[7px]  outline-none placeholder:text-[#D1D2D6] placeholder:text-[14px]"
          />
        </div>
        <div className="hidden md:flex items-center gap-[15px]">
          <img src={notification} className="cursor-pointer" />
          <div className="flex items-center cursor-pointer">
            <img src={candidate} alt="" />
            <RiArrowDropDownLine className="text-[#D1D2D6] text-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
