import React from "react";
import successGif from "../../../assets/success.png";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col bg-[#020811] h-screen items-center place-content-center">
      
      <img src={successGif} alt="Success GIF" width={300} className=""/>
      <h1 className="text-lg text-gray-300 text-center">Payment Successful!</h1>
      <p className="text-sm text-gray-700 text-center">Back to <Link to="/home" className="underline">Home</Link></p>
    </div>
  );
}
