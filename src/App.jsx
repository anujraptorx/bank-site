import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
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
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseInt(storedBalance) : 10000;
  });
  const [usersData, setUsersData] = useState(users);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  const handleAddMoney = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const handleSendMoney = (amount, recipientAccountNumber, recipientIFSC) => {
    console.log("Sending money...");
    console.log("Amount:", amount);
    console.log("Recipient Account Number:", recipientAccountNumber);
    console.log("Recipient IFSC:", recipientIFSC);

    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }

    setBalance((prevBalance) => prevBalance - amount);

    // Find the recipient user
    const recipient = usersData.find(
      (user) =>
        user.accountNumber === recipientAccountNumber &&
        user.ifscCode === recipientIFSC
    );
    console.log("Recipient:", recipient);

    if (recipient) {
      // Update recipient's balance
      const updatedRecipient = {
        ...recipient,
        balance: recipient.balance + amount,
      };
      const updatedUsers = usersData.map((user) =>
        user.id === updatedRecipient.id ? updatedRecipient : user
      );
      setUsersData(updatedUsers);
      console.log("Recipient updated:", updatedRecipient);
      console.log("Updated users data:", updatedUsers);
    } else {
      alert(
        "Recipient not found. Please check the account number and IFSC code."
      );
    }

    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
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
          element={<SendMoney handleSendMoney={handleSendMoney} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
