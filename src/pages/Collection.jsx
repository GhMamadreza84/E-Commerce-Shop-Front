import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
const Collection = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10 ">
      {/* Filter Options  */}
      <div className=""></div>
    </div>
  );
};

export default Collection;
