import { courses } from "../utils/constants"
import Reuse from "./Reuse"

const SongSheet = () => {
  return (
    <div>
      <Reuse type="New Song Sheet" />
      <div className="flex gap-5 justify-center flex-wrap mt-[32px] ">
        {courses.slice(3, 6).map((course) => {
          const { id,  title, image } = course;
          return (
            <div
              key={id}
              className="md:h-[252px] md:px-[19px] bg-[#191D31] md:w-[310px] rounded-[8px] ">
              <img src={image} alt="" width={304.214} height={171.22} className="mt-[19px]"/>
              <h2 className="text-[#fff] text-[16px] font-semibold mt-[16.30px]">
                {title}
              </h2>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SongSheet