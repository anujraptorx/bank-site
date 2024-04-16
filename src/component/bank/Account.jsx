// import React, { useState } from "react";
// import SideBar from "../sideBar/SideBar";
// import users from '../core/users.json'; 

// export default function Account() {

//   const loggedInUserEmail = "anujkumaryadav.in@gmail.com";

//   const loggedInUser = users.find(user => user.email === loggedInUserEmail);

//   const handleLogout = () => {
//     window.location.href = '/login';
//   };

//   return (
//     <div className="flex bg-[#020811]">
//       <div>
//         <SideBar />
//       </div>
//       <div className="">
//       <button onClick={handleLogout} className="logout-btn text-white m-10 mb-0 bg-[#949697] p-2 px-5 rounded-lg">Logout</button>
//       <div className="m-10 w-full border border-gray-700 rounded-lg">
//         <div className="flow-root bg-[#020811] text-white border-white">
//           <dl className="divide-y divide-gray-700 text-sm">
//             <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
//               <dt className="font-medium text-gray-400">Name</dt>
//               <dd className="text-gray-400 sm:col-span-2">{loggedInUser.name}</dd>
//             </div>

//             <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
//               <dt className="font-medium text-gray-400">Account No</dt>
//               <dd className="text-gray-400 sm:col-span-2">{loggedInUser.accountNumber}</dd>
//             </div>

//             <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
//               <dt className="font-medium text-gray-400">IFSC Code</dt>
//               <dd className="text-gray-400 sm:col-span-2">{loggedInUser.ifscCode}</dd>
//             </div>

//             <div className="px-3 
//             grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
//               <dt className="font-medium text-gray-400">Email Id</dt>
//               <dd className="text-gray-400 sm:col-span-2">{loggedInUser.email}</dd>
//             </div>
//           </dl>
//         </div>
//       </div>
//       </div>
      
//     </div>
//   );
// }







import React, { useState, useEffect } from "react";
import SideBar from "../sideBar/SideBar";
import users from "../core/users.json";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({}); // Initialize as empty object
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  const navigate = useNavigate(); // Use useNavigate hook

  // Retrieve the logged-in user's email from browser storage on component mount
  useEffect(() => {
    const email = localStorage.getItem("loggedInUserEmail");
    console.log("Logged-in user email:", email); // Log the retrieved email
    setLoggedInUserEmail(email);

    if (email) {
      // Fetch user data if email is available
      const user = users.find(user => user.email === email);
      if (user) {
        setLoggedInUser(user);
      } else {
        setError("User not found"); // Handle case where user is not found in data
      }
    }

    setIsLoading(false); // Set loading state to false after data retrieval or error handling
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    navigate('/login');
  };

  return (
    <div className="flex bg-[#020811]">
      <div>
        <SideBar />
      </div>
      <div>
        <button onClick={handleLogout} className="logout-btn text-white m-10 mb-0 bg-[#949697] p-2 px-5 rounded-lg">Logout</button>

        {isLoading && (
          <div className="m-10">Loading user data...</div>
        )}
        {error && (
          <div className="m-10 text-red-500">{error}</div>
        )}
        {!isLoading && !error && (
          <div className="m-10 w-full border border-gray-700 rounded-lg">
            <div className="flow-root bg-[#020811] text-white border-white">
              <div className="divide-y divide-gray-700 text-sm">
                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">Name</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUser.name}</dd>
                </div>

                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">Account No</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUser.accountNumber}</dd>
                </div>

                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">IFSC Code</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUser.ifscCode}</dd>
                </div>

                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">Email Id</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUserEmail}</dd>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
