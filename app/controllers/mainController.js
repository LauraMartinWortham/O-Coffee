const dataMapper = require("../dataMapper");
const client = require("../modules/client");

const mainController = { 
  home: async (req, res) => {
    try {
      const news = await dataMapper.getThreeLast();
      res.render("home", { news });
    }
    catch{
      res.status(500).send(`Erreur de notre coté : ${error}`);
      throw error;
    }
  },
};

module.exports = mainController;
