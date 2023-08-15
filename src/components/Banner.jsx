import emoji from '../assets/emoji.png';
import Cards from './Cards';
import { motion } from 'framer-motion';

const Banner = () => {
  
  return (
    <motion.div
     
      className="text-center lg:text-start">
      <div className="flex items-center justify-center lg:justify-start  pt-[50px] gap-2">
        <motion.img
         
          src={emoji}
          alt=""
          width="32"
          height="32"
          className="hidden sm:block"
        />
        <motion.h2
         
          className="text-[24px] text-[#fff] font-semibold">
          Welcome, Samuel!
        </motion.h2>
      </div>
      <motion.p
       
        className="text-[16px] text-[#D1D2D6]">
        Take your first steps towards building successful learning habits.
      </motion.p>
      <Cards />
    </motion.div>
  );
};
export default Banner;
