import NavBar from "../components/NavBar";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";

export default function gamelist() {
  return (
    <>
      <NavBar />
      <div className="container-full">
        <img
          className="w-full h-[37.5rem] bg-cover bg-center"
          src="bg-games.jpg"
          alt="bg-games"
        />
      </div>
      <div className="container-full bg-[#161616] w-full lg:h-[47.438rem] flex relative justify-between px-[9.375rem]">
        <div className="pt-[5rem]">
          <h1 className="font-bold text-5xl max-w-lg text-white mt-3 leading-[56px] mb-12">
            Popular Games
          </h1>
          <div className="mt-[3.75rem] flex">
            <div className="max-w-sm rounded-[27.56px] border shadow-md bg-[#252525] border-[#252525]">
              <a>
                <img
                  className="rounded-t-[27.56px] w-full bg-center bg-cover"
                  src="games-BGK.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a>
                  <h5 className="mb-[0.875rem] text-[1.5rem] font-bold tracking-tight text-[#F1B03D]">
                    Rock Scissors Paper
                  </h5>
                </a>
                <p className="mb-[1.5rem] font-normal text-[#959595]">
                  Bertandinglah dengan teman Anda dan menangkan skor tertinggi
                </p>
                <Link href="/gamedetail">
                  <ButtonPrimary
                    width={"13.75rem"}
                    height={"46rem"}
                    text={"Mainkan sekarang"}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 pr-4 right-0">
            <img src="dot-illustration.svg" alt="dot" />
          </div>
          <div className="absolute top-40 left-0">
            <img src="eclipse-reverse.svg" alt="dot" />
          </div>
        </div>
      </div>
    </>
  );
}
