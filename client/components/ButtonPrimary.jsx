import React from "react";

export default function ButtonPrimary({ text, height, width }) {
  return (
    <button className={`w-[${width}] bg-[#F1B03D] text-[#161616] font-medium text-xl rounded-[18px] px-[50px] py-[18px]`}>
      {text}
    </button>
  );
}
