const express = require("express");
const router = express.Router();
const Pokemon = require("../../models/Pokemon");
const { validationResult } = require("express-validator");

const statMap = {
  hp: "hp",
  attack: "attack",
  defence: "defence",
  "sp. attack": "specialAttack",
  "sp. defence": "specialDefence",
  speed: "speed",
  total: "total",
};

// @route (the request type (GET) and endpoint (api/pokemon/statSort))
// @desc    Get pokemon sorted by type and stat
// @access  Public
router.get("/statSort", async (req, res) => {
  console.log(
    `Query: ${req.query.type} type sorted by ${req.query.stat} stat.`
  );
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let query = {};

  if (req.query.type) {
    query.types = req.query.type;
  }

  try {
    let pokemonFromDb = await Pokemon.find(query).sort([
      [`stats.${statMap[req.query.stat]}`, -1],
    ]);
    if (!pokemonFromDb) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No pokemon to return..." }] });
    }
    return res.json(pokemonFromDb);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
