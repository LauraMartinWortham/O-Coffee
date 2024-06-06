const dayjs = require("dayjs");
const dataMapper = require("../dataMapper");
const client = require("../modules/client");

const productController = {
		
		catalog: async (req, res) => {
			try {
				const coffees = await dataMapper.getAllCoffees();
				res.render("catalog", { coffees });
			}
			catch{
				res.status(500).send(`Erreur de notre coté : ${error}`);
				throw error;
			}
		},

		productPage: async (req, res, next) => {
			const targetId = Number(req.params.id);

    // Manière de faire avec async / await

			try {
				const date = dayjs().format ('L');
				const searchedCoffee = await dataMapper.getOneCoffee(targetId);
				if (!searchedCoffee) {
					// Si pas de promo trouvée, on renvoie une 404 via le middleware approprié
					return next();
				}
				res.render("product", { searchedCoffee, date });
			} catch (error) {
				res.status(500).send(`Erreur de notre côté : ${error}`);
				throw error;
			}
		},
	};

module.exports = productController;