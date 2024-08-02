import React, { useState } from "react";
import useCartStore from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const { userdata, removeFromCart, updateQuantity } = useCartStore();
  const [count, setCount] = useState(1);
  const [shipping, setShipping] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleIncrement = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const handleChange = (id, e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      updateQuantity(id, value);
    }
  };

  // Function to calculate total price
  const calculateTotalPrice = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      total += item.price * item.quantity;
    }
    return total;
  };

  // Calculate total price of all items in the cart
  const totalPrice = calculateTotalPrice(userdata);

  const handleShippingChange = (e) => {
    const selectedShipping = parseInt(e.target.value, 10);
    setShipping(selectedShipping);
  };

  const handleApplyPromo = () => {
    if (promoCode === "ammar") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const finalTotalPrice = (totalPrice + shipping) * (1 - discount);

  return (
    <div className="grid grid-cols-3 p-6 gap-6 max-w-[1440px] mx-auto">
      <div className="flex flex-col col-span-3 md:col-span-2 ">
        <div className="flex justify-between border-b-[2px] pb-5 font-bold text-lg md:text-2xl">
          <p>Shopping Cart</p>
          <p>{userdata.length} Items</p>
        </div>
        <div className="flex justify-between pr-8 text-sm md:text-md text-gray-500 mt-3">
          <span className="w-[50%]">Product Details</span>
          <span className="hidden md:block">Quantity</span>
          <span className="hidden md:block">Price</span>
          <span className="hidden md:block">Total</span>
        </div>
        <div className="my-6">
          {userdata.map((item) => (
            <>
              {/* //Show After 786px **************************** */}
              <div
                key={item.id}
                className="hidden md:flex justify-between my-9 "
              >
                <div className="flex gap-2 w-[50%]">
                  <img
                    className=" w-24 h-auto flex1"
                    src={`${item.image}`}
                    alt="image"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="text-[4vw] md:text-sm font-bold">
                      {item.title}
                    </div>
                    <div className="capitalize text-black-500 text-md">
                      {item.category}
                    </div>
                    <p
                      className="cursor-pointer text-sm text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center ">
                  <ion-icon
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className=" cursor-pointer"
                    name="remove-outline"
                  ></ion-icon>
                  <input
                    className="w-12 h-8 border text-center"
                    value={item.quantity}
                    type="number"
                    onChange={(e) => handleChange(item.id, e)}
                  />
                  <ion-icon
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className=" cursor-pointer "
                    name="add-outline"
                  ></ion-icon>
                </div>
                <div className="flex items-center font-bold">
                  $ {item.price}
                </div>
                <div className="flex items-center font-bold">
                  $ {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
              {/* //Show before 786px / For  mobile **************************** */}
              <div className="flex gap-3 md:hidden my-9">
                <img
                  className="w-[23vw]   flex1"
                  src={`${item.image}`}
                  alt="image"
                />
                <div className="flex flex-col gap-1 justify-around flex-1">
                  <div className="text-[4vw] md:text-sm font-bold">
                    {item.title}
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="text-[4vw] flex items-center font-bold">
                      $ {(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="flex gap-2 items-center ">
                      <ion-icon
                        onClick={() => handleDecrement(item.id, item.quantity)}
                        className=" cursor-pointer"
                        name="remove-outline"
                      ></ion-icon>
                      <input
                        className="w-[8vw] h-[6vw] text-[4vw] border text-center "
                        value={item.quantity}
                        type="number"
                        onChange={(e) => handleChange(item.id, e)}
                      />
                      <ion-icon
                        onClick={() => handleIncrement(item.id, item.quantity)}
                        className=" cursor-pointer "
                        name="add-outline"
                      ></ion-icon>
                    </div>
                  </div>
                  <p
                    className="cursor-pointer text-[3vw] text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div>
          <Link to="/">
            <p className="text-blue-600 flex gap-2 items-center ">
              <span className="flex  items-center">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
              Continue Shopping
            </p>
          </Link>
        </div>
      </div>
      {/* show after 786px  ********************************/}
      <div className="hidden md:block col-span-1">
        <div className="flex justify-between border-b-[2px] pb-5 font-bold text-2xl">
          <p>Order Summary</p>
        </div>
        <div className="flex flex-col justify-between border-b-[2px] pb-5 h-[300px] text-md my-3">
          <div className="flex justify-between">
            <h3>Item {userdata.length}</h3>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">Shipping</h3>
            <select
              name="shipping"
              id="shipping"
              onChange={handleShippingChange}
              className="px-2 py-1 border rounded"
            >
              <option value="0">Standard Shipping - $0</option>
              <option value="10">Express Shipping - $10</option>
              <option value="15">Fast Shipping - $15</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">Promo Code</h3>
            <input
              placeholder="Enter your code"
              className="focus:outline-none px-2 w-[50%] border rounded"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 w-[100px] rounded-sm"
            onClick={handleApplyPromo}
          >
            Apply
          </button>
        </div>
        <div className="flex flex-col gap-4 my-3">
          <div className="flex justify-between">
            <h3 className="font-bold">Total Cost</h3>
            <h3 className="font-bold">${finalTotalPrice.toFixed(2)}</h3>
          </div>
          <Link
            to="/CheckoutPage"
            className="bg-blue-700 text-white px-4 py-2 rounded-sm flex justify-center"
          >
            Checkout
          </Link>
        </div>
      </div>
      {/* Mobile div / before 786px *************************************** */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-3 md:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-2">
            <h3 className="text-md font-bold">Total Cost:</h3>
            <h3 className="text-md ">${finalTotalPrice.toFixed(2)}</h3>
          </div>
          <Link
            to="/CheckoutPage"
            className="bg-blue-500 text-white p-2  rounded text-md"
          >
            Checkout ({userdata.length})
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;