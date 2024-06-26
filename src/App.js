import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import AppointmentDashboard from './pages/AppointmentDashboard';
import Security from "./pages/Security"
import FeesDashboard from './pages/FeesDashboard';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import ChangePassword from './components/ChangePassword';
import EmailNotification from './components/EmailNotification';
import DeleteAccount from './components/DeleteAccount';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Location from './components/Location';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/appointment" element={<AppointmentDashboard />} />

          <Route path="/security" element={<Security/>}>
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="email-notification" element={<EmailNotification />} />
            <Route path="delete-account" element={<DeleteAccount />} />
          </Route>

          
            <Route path="/settings/personal-details" element={<PersonalDetails />} />
            <Route path="/settings/education" element={<Education />} />
            <Route path="/settings/location" element={<Location />} />
          
          <Route path="/fees" element={<FeesDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
