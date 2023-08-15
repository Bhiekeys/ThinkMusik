import background from '../assets/background.png';

const Slides = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'contain', // Adjust the background size as needed
          backgroundRepeat: 'no-repeat',
          height: '240px',
        }}
        className="grid items-center mt-[60px] w-[40vw">
        <div className="w-[330px] pl-[45px]">
          <p className="text-[#fff] text-[20px] font-semibold">
            Buy Quality Cheap Musical Instrument and get it delivered in 1-2days
          </p>
          <button
            type="button"
            className="bg-[#fff] mt-[24px] text-[#131627] text-[17.231px] font-semibold w-[168px] h-[38.76px] rounded-[43.07px]">
            coming soon
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slides;
