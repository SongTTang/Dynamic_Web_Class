import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/shopping-cart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, changeQuantity } from "../stores/Cart";

const ProductCard = (props) => {
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const { id, name, price, image, description, slug } = props.data;

  // find if this product is already in cart
  const cartItem = carts.find(item => item.productId === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart({
      product: { id, name, price, image, description, slug },
      quantity: 1
    }));
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(changeQuantity({
        productId: id,
        quantity: quantity - 1
      }));
    } else {
      dispatch(changeQuantity({
        productId: id,
        quantity: 0
      }));
    }
  };


  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: id,
      quantity: quantity + 1
    }));
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm h-full flex flex-col">
      <Link to={slug} className="flex justify-center items-center h-32">
        <img src={image} alt={name} className="h-full object-contain" />
      </Link>

      <div className="grid grid-cols-2 gap-1">
        <h3 className="text-xl py-3 font-medium h-10 overflow-hidden">{name}</h3>
        <p className="flex justify-end items-center text-l">
          $<span className="text-xl font-medium">{price}</span>
        </p>
        <p className="col-span-2 mb-4 h-14 overflow-hidden text-sm">{description}</p>
        {quantity === 0 ? (
          <button
            className="col-span-2 bg-[#94C884] p-2 rounded-md text-sm hover:bg-[#F67700] text-white font-semibold flex gap-2 justify-center items-center"
            onClick={handleAddToCart}
          >
            <img src={iconCart} alt="" className="w-5 h-5" />
            Add To Cart
          </button>
        ) : (
          <div className="col-span-2 flex gap-2 justify-center items-center">
            <button
              className="bg-[#94C884] hover:bg-[#6FB15A] h-8 w-8 font-bold text-xl text-white rounded-full flex justify-center items-center"
              onClick={handleMinusQuantity}
            >
              <span className="relative top-[-0.5px]">-</span>
            </button>
            <span className="h-full w-10 font-semibold text-xl rounded-xl flex justify-center items-center">
              {quantity}
            </span>
            <button
              className="bg-[#94C884] hover:bg-[#6FB15A] h-8 w-8 font-bold text-xl text-white rounded-full flex justify-center items-center"
              onClick={handlePlusQuantity}
            >
              <span className="relative top-[-1px]">+</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
