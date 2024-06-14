const client = require("./modules/client");

const dataMapper = {

  getAllCoffees: async () => {
    const sql = "SELECT * FROM coffee";
    const result = await client.query(sql);
    return result.rows;
  },

	getThreeLast : async () => {
		const sql = "SELECT * FROM coffee ORDER BY id DESC LIMIT 3";
		const result = await client.query(sql);
		return result.rows;
	},

  getOneCoffee: async (coffeeId) => {
    const sql = `SELECT * FROM coffee WHERE id = ${coffeeId}`;
    const result = await client.query(sql);
    return result.rows[0];
  },

	getAllCategories: async () => {
    const sql = `SELECT caracteristic FROM coffee GROUP BY caracteristic`;
    const result = await client.query(sql);
    return result.rows;
  },


};

module.exports = dataMapper;
