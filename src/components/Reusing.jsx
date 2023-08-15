const Reusing = ({ type, head, paragraph }) => {
  return (
    <div className="mt-[60px]">
      <h2 className="md:text-[24px] mb-[32px] font-semibold text-[#fff]">
        {type}
      </h2>
      <div className="text-center py-[86px] border-dashed border-[1px] rounded-[10px] border-[#FFFFFF1A]">
        <h4 className="md:text-[20px] text-[#fff]">{head}</h4>
        <p className="text-[#D1D2D6] text-[16px]">{paragraph}</p>
      </div>
    </div>
  );
};
export default Reusing