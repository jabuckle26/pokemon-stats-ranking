const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  natDex: {
    type: String,
    required: true,
  },
  types: {
    type: [String],
    required: true,
  },
  stats: {
    hp: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    defence: {
      type: Number,
      required: true,
    },
    specialAttack: {
      type: Number,
      required: true,
    },
    specialDefence: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
});

module.exports = Pokemon = mongoose.model("pokemon", PokemonSchema);
