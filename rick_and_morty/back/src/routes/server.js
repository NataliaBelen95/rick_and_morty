const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const getAllChars = require("../controllers/getAllChars");

app.use(express.json());
app.use(cors());

app.get("/rickandmorty/allCharacters", async (req, res) => {
  try {
    const allCharacters = await getAllChars();
  
    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(404).send("Problemas");
  }
});

app.get("/rickandmorty/character/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const infoCharacter = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
    };
    res.status(200).json(infoCharacter);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/rickandmorty/detail/:detailId", async (req, res) => {
  try {
    const { detailId } = req.params;
    const { data } = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );

    const infoCharDetail = {
      name: data?.name,
      status: data?.status,
      species: data?.species,
      gender: data?.gender,
      origin: data?.origin,
      image: data?.image,
    };

    res.status(200).json(infoCharDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

let fav = [];

app.get("/rickandmorty/fav", (req, res) => {
  res.status(200).json(fav);
});

app.post("/rickandmorty/fav", (req, res) => {
  fav.push(req.body);

  res.status(200).send("se guardaron correctamente");
});

app.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;

  const filteredFavs = fav.filter((f) => f.id !== parseInt(id));
  fav = filteredFavs;

  res.status(200).send("fue eliminado correctamente");
});

module.exports = app;
