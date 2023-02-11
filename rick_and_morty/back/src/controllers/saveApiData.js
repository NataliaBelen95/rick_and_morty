const axios = require("axios");
const { Character } = require("../../db");

const getApiData = async () => {
  try {
    let i = 1;
    let characters = []; // [Promise<pending>] *5
    while (i < 6) {
      const apiData = await axios(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      characters.push(apiData); //pusheo una promesa por cada llamado
      i++;
    }
    //            resulevo todas las promesas . por cada promesa resuelta, las mapeo, por cada respuesta
    //      todo el objeto que me retorna la api, guardados en charcater. primer map, mapeo la info
    //      res.data, es donde tengo la resp, y en data entro a results, donde tengo toda la info.
    //      mapeo ese resultado y retorno un objeto por c/personaje.
    characters = (await Promise.all(characters)).map((res) =>
      res.data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          species: char.species,
          status: char.status,
          origin: char.origin.name,
          gender: char.gender,
          image: char.image,
        };
      })
    );
    // creo un nuevo array, mapeo el array y concateno cada uno de los personajes.
    let allCharacters = [];
    characters.map((char) => {
      allCharacters = allCharacters.concat(char);
      return allCharacters;
    });
    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await Character.bulkCreate(allCharacters);

    return allCharacters;
  } catch (error) {
    return { error: error.mesage };
  }
};

module.exports = { saveApiData };
