import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Rating from "../../Components/Ratings/Rating";

function ProductDetailsPage() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    // Add your logic for adding to cart here
  };
  const { id } = useParams();
  const { data, error } = useSWR(`https://fakestoreapi.com/products/${id}`);

  console.log(data);
  if (!data) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-2 gap-2 p-6">
      <div className="flex items-center justify-center">
        <img className="w-[300px]" src={`${data.image}`} alt="productImg" />
      </div>
      <div className="flex flex-col gap-2 p-6  justify-center">
        <div className="flex flex-col gap-1">
          <p className="text-xl capitalize">{data.category}</p>
          <h1 className="text-4xl">{data.title}</h1>
          <div className="flex gap-5">
            <p className="text-xl">Rating</p>
            <Rating rating={data.rating.rate} /> {data.rating.rate}
            {/* <p className="text-xl ">Rating {data.rating.rate}</p> */}
          </div>
        </div>
        <h3 className="text-2xl font-bold">$ {data.price}</h3>
        <div className="flex flex-col gap-1">
          <p className="text-xl">{data.description}</p>
          <div className="flex gap-3">
            <button
              className={`flex items-center justify-center text-white gap-2 h-8 p-2 cursor-pointer rounded-md ${
                isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-red-500"
              }`}
              onClick={handleClick}
              style={{ pointerEvents: isDisabled ? "none" : "auto" }}
            >
              Add to Cart
            </button>
            <button
              className={`flex items-center justify-center text-white gap-2 h-8 p-2 cursor-pointer bg-black rounded-md`}
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
