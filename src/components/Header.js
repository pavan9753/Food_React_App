// **
// import React from 'react'
// // import { CartState } from '../Context';
// import "./style.css"; 
// import { Link } from 'react-router-dom';
// // import Login from 'c:/users/admin/onedrive/desktop/loginpage/login-app/src/components/login/login';
// const Header = () => {
//   return (
//     <div>
//         {/* hello */}
//         <h1 className='header'>
//             React Context Api Demonstration
//         </h1>
//         <ul className='nav'>
//             <li >
//                 <Link to="/">Home Page</Link>
//             </li>
            
//             <li >
//                 <Link to="/cart">Cart </Link>
//             </li>
//         </ul>
//     </div>
//   )
// }

// export default Header;
// **

import React from 'react'
import { Cart } from '../Context';
import "./style.css"; 
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import Register from "C:\Users\ADMIN\OneDrive\Desktop\loginpage\login-app\src\components\homepage\homepage";
// import Login from 'c:/users/admin/onedrive/desktop/loginpage/login-app/src/components/login/login';
const Header = () => {
    const {cart} = useContext(Cart)
  return (
    <div>
        {/* hello */}
        <h1 className='header'>
            React Context Api Demonstration
        </h1>
        <ul className='nav'>
            <li >
                <Link to="/">Home Page</Link>
            </li>
            
            <li >
                <Link to="/cart">cart({cart.length}) </Link>
            </li>
            <li >
                <Link to="/register">Register</Link>
            </li>
            
            <li >
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;