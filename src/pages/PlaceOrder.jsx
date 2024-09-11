import React from "react";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* --------------Left  Side---------------- */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
