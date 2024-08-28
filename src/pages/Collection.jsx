import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
const Collection = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10 ">
      {/* Filter Options  */}
      <div className="min-w-60">
        <p className="flex items-center gap-2 my-2 text-xl cursor-pointer">FILTERS</p>
      </div>
    </div>
  );
};

export default Collection;
