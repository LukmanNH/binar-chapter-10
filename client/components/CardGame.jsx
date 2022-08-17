import Link from "next/link";
import React from "react";

export default function CardGame({ name, linkGame, isPlayed }) {
  return (
    <div className="max-w-sm rounded-[27.56px] mr-10 border shadow-md bg-[#252525] border-[#252525]">
      <a>
        <img
          className="rounded-t-[27.56px] w-full bg-center bg-cover"
          src="games-BGK.jpg"
          alt="image"
        />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-[0.875rem] text-[1.5rem] font-bold tracking-tight text-[#F1B03D]">
            {name}
          </h5>
        </a>
        <p className="mb-[1.5rem] font-normal text-[#959595]">
          Bertandinglah dengan teman Anda dan menangkan skor tertinggi
        </p>
        <Link href={linkGame}>
          <button className="w-[280px] bg-[#F1B03D] text-[#161616] font-medium text-xl rounded-[18px] px-[45px] py-[13px]">
            Mainkan Sekarang!
          </button>
        </Link>
        {isPlayed ? (
          <div>
            <p className="text-white">sudah pernah dimainkan</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
