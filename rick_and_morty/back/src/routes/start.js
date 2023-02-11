const { sequelize } = require("../../db");
const { saveApiData } = require("../controllers/saveApiData");

const app = require("./server");

sequelize
  .sync({ force: true })
  .then(async () => {
    saveApiData();

    console.log("db conectada");
    app.listen(3001, () => {
      console.log("buenas");
    });
  })
  .catch((error) => {
    console.log(error);
  });
