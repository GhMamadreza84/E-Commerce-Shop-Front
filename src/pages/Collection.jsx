import React, { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10 ">
      {/* Filter Options  */}
      <div className="min-w-60">
        <p className="flex items-center gap-2 my-2 text-xl cursor-pointer">
          FILTERS
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          
        </div>
      </div>
    </div>
  );
};

export default Collection;
