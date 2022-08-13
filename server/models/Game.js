import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  gameName: {
    type: String,
    unique: true,
    required: true,
  },
  userPlayed: {
    type: [String],
  },
});

export default mongoose.model("Game", gameSchema);
