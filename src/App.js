import { Routes, Route } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Shared/Login/Login';
import Signup from './Pages/Shared/Login/Signup';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Shared/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Users from './Pages/Dashboard/Users';
import Payment from './Pages/Dashboard/Payment';
import About from './Pages/About/About';
import PasswordReset from './Pages/Shared/Login/PasswordReset';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth><Appointment /></RequireAuth>
        } />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyAppointments />}></Route>
          <Route path='addDoctor' element={<AddDoctor />}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path='manageDoctor' element={<ManageDoctors />}></Route>
          <Route path='users' element={<Users />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/passwordReset" element={<PasswordReset/>} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
