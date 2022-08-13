import Game from "../models/Game.js";

export const getGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    res.status(200).json({
      status: 200,
      data: games,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

export const inputGames = async (req, res, next) => {
  try {
    const newGame = await Game.create({ ...req.body });
    res.status(201).send("Game created successfuly");
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};
