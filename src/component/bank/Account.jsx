import React, { useState } from "react";
import SideBar from "../sideBar/SideBar";
import users from '../core/users.json'; 

export default function Account() {
  // Assume the logged-in user's email is passed as a prop from the authentication process
  const loggedInUserEmail = "anujkumaryadav.in@gmail.com";

  // Find the logged-in user's details from the users array
  const loggedInUser = users.find(user => user.email === loggedInUserEmail);

  return (
    <div className="flex bg-[#020811]">
      <div>
        <SideBar />
      </div>
      <div className="m-10 w-full border border-gray-700 rounded-lg">
        <div className="flow-root bg-[#020811] text-white border-white">
          <dl className="divide-y divide-gray-700 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Name</dt>
              <dd className="text-gray-400 sm:col-span-2">{loggedInUser.name}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Account No</dt>
              <dd className="text-gray-400 sm:col-span-2">{loggedInUser.accountNumber}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">IFSC Code</dt>
              <dd className="text-gray-400 sm:col-span-2">{loggedInUser.ifscCode}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}