// **
// import { useEffect,useState,useContext } from 'react';
// import Context from '../Context';
// import {Cart} from "../Context"
// import SingleProduct from "./SingleProduct";

// const CartPage = ({cart,setCart}) => {

//     // const [total, setTotal] = useState(Cart)
    
//     // const {cart,setCart} = useContext(Cart);
//     const [total, setTotal] = useState()
//     useEffect(()=>
//     {
//         setTotal(cart.reduce((acc,cur)=>acc+Number(cur.price),0))
//     },[cart])
//   return (
//     <div>
//         <span style={{fontSize:30}}> My Cart</span>
//         <br/>
//         <span style={{fontSize:30}}> Total Rs. {total}</span>
//         <div className='productContainer'>
//             {
//                 cart.map((prod)=>(
//                     <SingleProduct prod={prod}   cart={cart} setCart={setCart} key={prod.id}/>
//                 ))
                
//                 // <h1>Hello cart</h1>
//                 }
        
//         </div>
//     </div>
//   )
//             }


// export default CartPage;
// **



import { useEffect,useState,useContext } from 'react';
import Context from '../Context';
import {Cart} from "../Context"
import SingleProduct from "./SingleProduct";

const CartPage = () => {

    // const [total, setTotal] = useState(Cart)
    
    const {cart} = useContext(Cart);
    const [total, setTotal] = useState()
    useEffect(()=>
    {
        setTotal(cart.reduce((acc,cur)=>acc+Number(cur.price),0))
    },[cart])
  return (
    <div>
        <span style={{fontSize:30}}> My Cart({cart.length})</span>
        <br/>
        <span style={{fontSize:30}}> Total Rs. {total}</span>
        <div className='productContainer'>
            {
                cart.map((prod)=>(
                    <SingleProduct prod={prod}   key={prod.id}/>
                ))
                
                // <h1>Hello cart</h1>
                }
        
        </div>
    </div>
  )
            }


export default CartPage;