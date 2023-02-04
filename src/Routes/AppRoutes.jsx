import React from 'react';
import Login from "../Components/LoginPages/Login";
import Signup from "../Components/LoginPages/Signup";
import ForgotPassword from "../Components/LoginPages/ForgotPassword";
import AddPayment from "../Components/LoginPages/AddPayment";
import VerifyCode from "../Components/LoginPages/VerifyCode";
import SetPassword from "../Components/LoginPages/SetPassword";
import { Routes, Route } from "react-router-dom";
import FlightSearch from "../Components/FightSearch/FlightSearch";
import Profile from '../Components/Profile/Profile';

function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FlightSearch/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="password/forgot" element={<ForgotPassword/>}/>
      <Route path="password/set" element={<SetPassword/>}/>
      <Route path="user/verify" element={<VerifyCode/>}/>
      <Route path="user/payment/add" element={<AddPayment/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="*" element={<h1>Error</h1>}/>
    </Routes>
    </>
  )
}

export default AppRoutes