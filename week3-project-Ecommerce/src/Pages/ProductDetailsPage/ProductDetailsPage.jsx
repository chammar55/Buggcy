import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import Rating from "../../Components/Ratings/Rating";
import ProductList from "../../Components/ProductList/ProductList";
import useCartStore from "../../Hooks/useCart";
import { TailSpin } from "react-loader-spinner";

function ProductDetailsPage() {
  const { userdata, addToCart } = useCartStore();
  const [isDisabled, setIsDisabled] = useState(false);
  const { id } = useParams();
  const { data, error } = useSWR(`https://fakestoreapi.com/products/${id}`);

  const handleClick = () => {
    addToCart(data);
    setIsDisabled(true);
    // Add your logic for adding to cart here
  };

  useEffect(() => {
    if (data) {
      // Check if the item is already in the cart
      const isItemInCart = userdata.some((item) => item.id === data.id);
      setIsDisabled(isItemInCart);
    }
  }, [userdata, data]);

  const RecommCategory = data?.category;
  console.log(RecommCategory);
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col mx-auto justify-center gap-8 max-w-[1440px]  ">
      <div className="grid md:grid-cols-2 gap-2 p-6 grid-cols-1">
        <div className="flex items-center justify-center">
          <img className="w-[300px]" src={`${data.image}`} alt="productImg" />
        </div>
        <div className="flex flex-col gap-2 p-6  justify-center">
          <div className="flex flex-col gap-1">
            <p className="text-lg sm:text-xl capitalize">{data.category}</p>
            <h1 className="text-3xl sm:text-4xl">{data.title}</h1>
            <div className="flex gap-5">
              <p className="text-xl">Rating</p>
              <Rating rating={data.rating.rate} /> {data.rating.rate}
              {/* <p className="text-xl ">Rating {data.rating.rate}</p> */}
            </div>
          </div>
          <h3 className="text-2xl font-bold">$ {data.price}</h3>
          <div className="flex flex-col gap-2">
            <p className="text-lg sm:text-xl">{data.description}</p>
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
              <Link
                to="/CartPage"
                className={`flex items-center justify-center text-white gap-2 h-8 p-2 cursor-pointer bg-black rounded-md`}
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Recommended Category********************************** */}

      <ProductList
        heading={`${RecommCategory}`}
        category={`${RecommCategory}`}
      />
    </div>
  );
}

export default ProductDetailsPage;
