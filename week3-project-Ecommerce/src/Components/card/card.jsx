import React, { useState } from "react";
import "./card.css";
import Rating from "../Ratings/Rating";
import { Link } from "react-router-dom";
import useCartStore from "../../Hooks/useCart";

const Card = ({ data }) => {
  const { updateUserData } = useCartStore();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    updateUserData(data);
    // console.log(data);
    setIsDisabled(true);
    // Add your logic for adding to cart here
  };
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md w-64 h-[400px] m-4 p-5 flex flex-col items-center justify-start relative">
      <Link to={`/ProductDetailsPage/${data.id}`}>
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
              {data.title.slice(0, 40) + "..."}
            </h3>

            <div className="flex">
              <div className="flex gap-5">
                <Rating rating={data.rating.rate} /> {data.rating.rate}
              </div>
            </div>
          </div>
        </Link>
        <div
          className={`flex items-center justify-center text-white gap-2 h-8 p-2 cursor-pointer ${
            isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-red-500"
          }`}
          onClick={() => handleClick()}
          style={{ pointerEvents: isDisabled ? "none" : "auto" }}
        >
          <ion-icon name="add-outline"></ion-icon>
          <p>Add to Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
