import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Itemlist from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());

    };

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='font-bold text-2xl text-gray-700 m-auto'>order Summary</h1>
      <div className='m-2'>
        {cartItems.length>0 && (<button className='px-3 py-2 m-4 rounded-xl bg-orange-600 text-white font-bold transition-transform transform hover:scale-105 active:scale-95 duration-200 ease-in-out ' 
        onClick={()=>handleClearCart()}
        >Clear Cart</button>)}
      </div>
      {cartItems.length ===0 && (<h3 className='font-semibold text-orange-600 '> 🍕 Add Items to Fetch the Flavour 🍔 </h3>)}
      <div className='w-6/12 text-center m-auto'>
      <Itemlist items={cartItems} />
      </div>
     


    </div>
  );
}

export default Cart;
