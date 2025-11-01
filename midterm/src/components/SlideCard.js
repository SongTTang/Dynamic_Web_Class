import React from "react";
import Slider from "react-slick";
import { products } from "../ProductList";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, changeQuantity } from "../stores/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]
  };

  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="w-5/6 m-auto mt-20">
      <Slider {...settings}>
        {products.map((product) => {

          const { id, name, price, image, description } = product;

          const cartItem = carts.find(item => item.productId === id);
          const quantity = cartItem ? cartItem.quantity : 0;

          const handleMinusQuantity = () => {
            dispatch(changeQuantity({
              productId: id,
              quantity: Math.max(quantity - 1, 0)
            }));
          };

          const handlePlusQuantity = () => {
            if (quantity === 0) {
              dispatch(addToCart({
                product: { id, name, price, image, description },
                quantity: 1
              }));
            } else {
              dispatch(changeQuantity({
                productId: id,
                quantity: quantity + 1
              }));
            }
          };

          return (
            <div key={id} className="">
              <div className="gap-2 bg-white rounded-xl">
                <div className="grid grid-cols-2">
                  <img
                    src={image}
                    alt={name}
                    className="col-span-2 object-contain w-full h-full p-2 items-center aspect-[1/1] overflow-hidden"
                  />

                  <div className="col-start-2 pb-2 pr-3 -mt-5 -ml-5">
                    <div className="flex justify-end items-center gap-2">
                      {quantity === 0 ? (
                        <button
                          className="bg-[#94C884] hover:bg-[#6FB15A] h-6 w-6 font-bold text-xl text-white rounded-full flex justify-center items-center"
                          onClick={handlePlusQuantity}
                        >
                          <span className="relative top-[-1px]">+</span>
                        </button>
                      ) : (
                        <>
                          <button
                            className="bg-[#94C884] hover:bg-[#6FB15A] h-6 w-6 font-bold text-xl text-white rounded-full flex justify-center items-center"
                            onClick={handleMinusQuantity}
                          >
                            <span className="relative top-[-0.5px]">-</span>
                          </button>
                          <span className="w-4 font-semibold text-base flex justify-center items-center">
                            {quantity}
                          </span>
                          <button
                            className="bg-[#94C884] hover:bg-[#6FB15A] h-6 w-6 font-bold text-xl text-white rounded-full flex justify-center items-center"
                            onClick={handlePlusQuantity}
                          >
                            <span className="relative top-[-1px]">+</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center bg-[#F8FAEC] rounded-b-xl p-2">
                  <p className="col-span-2 pl-2 text-base font-semibold truncate">
                    {name}
                  </p>
                  <p className="col-start-3 text-sm justify-self-end">
                    ${" "}
                    <span className="text-base font-semibold">{price}</span>
                  </p>
                  <div className="col-span-3 pl-2 text-sm max-h-5 overflow-hidden">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideCard;
