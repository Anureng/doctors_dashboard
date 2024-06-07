import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import AppointmentDashboard from "./pages/AppointemtDashboard"
import Security from "./pages/Security"
import SettingsDashboard from './pages/SettingsdDashboard';
import FeesDasboard from "./pages/FeesDashboard"
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<MainDashboard/>}></Route>
      <Route path='/appointment' element={<AppointmentDashboard/>}></Route>
      <Route path='/security' element={<Security/>}></Route>
      <Route path='/settings' element={<SettingsDashboard/>}></Route>
      <Route path='/fees' element={<FeesDasboard/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
