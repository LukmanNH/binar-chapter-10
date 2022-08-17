import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Authenticated from "../middleware/Authenticated";

export default function GameDummy() {
  const currentUser = useSelector((state) => state.user.users);
  const [score, setScore] = useState(Math.floor(Math.random() * 10));

  const submitScore = async (e) => {
    e.preventDefault();
    const newScore = await axios.put(
      `http://localhost:8800/api/user/${currentUser._id}`,
      {
        score: [
          {
            gameName: "RSP",
            point: score,
          },
          {
            gameName: "Dummy",
            point: 0,
          },
        ],
      }
    );
    const addToPlayedGames = await axios.put(
      "http://localhost:8800/api/games/62f05d2dc49a80f17719fec0",
      {
        userPlayed: currentUser._id,
      }
    );
  };
  return (
    <Authenticated>
      <NavBar />
      <h1 className="text-center text-2xl font-bold mt-4">Game Dummy</h1>
      <p className="text-center mt-5">Score: {score}</p>
      <button
        onClick={(e) => {
          submitScore(e);
        }}
        className="mt-12 bg-[#F1B03D] text-[#161616] font-medium text-lg rounded-[18px] px-[30px] py-[10px]"
      >
        Submit Score
      </button>
    </Authenticated>
  );
}
