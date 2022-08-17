import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import CardGame from "../components/CardGame";
import NavBar from "../components/NavBar";

function GameList({ getGames }) {
  const currentUser = useSelector((state) => state.user.users);

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
            {getGames.map(({ gameName, userPlayed }, index) => (
              <CardGame
                name={gameName}
                isPlayed={userPlayed.includes(currentUser._id)}
                linkGame={index > 0 ? "/GameDummy" : "/GameDetail"}
              />
            ))}
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

export default GameList;

export const getServerSideProps = async () => {
  const getGames = await axios.get("http://localhost:8800/api/games");
  return {
    props: {
      getGames: getGames.data.data,
    },
  };
};
