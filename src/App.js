
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import AddService from './Pages/Home/Dashboard/AddService/AddService';
import AddDoctor from './Pages/Home/Dashboard/AddDoctor/AddDoctor';


function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/addService" element={<AddService/>}>
          </Route>
          <Route path="/addDoctor" element={<AddDoctor/>}>
          </Route>
          <Route path="/serviceDetails" element={<ServiceDetails />}>
          </Route>
          <Route path="/doctorDetails" element={<DoctorDetails />}>
          </Route>
        </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
