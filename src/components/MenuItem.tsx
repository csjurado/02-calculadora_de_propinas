// import React from "react";
import type { menuItem } from "../types/index";

type MenuItemProps = {
  item: menuItem;
  addItem: (item: menuItem) => void;
};
function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 bg-[#ededee] border-[#ededee] w-full  hover:bg-[#d5f8ef] hover:text-[#14b789] hover:border-[#14b789] p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      {/* <p className="font-sans text-base font-light leading-6 text-gray-700"> */}
      <p className="font-mono text-lg font-bold leading-7">{item.name}</p>
      {/* <p className="font-sans text-lg font-semibold leading-7  ">{item.name}</p> */}
      <p className="font-mono font-bold text-lg leading-7">$ {item.price}</p>
    </button>
  );
}

export default MenuItem;
