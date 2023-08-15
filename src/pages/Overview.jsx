import Banner from '../components/Banner';
import Courses from '../components/Courses';
import Learning from '../components/Learning';
import MyList from '../components/MyList';
import Slides from '../components/Slides';

const Overview = () => {
  return (
    <div className="bg-[#131627]   px-2 sm:pl-[38px] webkit sm:pr-[59px] flex justify-center h-[87.3vh] lg:h-[88vh] overflow-x-hidden overflow-y-auto">
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
