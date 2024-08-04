import React, { useEffect, useState } from "react";
import "./card.css";
import Rating from "../Ratings/Rating";
import { Link } from "react-router-dom";
import useCartStore from "../../Hooks/useCart";

const Card = ({ data }) => {
  const { userdata, addToCart } = useCartStore();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Check if the item is already in the cart
    const isItemInCart = userdata.some((item) => item.id === data.id);
    setIsDisabled(isItemInCart);
  }, [userdata, data.id]);

  const handleClick = () => {
    addToCart(data);
    // console.log(data);
    setIsDisabled(true);
    // Add your logic for adding to cart here
  };
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md w-64 h-[400px] m-4 p-5 flex flex-col items-center justify-start relative">
      <Link
        className="flex items-center h-[50%]"
        to={`/ProductDetailsPage/${data.id}`}
      >
        {/* img div */}
        <div className="flex items-center justify-center h-[100%]">
          <img
            src={`${data.image}`}
            alt="image"
            className="w-full max-h-[200px] object-contain transition-transform duration-200 hover:scale-110"
          />
        </div>
      </Link>

      <div className="absolute bottom-0 p-4 flex flex-col gap-2">
        <Link to={`/ProductDetailsPage/${data.id}`}>
          <div className="flex flex-col ">
            <p className="text-[18px] font-bold">{`$ ${data.price}`}</p>
            <h3 className="text-[1.2em] mb-[8px]">
              {data.title.slice(0, 30) + "..."}
            </h3>

            <div className="flex">
              <div className="flex gap-5">
                <Rating rating={data.rating.rate} /> {data.rating.rate}
              </div>
            </div>
          </div>
        </Link>
        <Link to={isDisabled ? "/CartPage" : ""}>
          <div
            className={`flex items-center justify-center text-white gap-2 h-8 p-2 cursor-pointer ${
              isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-red-500"
            }`}
            onClick={() => handleClick()}
            style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          >
            {isDisabled ? "" : <ion-icon name="add-outline"></ion-icon>}
            <p>{isDisabled ? "Go to Cart" : "Add to Cart"}</p>
            {isDisabled ? (
              <ion-icon name="arrow-forward-outline"></ion-icon>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
