import React from "react";
import { Link } from "react-router-dom";

function AddNewProductCard() {
  return (
    <div>
      <Link className="">
        <div className="border border-gray-300 rounded-lg  shadow-md w-64 h-[400px] m-4 p-5 flex  items-center justify-center bg-neutral-200">
          <div className="bg-neutral-300 rounded-full  p-7 flex items-center justify-center">
            <ion-icon name="add-outline"></ion-icon>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AddNewProductCard;
