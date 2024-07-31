import React from "react";
import useCartStore from "../Hooks/useCart";
import { Link } from "react-router-dom";

function Navbar() {
  const { userdata } = useCartStore();

  return (
    <div className="flex justify-between align p-2 px-6 sm:px-5 ">
      <h1>
        <Link className="text-lg sm:text-3xl font-bold" to="/">
          Ecomm
        </Link>
      </h1>
      <h1>
        <a className="text-3xl sm:text-5xl" href="">
          <ion-icon className="relative" name="cart-outline"></ion-icon>
          <p className="text-[12px] bg-red-500 rounded-full w-[10px] h-[10px] p-2 flex justify-center items-center text-white absolute  top-7 right-5 sm:top-10 sm:right-5">
            {userdata.length}
          </p>
        </a>
      </h1>
    </div>
  );
}

export default Navbar;
