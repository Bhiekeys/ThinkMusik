import emoji from "../assets/emoji.png"
import Cards from "./Cards";
const Banner = () => {
  return (
    <div className="text-center lg:text-start">
      <div className="flex items-center justify-center lg:justify-start  pt-[50px] gap-2">
        <img src={emoji} alt="" width="32" height="32" className="hidden sm:block" />
        <h2 className="text-[24px] text-[#fff] font-semibold">
          Welcome, Samuel!
        </h2>
      </div>
      <p className="text-[16px] text-[#D1D2D6]">
        Take your first steps towards building successful learning habits.
      </p>
      <Cards/>
    </div>
  );
}
export default Banner