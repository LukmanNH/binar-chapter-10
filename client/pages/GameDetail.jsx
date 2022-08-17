import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Authenticated from "../middleware/Authenticated";
import { submitScore, successSubmitScore } from "../redux/slices/gameSlice";

const GameDetail = () => {
  const currentUser = useSelector((state) => state.user.users);
  const isLoadingScore = useSelector(
    (state) => state.game.isLoadingSubmitScore
  );
  console.log("loading score", isLoadingScore);
  const dispatch = useDispatch();
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const submitScoreHandler = async (e) => {
    e.preventDefault();
    const newScore = await axios.put(
      `http://localhost:8800/api/user/${currentUser._id}`,
      {
        score: [
          {
            userId: currentUser._id,
            gameName: "RSP",
            point: score,
          },
          {
            userId: currentUser._id,
            gameName: "Dummy",
            point: 0,
          },
        ],
      }
    );
    dispatch(submitScore());
    dispatch(successSubmitScore());
    const addToPlayedGames = await axios.put(
      "http://localhost:8800/api/games/62f05d17c49a80f17719febd",
      {
        userPlayed: currentUser._id,
      }
    );
  };

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          setResult("YOU WIN!");
          setScore(score + 1);
          break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          setResult("YOU LOSE!");
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          setResult("ITS A DRAW!");
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <Authenticated>
      <div>
        <NavBar />
        <div className="text-center">
          <h1>user choice is: {userChoice}</h1>

          {choices.map((choice, index) => (
            <button
              className="bg-amber-600 text-white px-8 py-2 mr-4 rounded-lg"
              key={index}
              onClick={() => handleClick(choice)}
            >
              {choice}
            </button>
          ))}
          <h1>computer choice is: {computerChoice}</h1>
          <h1>{result}</h1>
          <h1>Score: {score}</h1>
          {isLoadingScore ? (
            <Spinner animation="border" />
          ) : (
            <button
              onClick={(e) => {
                submitScoreHandler(e);
              }}
              className="mt-12 bg-[#F1B03D] text-[#161616] font-medium text-lg rounded-[18px] px-[30px] py-[10px]"
            >
              Submit Score
            </button>
          )}
        </div>
      </div>
    </Authenticated>
  );
};

export default GameDetail;
