import ButtonPrimary from "../components/ButtonPrimary";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container-full bg-[#252525] w-full lg:h-[39.75rem] flex justify-between">
        <div className="pt-[6.25rem] pl-[9.375rem]">
          <div className="absolute bottom-64 left-0">
            <img src="dot-illustration.svg" alt="dot" />
          </div>
          <div className="flex">
            <img src="icon_hero.svg" alt="category icon" className="mr-3" />
            <p className="text-white text-[1.125rem] font-light">
              Mainkan Sekarang !!!
            </p>
          </div>
          <h1 className="font-bold text-5xl max-w-lg text-white mt-3 leading-[56px] mb-12">
            Kumpulan <br /> Game-game Terbaik dan Terpopuler{" "}
          </h1>
          <Link href="/gamelist">
            <img
              src="button_mainkan.svg"
              width={260}
              height={55}
              alt="button_main_kan"
            />
          </Link>
        </div>
        <div>
          <img
            src="hero.png"
            alt="hero"
            className="w-[40.5rem] h-[37.406rem]"
          />
        </div>
      </div>
      <div className="container-full bg-[#161616] w-full lg:[45.625rem] flex relative justify-between px-[9.375rem]">
        <div className="pt-[9.375rem]">
          <h1 className="font-bold text-5xl max-w-lg text-white mt-3 leading-[56px] mb-12">
            Event & Hadiah Menarik
          </h1>
          <p className="text-2xl text-[#959595] max-w-[34.188rem] leading-[29px] mb-[2.875rem]">
            Game yang disediakan oleh GameId memiliki event yang meriah dan
            menarik jangan lewatkan eventnya dan dapatkan hadiah yang menarik
            yang bisa anda dapatkan.
          </p>
          <ButtonPrimary text={"Info Lebih Lanjut"} />
          <div className="absolute bottom-10 left-0">
            <img src="dot-illustration.svg" alt="dot" />
          </div>
          <div className="absolute bottom-[30%] right-0">
            <img src="eclipse.svg" alt="dot" />
          </div>
        </div>
        <div className="pt-[9.375rem]">
          <img src="event-img.png" alt="eventImg" />
        </div>
      </div>
    </div>
  );
}
