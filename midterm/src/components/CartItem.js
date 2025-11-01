import React from "react";
import { useState, useEffect } from "react";
import { products } from "../ProductList";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/Cart";

const CartItem = (props) => {
    const { productId, quantity, product } = props.data
    const [detail, setDetail] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        // the old search, only search local product
        // const findDetail = products.filter(product => product.id === productId)[0]
        // setDetail(findDetail)

        const found = products.find(p => p.id === productId);
        if (found) {
            setDetail(found);
        } else if (product) {
            setDetail(product);
        } else {
            setDetail(null);
        }
    }, [productId])

    if (!detail) return null;

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }

    return (
        <div className="flex justify-between items-center bg-white text-black p-2 border-b-2 border-gray-200 gap-5 rounded-md">
            <img src={detail.image} alt="" className="w-12 h-10 object-contain" />
            <h3 className="w-20 h-12 content-center overflow-hidden ">{detail.name}</h3>
            <p>${detail.price * quantity}</p>
            <div className="w-20 flex justify-between items-center">
                <button className="bg-[#E1E9C5] rounded-full w-6 h-6 font-semibold text-[#6FB15A]" onClick={handleMinusQuantity}>
                    <span className="relative top-[-0.5px]">-</span>
                </button>
                <span>{quantity}</span>
                <button className="bg-[#E1E9C5] rounded-full w-6 h-6 font-semibold text-[#6FB15A]" onClick={handlePlusQuantity}>
                    <span className="relative top-[-1px]">+</span>
                </button>
            </div>
        </div>
    )
}

export default CartItem