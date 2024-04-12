import React, { useState } from 'react';
import signUpIMG from '../../assets/signUpIMG.jpg'
import Logo from '../../assets/mainLogo.svg'
import favicon from '../../assets/favicon.ico'
import OBJECT from '../../assets/OBJECTS.svg'
import identity from '../../assets/identity.svg'
import { Link } from "react-router-dom";
import users from './users.json'; 


function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the entered credentials match any user in the dummy data
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      // Redirect to the dashboard if authentication is successful
      window.location.href = '/home';
    } else {
      // Display an error message or handle authentication failure
      alert("Invalid email or password");
    }
  };

  return (
    <div className='bg-[#020811]'>
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={favicon}
            alt="RaptorX.ai"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex flex-end justify-end mt-2 text-sm">
                  <Link to="/forgotpassword" className="font-semibold text-gray-400 hover:text-gray-300">
                    Forgot password?
                  </Link>
              </div>
            </div>

            <div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white">
              
                Sign in
              </button>
             
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-gray-400 hover:text-indigo-300">
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;





// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import users from './users.json'; 

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Check if the entered credentials match any user in the dummy data
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       // Redirect to the dashboard if authentication is successful
//       window.location.href = '/home';
//     } else {
//       // Display an error message or handle authentication failure
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className='bg-[#020811]'>
//       <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
//         {/* Rest of your JSX */}
//         <form className="space-y-6" onSubmit={handleLogin}>
//           {/* Email input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
//               Email address
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           {/* Password input */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
//               Password
//             </label>
//             <div className="mt-2">
//               <input
//                 id="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           {/* Login button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         {/* Signup link */}
//         <p className="mt-10 text-center text-sm text-gray-500">
//           Not a member?{' '}
//           <Link to="/signup" className="font-semibold leading-6 text-gray-400 hover:text-indigo-300">
//             Create your account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
