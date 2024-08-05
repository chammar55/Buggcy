import React from "react";

function Cart({ item }) {
  return (
    <div>
      <div key={item.id}>
        {/* large screen cart ************************************* */}
        <div className=" md:flex justify-between   my-9">
          <div className="flex items-center gap-2  md:w-[50%]">
            <img
              className="w-[23vw]  md:w-24 h-[90%] object-contain "
              src={`${item.image}`}
              alt="image"
            />
            <div className="flex flex-1 flex-col gap-3">
              <div className="text-[4vw] md:text-sm font-bold">
                {item.title}
              </div>
              <div className="hidden md:block capitalize text-black-500 text-md">
                {item.category}
              </div>
              <div className="md:hidden flex justify-between w-full">
                <div className="text-[4vw] flex items-center font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="flex gap-2 items-center">
                  <ion-icon
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className="cursor-pointer"
                    name="remove-outline"
                  ></ion-icon>
                  <input
                    className="w-[7vw] h-[5vw] text-[3vw] border text-center"
                    value={item.quantity}
                    type="number"
                    onChange={(e) => handleChange(item.id, e)}
                  />
                  <ion-icon
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className="cursor-pointer"
                    name="add-outline"
                  ></ion-icon>
                </div>
              </div>
              <p
                className="cursor-pointer text-sm w-fit text-red-500 flex items-center"
                onClick={() => removeFromCart(item.id)}
              >
                <ion-icon name="trash-outline"></ion-icon>
                Remove
              </p>
            </div>
          </div>
          <div className="hidden md:flex gap-2 items-center ">
            <ion-icon
              onClick={() => handleDecrement(item.id, item.quantity)}
              className="cursor-pointer"
              name="remove-outline"
            ></ion-icon>
            <input
              className="w-10 h-7 border text-md text-center"
              value={item.quantity}
              type="number"
              onChange={(e) => handleChange(item.id, e)}
            />
            <ion-icon
              onClick={() => handleIncrement(item.id, item.quantity)}
              className="cursor-pointer"
              name="add-outline"
            ></ion-icon>
          </div>
          <div className="hidden md:flex items-center font-bold">
            ${item.price}
          </div>
          <div className="hidden md:flex items-center font-bold">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
