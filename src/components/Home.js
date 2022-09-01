// **
// import  { useState } from 'react'
// import SingleProduct from './SingleProduct'
// import "./style.css"
// import { prodArray } from './data'
// // import Cart from './Cart'
// // import { Cart } from '../Context'
// // import faker from "faker";
// const Home = ({cart,setCart}) => {

    
// //  console.log(useContext(Cart))

// // const [cart, setCart] = useState([])
// const [products] = useState(prodArray)


// console.log(cart)
//   return (
//     <div className="productContainer">
//         {products.map((prod)=>
//             (
                
//         <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
//             ))
            
//             }
        
            
//     </div>
//   )
// }

// export default Home;
// **


import  { useContext, useState } from 'react'
import SingleProduct from './SingleProduct'
import "./style.css"
import  prodArray  from './data'
import { Cart } from '../Context'
// import Cart from './Cart'
// import { Cart } from '../Context'
// import faker from "faker";
const Home = () => {

  
const [products] = useState(prodArray)


// console.log(cart)
  return (
    <div className="productContainer">
        {products.map((prod)=>
            (
                
        <SingleProduct prod={prod} key={prod.id} />
            ))
            
            }
        
            
    </div>
  )
}

export default Home;








