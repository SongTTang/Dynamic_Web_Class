import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { toggoleStatusTab } from '../stores/Cart'
import { clearCart } from "../stores/Cart";

const CartTab = () => {
  const carts = useSelector(store => store.cart.items)
  const statusTab = useSelector(store => store.cart.statusTab)
  const dispatch = useDispatch()
  const handleCloseTabCart = () => {
    dispatch(toggoleStatusTab())
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className={`fixed top-0 right-0 bg-[#FFE46B] shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500 pt-20
    ${statusTab === false ? "translate-x-full" : ""} `}>
      <h2 className="p-5 text-black text-xl font-semibold">Shopping Cart</h2>

      <div className="p-5 pt-2 flex flex-col gap-2 overflow-y-auto">

        {carts.length > 0 && (
          <button
            onClick={handleClearCart}
            className="underline text-gray-700 hover:text-red-600 cursor-pointer text-sm self-end"
          >
            Clear All
          </button>
        )}

        {carts.map((item, key) =>
          <CartItem key={key} data={item} />
        )}
      </div>


      <div className="grid grid-cols-3">
        <button className="bg-white text-black font-semibold" onClick={handleCloseTabCart}>CLOSE</button>
        <button className="col-span-2 bg-[#F67700] text-white font-semibold">CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartTab
