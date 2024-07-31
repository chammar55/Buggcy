import React from "react";
import useCartStore from "../../Hooks/useCart";

function CartPage() {
  const { userdata } = useCartStore();
  // console.log(userdata);
  return (
    <div className="grid grid-cols-3 ">
      <div className="flex flex-col col-span-2">
        <div className="flex justify-between">
          <p>Shopping Cart</p>
          <p>{userdata.length}</p>
        </div>
        <div></div>
      </div>
      <div className="col-span-1">col 2</div>
    </div>
  );
}

export default CartPage;
