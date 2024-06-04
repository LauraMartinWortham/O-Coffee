// On va importer notre module client situé dans /modules
/*const dataMapper = require("../dataMapper");
const client = require("../modules/client");*/

const productController = {
		// Méthode qui sert à afficher la page d'accueil
		catalog: (req, res) => {
			// On va vérifier le contenu de la session
			res.render("catalog");
		},

		productPage: (req, res) => {
			// On va vérifier le contenu de la session
			res.render("product");
		},
	};

module.exports = productController;