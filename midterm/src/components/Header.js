import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import iconCart from '../assets/images/shopping-cart.png'
import { useSelector, useDispatch } from 'react-redux'
import { toggoleStatusTab } from '../stores/Cart'
import SearchBar from './SearchBar'

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0)
  const carts = useSelector(store => store.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let total = 0
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total)
  }, [carts])

  const handleOpenTabCart = () => {
    dispatch(toggoleStatusTab())
  }

  const handleSearch = (term) => {
    navigate(`/search?q=${term}`)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-sm shadow-sm">
      <div className="w-[90%] mx-auto flex justify-between items-center px-6 py-4">
        {/* change Home to Logo later */}
        <Link to="/" className="text-xl font-semibold">VitaFood.</Link>

        {/* right part of header */}
        <div className="flex items-center gap-6">

        {/* search bar here */}
          <SearchBar onSubmit={handleSearch} />

          {/* cart icon */}
          <div
            className="w-10 h-10 bg-[#3D7E2D] rounded-full flex justify-center items-center relative cursor-pointer"
            onClick={handleOpenTabCart}
          >
            <img src={iconCart} alt="iconCart" className="w-6" />
            <span className="absolute top-2/3 right-2/3 bg-white text-black text-sm w-5 h-5 rounded-full flex justify-center items-center">
              {totalQuantity}
            </span>
          </div>
        </div>

      </div>
    </header>

  )
}

export default Header
