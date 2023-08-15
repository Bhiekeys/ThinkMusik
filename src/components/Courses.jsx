import { courses } from '../utils/constants';
import plus from '../assets/plus.png';
import play from '../assets/play.png';
import Reuse from './Reuse';
import SongSheet from './SongSheet';

const Courses = () => {
  return (
    <>
      <div className="mt-[60px]">
        <Reuse type="New Courses" />
        <div className="flex gap-5 justify-center flex-wrap  mt-[32px] ">
          {courses.slice(0, 3).map((course) => {
            const { id, type, title, image } = course;
            return (
              <div
                key={id}
                className="md:h-[305px]  md:px-[19px] bg-[#191D31] md:w-[310px] rounded-[8px] grid place-content-center">
                <img src={image} alt="" width={304.214} height={171.22} />
                <h2 className="text-[#fff] text-[18px] font-semibold mt-[16.36px]">
                  {title}
                </h2>
                <div className="flex justify-between items-center mt-[16.4px] mb-[20px]">
                  <p className="text-[14px] text-[#D1D2D6]">{type}</p>
                  <div className="flex items-center gap-[31.24px] ">
                    <img src={plus} alt="" width={29.708} />
                    <img src={play} alt="" width={28} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[60px]">
        <SongSheet />
      </div>
    </>
  );
};
export default Courses;
