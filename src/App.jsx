import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
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
import users4 from "./component/core/users.json"

function App() {
  const [balance, setBalance] = useState(10000);
  const [users, setUsers] = useState(users4);

  const handleAddMoney = (amount) => {
    setBalance(balance + amount);
  };

  const handleSendMoney = (amount, recipientAccountNumber, recipientIFSC) => {
    console.log("Sending amount:", amount);
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }

    console.log("Sending money...");
    setBalance((prevBalance) => prevBalance - amount);

    const recipientIndex = users.findIndex(
      (user) =>
        user.accountNumber === recipientAccountNumber && user.ifscCode === recipientIFSC
    );

    if (recipientIndex !== -1) {
      const updatedRecipient = {
        ...users[recipientIndex],
        balance: users[recipientIndex].balance + amount,
      };

      const updatedUsersArray = [...users];
      updatedUsersArray[recipientIndex] = updatedRecipient;
      setUsers(updatedUsersArray);
      alert("Money sent successfully.");
      console.log("Money sent successfully.");
    } else {
      alert("Recipient not found. Please check the account number and IFSC code.");
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/transactions" element={<Transaction />} /> 
          <Route path="/home" element={<Dashboard balance={balance} />} />
          <Route path="/addmoney" element={<AddMoney handleAddMoney={handleAddMoney} />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/account" element={<Account />} />
          <Route path="/sendmoney" element={<SendMoney handleSendMoney={handleSendMoney} />} /> 

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;