import background from '../assets/background.png';

const Slides = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
        
        }}
        className=" items-center mt-[60px] md:h-[240px] bg-center bg-no-repeat md:bg-contain bg-cover hidden sm:grid">
        <div className="md:w-[330px] w-[280px] pl-[45px] py-[50px] text-center md:text-left">
          <p className="text-[#fff] md:text-[20px] font-semibold">
            Buy Quality Cheap Musical Instrument and get it delivered in 1-2days
          </p>
          <button
            type="button"
            className="bg-[#fff] md:mt-[24px] text-[#131627] text-[13px] lg:text-[17.231px] font-semibold px-2 lg:px-0 lg:w-[168px] lg:h-[38.76px] rounded-[43.07px]">
            coming soon
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slides;
