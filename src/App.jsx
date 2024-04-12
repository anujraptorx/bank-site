import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignupPage from './component/core/SignupPage';
import LoginPage from './component/core/LoginPage';
import NotFound from './component/NotFound';
import ForgotPassword from './component/core/ForgotPassword';
import Dashboard from './pages/Home';
import Transaction from './pages/Transaction';
import Account from './component/bank/Account';
import AddMoney from './component/bank/saving/AddMoney';
import SendMoney from './component/bank/saving/SendMoney';
import Home from './pages/Home';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" Component={SignupPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/forgotpassword" Component={ForgotPassword} />

        <Route path="/home" Component={Home} />
        <Route path="/transactions" Component={Transaction} />
        <Route path="/account" Component={Account} />
        <Route path="/addmoney" Component={AddMoney} />
        <Route path="/sendmoney" Component={SendMoney} />

        <Route Component={NotFound} />
      </Routes>
    </Router>
    </>
  );
}


export default App