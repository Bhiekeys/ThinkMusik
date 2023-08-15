import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ExploreCourses,
  Instructors,
  LearningPath,
  MyList,
  OuickTips,
  Overview,
  Shop,
  SongSheet,
  Errorpage
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/"
          element={
            <div className="flex">
              <Sidebar />
              <div className="w-[100vw]">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/overview" element={<Overview />} />
                  <Route path="/learningpath" element={<LearningPath />} />
                  <Route path="/explorecourses" element={<ExploreCourses />} />
                  <Route path="/quicktips" element={<OuickTips />} />
                  <Route path="/instructors" element={<Instructors />} />
                  <Route path="/songsheet" element={<SongSheet />} />
                  <Route path="/mylist" element={<MyList />} />
                  <Route path="/shop" element={<Shop />} />
                </Routes>
              </div>
            </div>
          }
        />

       
        <Route path="*" element={<Errorpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
