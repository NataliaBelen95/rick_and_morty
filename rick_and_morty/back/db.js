require("dotenv").config();
const { Sequelize } = require("sequelize");
const characterModel = require("./src/Models/Character");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
  { logging: false, native: false }
);
// URL

characterModel(sequelize);
//EJERCIO 3 puedes ejecutar la funcion d elos modelos aqui

module.exports = {
  ...sequelize.models,
  sequelize,
};
