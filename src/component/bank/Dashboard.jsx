import React, { useState } from "react";
import Balance from "./Balance";
import AddMoney from "./saving/AddMoney";

export default function Dashboard() {
  const [balance, setBalance] = useState(50000);

  const handleAddMoney = (amount) => {
    setBalance(balance + amount);
  };

  return (
    <div>
      <Balance balance={balance} />
      <AddMoney handleAddMoney={handleAddMoney} />
    </div>
  );
}
