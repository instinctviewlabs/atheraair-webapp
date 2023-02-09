import React, {lazy, Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import FlightSearch from "../Components/FightSearch/FlightSearch";
import FlightDetailPage from '../Components/FlightDetailPage/FlightDetailPage';
import FlightListingsLayout from '../Components/FlightListing/FlightListingsLayout';
import HomeLayout from '../Components/HomeLayout/HomeLayout';
import Profile from '../Components/Profile/Profile';
import AccountTab from '../Components/Profile/ProfileFragments/AccountTab';
import MasterPassengerList from '../Components/Profile/ProfileFragments/MasterPassengerList';
import PaymentMethods from '../Components/Profile/ProfileFragments/PaymentMethods';
import TicketBookingsList from '../Components/Profile/ProfileFragments/TicketBookingsList';
import { FullScreenLoader } from '../Lib/MuiThemes/MuiComponents';
import ProtectedRoutes from './ProtectedRoutes';
const Login = lazy(() => import("../Components/LoginPages/Login"));
const Signup = lazy(() => import("../Components/LoginPages/Signup"));
const ForgotPassword = lazy(() => import("../Components/LoginPages/ForgotPassword"));
const AddPayment = lazy(() => import("../Components/LoginPages/AddPayment"));
const VerifyCode = lazy(() => import("../Components/LoginPages/VerifyCode"));
const SetPassword = lazy(() => import("../Components/LoginPages/SetPassword"));
// import Login from "../Components/LoginPages/Login";
// import Signup from "../Components/LoginPages/Signup";
// import ForgotPassword from "../Components/LoginPages/ForgotPassword";
// import AddPayment from "../Components/LoginPages/AddPayment";
// import VerifyCode from "../Components/LoginPages/VerifyCode";
// import SetPassword from "../Components/LoginPages/SetPassword";


function AppRoutes() {
  return (
    <>    
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<FlightSearch/>}/>
        <Route path="/flightslist" element={<FlightListingsLayout/>}/>
        <Route path="/flightdetails" element={<FlightDetailPage/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="profile" element={<Profile/>}>
            <Route index element={<AccountTab/>}></Route>
            <Route path="account" element={<AccountTab/>}></Route>
            <Route path="master_passenger_list" element={<MasterPassengerList/>}></Route>
            <Route path="ticket_bookings_history" element={<TicketBookingsList/>}></Route>
            <Route path="payment_method" element={<PaymentMethods/>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<h1>Error</h1>}/>
      </Route>
      <Route path="login" element={<Suspense fallback={<FullScreenLoader/>}><Login/></Suspense>}/>
      <Route path="signup" element={<Suspense fallback={<FullScreenLoader/>}><Signup/></Suspense>}/>
      <Route path="password/forgot" element={<Suspense fallback={<FullScreenLoader/>}><ForgotPassword/></Suspense>}/>
      <Route path="password/set" element={<Suspense fallback={<FullScreenLoader/>}><SetPassword/></Suspense>}/>
      <Route path="user/verify" element={<Suspense fallback={<FullScreenLoader/>}><VerifyCode/></Suspense>}/>
      <Route path="user/payment/add" element={<Suspense fallback={<FullScreenLoader/>}><AddPayment/></Suspense>}/>
    </Routes>
    </>
  )
}

export default AppRoutes