// **
// import "./App.css";
// import Header from "./components/Header";
// // import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./components/Home";
// // import CartPage from "./components/CartPage";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// // import { useState ,useContext} from "react";
// import CartPage from "./components/CartPage";

// function App() {
  
//   return (
    
    
//      <Router>
       
//       <nav> <Header/> </nav>
//        <Routes>
//        <Route path="/" exact
//           element={
//               <Home  />}>
//             </Route>
       

//             <Route path="/cart"
//             element={
//               <CartPage />}>
//          </Route>

//         </Routes>
         
      
//      </Router>
     
    
//     // <div>
//     //   <Home/>
//     //   {/* <Cart/> */}
//     // </div>
//   )
// }

// export default App;
// **


import "./App.css";
import Header from "./components/Header";
// import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
// import CartPage from "./components/CartPage";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import { useState ,useContext} from "react";
import CartPage from "./components/CartPage";
import { useState } from "react";
import Login from "./components/login/login";
import Register from "./components/register/register";

// import Register from "C:/Users/ADMIN/OneDrive/Desktop/loginpage/login-app/src/components/homepage/homepage";
function App() {
  
  // const [cart,setCart]=useState([])
    const [user,setLoginUser]=useState()
  return (
    
    
     <Router>
       
      <nav> <Header/> </nav>
       {/* <Routes> */}
       {/* <Route path="/" exact
          element={
              <Home  />}>
            </Route>
       

            <Route path="/cart"
            element={
              <CartPage />}>
         </Route>

         <Route path="/register" exact
          element={
              <Register />}>
            </Route>
       

            <Route path="/login"
            element={
              <Login />}>
         </Route> */}

        {/* </Routes> */}
          <Routes>


          <Route exact path="/"
            element={
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }>
          </Route>
          <Route path="/login" element= {<Login setLoginUser={setLoginUser}/>}>
          </Route>
          <Route path="/register" element= {<Register setLoginUser={setLoginUser}/>}>
          </Route>

          <Route path="/cart" element={<CartPage />}>
         </Route>

          </Routes>

         
      
     </Router>
     
    
    // <div>
    //   <Home/>
    //   {/* <Cart/> */}
    // </div>
  )
}

export default App;
