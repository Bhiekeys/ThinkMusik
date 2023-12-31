import Banner from '../components/Banner';
import Courses from '../components/Courses';
import Learning from '../components/Learning';
import MyList from '../components/MyList';
import Slides from '../components/Slides';

const Overview = () => {
  return (
    <div className="bg-[#131627]  px-2 sm:pl-[38px]  sm:pr-[59px] flex justify-center h-[90vh]  overflow-x-hidden overflow-y-auto webkit">
      <div>
        <Banner />
        <Slides />
        <Learning />
        <Courses />
        <MyList />
      </div>
    </div>
  );
};
export default Overview;
//h-[89.3vh] lg:h-[89vh] overflow-x-hidden overflow-y-auto webkit