import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  json,
} from "react-router-dom";
import "./App.css";
import SignupPage from "./component/core/SignupPage";
import LoginPage from "./component/core/LoginPage";
import NotFound from "./component/NotFound";
import ForgotPassword from "./component/core/ForgotPassword";
import Transaction from "./pages/Transaction";
import Account from "./component/bank/Account";
import AddMoney from "./component/bank/saving/AddMoney";
import SendMoney from "./component/bank/saving/SendMoney";
import Dashboard from "./component/bank/Dashboard";
import PaymentSuccess from "./component/bank/saving/PaymentSuccess";
import users from "./component/core/users.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(10000);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  const [usersData, setUsersData] = useState(users);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersData));
  }, [usersData]);

  const handleAddMoney = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const handleSendMoney = (amount, recipientAccountNumber, recipientIFSC) => {
    // Check if the sender has sufficient balance
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }
  
    // Find the sender's index in the usersData array
    const senderIndex = usersData.findIndex(
      (user) => user.email === loggedInUserEmail
    );
  
    // Find the recipient's index in the usersData array
    const recipientIndex = usersData.findIndex(
      (user) =>
        user.accountNumber === recipientAccountNumber &&
        user.ifscCode === recipientIFSC
    );
  
    if (recipientIndex === -1) {
      alert(
        "Recipient not found. Please check the account number and IFSC code."
      );
      return;
    }
  
    // Update sender's balance
    const updatedSenderBalance = balance - amount;
    setBalance(updatedSenderBalance);
  
    // Update recipient's balance
    const updatedUsersData = [...usersData];
    const recipientBalanceBeforeUpdate = parseFloat(
      updatedUsersData[recipientIndex].balance
    );
    console.log("Recipient Balance Before Update:", recipientBalanceBeforeUpdate);
    updatedUsersData[recipientIndex].balance = recipientBalanceBeforeUpdate + amount;
  
    const recipientBalanceAfterUpdate = parseFloat(
      updatedUsersData[recipientIndex].balance
    );
    console.log("Recipient Balance After Update:", recipientBalanceAfterUpdate);
  
    setUsersData(updatedUsersData);
  };
  


  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/transactions" element={<Transaction />} />
        <Route path="/home" element={<Dashboard balance={balance} />} />
        <Route
          path="/addmoney"
          element={<AddMoney handleAddMoney={handleAddMoney} />}
        />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/sendmoney"
          element={
            <SendMoney
              loggedInUserEmail={loggedInUserEmail}
              handleSendMoney={handleSendMoney}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
