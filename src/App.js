import './App.css';
import Header from './Pages/Header'
import AllCourses from './Pages/AllCourses'
import Courses from './Pages/Course'
import LiveClass from './Pages/LiveClass'
import OurProducts from './Pages/OurProduct'
import Practices from './Pages/Practices'
import Resources from './Pages/Resource'
import Career from './Pages/Career';
import FSD from './Pages/FSD';
import CyberSecurity from './Pages/CyberSecurity';
import DataScience from './Pages/DataScience';
import Orginal from './Pages/Orginal';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' Component={AllCourses} />
        <Route path='/FSD' Component={FSD} />
        <Route path='/DataScience' Component={DataScience} />
        <Route path='/CyberSecurity' Component={CyberSecurity} />
        <Route path='/Career' Component={Career} />
        <Route path="/Courses" Component={Courses} />
        <Route path="/LiveClass" Component={LiveClass} />
        <Route path="/OurProducts" Component={OurProducts} />
        <Route path="/Practices" Component={Practices} />
        <Route path="/Resources" Component={Resources} />
        <Route path="/All/:domain" Component={Orginal} />
      </Routes>
    </div>
  );
}

export default App;
