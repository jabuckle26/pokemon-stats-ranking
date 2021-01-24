const express = require('express');
const router = express.Router();
const Pokemon = require('../../models/Pokemon');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');

const statMap = {
    'hp' : 'hp',
    'attack' : 'attack',
    'defence' : 'defence',
    'sp. attack' : 'specialAttack',
    'sp. defence' : 'specialDefence',
    'speed' : 'speed',
}

// @route (the request type (POST) and endpoint (api/users))
// @desc    Register User
// @access  Public (therefore we don't need a token)
router.post('/',
    async (req, res) => {
        console.log('HERE');
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const {name, natDex, stats, types} = req.body;
        console.log('Got request body');
        console.log(name);
        console.log(types);
        console.log(types.length)
        if (!types.length > 0 && !types.length < 3) {
            return res.status(400).json({errors: "Only 1 or 2 types may be provided"});
        }

        try {
            //see if user exits
            let pokemon = await Pokemon.findOne({name}); //can say {email} object here rather than {'email':'email'} here because we've used the const line above
            if(pokemon) {
                return res.status(400).json({ errors: [{msg: 'Pokemon already exists gurrl'}]});
            }

            pokemon = new Pokemon({
                name,
                natDex,
                types,
                stats
            });

            await pokemon.save();
            return res.json(pokemon);

            //return jsonwebtoken
            // res.send('User registered');
            // const payload = {
            //     pokemon: {
            //         id: pokemon.id,
            //         name: pokemon.name
            //     }
            // }

            // jwt.sign(
            //     payload, 
            //     config.get('jwtSecret'),
            //     {expiresIn: 360000},
            //     (err, token) => {
            //         if (err) {
            //             throw err;
            //         } else {
            //             res.json({token});
            //         }
            //     });
            
        } catch(err){
            console.error(err.message);
            res.status(500).send('Server Error gurrl');
        }

    });

// @route (the request type (PUT) and endpoint (api/pokemon))
// @desc    Update pokemon
// @access  Public (therefore we don't need a token)
router.put('/',
async (req, res) => {
    console.log('HERE');
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {name, natDex, stats, types} = req.body;
    console.log('Got request body');
    console.log(name);
    console.log(types);
    console.log(types.length)
    if (!types.length > 0 && !types.length < 3) {
        return res.status(400).json({errors: "Only 1 or 2 types may be provided"});
    }

    try {
        //see if user exits
        let pokemon = await Pokemon.findOne({name}); //can say {email} object here rather than {'email':'email'} here because we've used the const line above
        if(!pokemon) {
            return res.status(400).json({ errors: [{msg: 'Can\'t find that pokemon..'}]});
        }

        pokemon.name = name;
        pokemon.types = types;
        pokemon.stats = stats;
        pokemon.natDex = natDex;

        await pokemon.save();
        return res.json(pokemon);

        //return jsonwebtoken
        // res.send('User registered');
        // const payload = {
        //     pokemon: {
        //         id: pokemon.id,
        //         name: pokemon.name
        //     }
        // }

        // jwt.sign(
        //     payload, 
        //     config.get('jwtSecret'),
        //     {expiresIn: 360000},
        //     (err, token) => {
        //         if (err) {
        //             throw err;
        //         } else {
        //             res.json({token});
        //         }
        //     });
        
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error gurrl');
    }

});

// @route (the request type (POST) and endpoint (api/pokemon/batch))
// @desc    Upload batch of pokemon to DB
// @access  Public (therefore we don't need a token)
router.post('/batch',
    async (req, res) => {
        console.log('HERE');
        // const errors = validationResult(req);
        // if(!errors.isEmpty()) {
        //     return res.status(400).json({errors: errors.array()})
        // }

        pokemonToUpload = [];

        const {allPokemon} = req.body;
        console.log('Got request body');

        allPokemon.forEach((singlePokemon) => {
            const { name, types, stats, natDex } = singlePokemon;
            console.log("Deconstructed..");
            console.log(name);
            console.log(types);
            console.log(types.length)
            if (!types.length > 0 && !types.length < 3) {
                return res.status(400).json({errors: `Error at ${name}: Only 1 or 2 types may be provided, received ${types.length}.`});
            }

            try {
                pokemonToUpload.push(new Pokemon({name, natDex,
                    types,
                    stats}));
            } catch(err){
                console.error(err.message);
                res.status(500).send('Server Error gurrl');
            }
        });

        console.log(pokemonToUpload);

        try {
            // let pokemon = await Pokemon.findOne({name});
            // if(pokemon) {
            //     return res.status(400).json({ errors: [{msg: `Pokemon (${name}) already exists gurrl`}]});
            // }
            await Pokemon.insertMany(pokemonToUpload);
            return res.json(pokemonToUpload);
        } catch(err){
            console.error(err.message);
            res.status(500).send('Server Error gurrl');
        }
    });

// @route (the request type (GET) and endpoint (api/pokemon/5))
// @desc    Get 5 pokemon
// @access  Public (therefore we don't need a token)
router.get('/statSort',
async (req, res) => {
    console.log('Get');
    console.log('query param:');
    console.log(req.query.stat);
    console.log(req.query.type);
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    let query = {};
    
    if (req.query.type) {
        query.types = req.query.type
    }

    try {
        let pokemonFromDb = await Pokemon.find(query).sort([[`stats.${statMap[req.query.stat]}`, -1]]); //can say {email} object here rather than {'email':'email'} here because we've used the const line above
        if(!pokemonFromDb) {
            return res.status(400).json({ errors: [{msg: 'No pokemon to return...'}]});
        }
        return res.json(pokemonFromDb);
        
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error gurrl');
    }
});
    
// @route (the request type (PUT) and endpoint (api/pokemon/toInt))
// @desc    Change stat type to ints
// @access  Public (therefore we don't need a token)
router.delete('/toInt',
async (req, res) => {
    console.log('Put');
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        await Pokemon.deleteMany({});
        // console.log(pokemonFromDb.length);
        let updatelist = [];
        
            // pokemonFromDb.forEach((entry) => {
            //     console.log(entry);
            //     console.log(entry.stats.attack);
            //     console.log(parseInt(entry.stats.attack));
            //     entry.stats.attack = parseInt(entry.stats.attack);

            // });
            // return res.json(pokemonFromDb);
        
            // try {
            //     await Pokemon.deleteMany(pokemonFromDb);
            // } catch(err) {
            //     console.log(err);
            // }
        
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error gurrl');
    }

});

module.exports = router;