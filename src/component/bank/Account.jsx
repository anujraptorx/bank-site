import React from "react";
import Transaction from "../../pages/Transaction";
import SideBar from "../sideBar/SideBar";

export default function Account() {
  return (
    <div className="flex bg-[#020811]">
      <div>
        <SideBar />
      </div>
      <div className="m-10 w-full border border-gray-700 rounded-lg">
        <div className="flow-root bg-[#020811] text-white border-white">
          <dl className=" divide-y divide-gray-700 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Title</dt>
              <dd className="text-gray-400 sm:col-span-2">Mr</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Name</dt>
              <dd className="text-gray-400 sm:col-span-2">Ramesh Jha</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Occupation</dt>
              <dd className="text-gray-400 sm:col-span-2">Software Engineer</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Account No</dt>
              <dd className="text-gray-400 sm:col-span-2">456729157627</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Branch Address</dt>
              <dd className="text-gray-400 sm:col-span-2">
                Ganesh Nagar Borgaon, Wardha
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">IFSC Code</dt>
              <dd className="text-gray-400 sm:col-span-2">IPOS10001</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Occupation</dt>
              <dd className="text-gray-400 sm:col-span-2">Software Engineer</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">IFSC Code</dt>
              <dd className="text-gray-400 sm:col-span-2">IPOS10001</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Occupation</dt>
              <dd className="text-gray-400 sm:col-span-2">Software Engineer</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">IFSC Code</dt>
              <dd className="text-gray-400 sm:col-span-2">IPOS10001</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">Occupation</dt>
              <dd className="text-gray-400 sm:col-span-2">Software Engineer</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-400">IFSC Code</dt>
              <dd className="text-gray-400 sm:col-span-2">IPOS10001</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
