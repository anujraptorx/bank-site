import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignupPage from './component/core/SignupPage';
import LoginPage from './component/core/LoginPage';
import NotFound from './component/NotFound';
import ForgotPassword from './component/core/ForgotPassword';
import Transaction from './pages/Transaction';
import Account from './component/bank/Account';
import AddMoney from './component/bank/saving/AddMoney';
import SendMoney from './component/bank/saving/SendMoney';
import Dashboard from './component/bank/Dashboard';
import PaymentSuccess from './component/bank/saving/PaymentSuccess';

function App() {

  const [balance, setBalance] = useState(10000);

  const handleAddMoney = (amount) => {
    setBalance(balance + amount);
  };

  const handleSendMoney = (amount) => {
    if(balance <= amount) {
      alert("Insufficient balance");
      return;
    }else{
      const updatedBalance = balance - amount;
      setBalance(updatedBalance);
      // setBalance(balance - amount);
    }
    
  };
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" Component={SignupPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/forgotpassword" Component={ForgotPassword} />

        
        <Route path="/transactions" Component={Transaction} /> 
        <Route path="/home" element={<Dashboard balance={balance} />} />
        <Route path="/addmoney" element={<AddMoney handleAddMoney={handleAddMoney} />} />
        <Route path="/success" Component={PaymentSuccess} />
        <Route path="/account" element={<Account/>} />
        <Route path="/sendmoney" element={<SendMoney handleSendMoney={handleSendMoney}/>} /> 
        

        <Route Component={NotFound} />
      </Routes>
    </Router>
    </>
  );
}


export default App