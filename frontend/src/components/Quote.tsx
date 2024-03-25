import React from "react";

// type Props = {};

const Quote = () => {
  return (
    <>
      <div className="right flex-1 flex flex-col justify-center pr-20 pl-20 bg-slate-100 w-full h-screen">
        <h2 className="font-semibold text-2xl mb-1">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns."
        </h2>
        <p className="font-semibold">Aditya Shrimali</p>
        <p className="text-gray-400">CEO, Amazon Inc</p>
      </div>
    </>
  );
};

export default Quote;
