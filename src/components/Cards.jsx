import { cardData } from '../utils/constants';
import arrow from '../assets/arrow.png';
import request from '../assets/request.png';
import invite from '../assets/invite.png';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}>
      <div className="flex gap-[20px] justify-center flex-wrap mt-[32px]">
        {cardData.map((card) => {
          const { name, id, type, icon } = card;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
              }}
              key={id}
              className="sm:w-[312px] w-[220px] border border-[rgba(71, 119, 225, 0.30)] rounded-lg h-[166px] grid place-content-center background">
              <div className="flex justify-center"> {icon}</div>
              <h2 className="text-[#fff] text-[24px] capitalize font-semibold">
                {name}
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center items-center gap-2 cursor-pointer">
                <span className="text-[#D1D2D6] text-[14px]">{type}</span>
                <img src={arrow} alt="" width={20} height={20} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex cursor-pointer justify-center gap-[40px] mt-[60px] flex-wrap">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center bg-[#191D31] px-5 sm:px-[62.5px] h-[50px] rounded-[47.615px] gap-2">
          <img src={invite} alt="" width={24} height={24} />
          <span className="text-[#D1D2D6] whitespace-pre text-[14px]">
            invite a friend
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex cursor-pointer items-center bg-[#191D31] px-3 sm:px-[62.5px] h-[50px] rounded-[47.615px] gap-2">
          <img src={request} alt="" width={24} height={24} />
          <span className="text-[#D1D2D6] whitespace-pre text-[14px]">
            Request a feature
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Cards;
