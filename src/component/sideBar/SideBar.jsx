// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { TbLayoutSidebarLeftExpand, TbLayoutSidebarRightExpand  } from "react-icons/tb";

// import Logo from '../../assets/favicon.ico'

// const SideBar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleSidebar = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className={`sidebar ${expanded ? 'w-64' : 'w-16'} bg-gray-800 h-screen transition-width duration-300 ease-in-out`}>

//       <div className="sidebar-content p-4">
//         <div className="sidebar-header text-center mb-4">
//             <img src={Logo}/>
//           <h2 className="text-white">Company Name</h2>
//         </div>
//         <ul className="sidebar-menu">
//           <li className="text-white">Item 1</li>
//           <li className="text-white">Item 2</li>
//           <li className="text-white">Item 3</li>
//           <li className="text-white">Item 4</li>
//           <li className="text-white">Item 5</li>
//         </ul>
//       </div>

//       <div className="toggle-btn flex justify-center items-center h-12 text-white cursor-pointer" onClick={toggleSidebar}>
//         {expanded ? <TbLayoutSidebarRightExpand size={24}/> : <TbLayoutSidebarLeftExpand size={24}/>}
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";


import mainLogo from "../../assets/mainLogo.svg";
import Logo from "../../assets/favicon.ico";

const SideBar = () => {
  return (
    <>
      <div className="flex bg-[#020811] h-screen w-40">
        

        <ul className="border-e">
          <Link to="/">
            <img src={mainLogo} className="mt-5 px-4"/>
          </Link>
          <li className="mt-4">
            <Link
              to="/home"
              className="flex items-center gap-2 border-s-[3px] border-gray-500 bg-[#0F141D] px-4 py-3 w-40 text-gray-400"
            >
              <IoHomeOutline size={16}/>

              <span className="text-sm font-medium"> Home </span>
            </Link>
          </li>

          <li>
            <Link
              to="/transactions"
              className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400"
            >
              <GrTransaction/>

              <span className="text-sm font-medium"> Transactions </span>
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:bg-[#0F141D] hover:text-gray-400"
            >
              <FaCreditCard/>

              <span className="text-sm font-medium"> Billing </span>
            </a>
          </li>

          

          <li>
            <Link
              to="/account"
              className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400"
            >
              <MdAccountCircle size={18}/>

              <span className="text-sm font-medium"> Account </span>
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400"
            >
              <IoSettingsOutline/>

              <span className="text-sm font-medium"> Setting </span>
            </a>
          </li>


        </ul>
      </div>
    </>
  );
};

export default SideBar;
