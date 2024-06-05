const client = require("./modules/client");

const dataMapper = {

  getAllCoffees: async () => {
    const sql = "SELECT * FROM coffee";
    const result = await client.query(sql);
    return result.rows;
  },

  getOneCoffee: async (coffeeId) => {
    const sql = `SELECT * FROM coffee WHERE id = ${coffeeId}`;
    const result = await client.query(sql);
    return result.rows[0];
  },

/* 
  // Méthode permettant d'inscrire un nouvel étudiant en BDD
  addCoffe: async (studentInfos) => {
    // La destructuration d'un objet
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const {
      first_name,
      last_name,
      github_username,
      profile_picture_url,
      promo_id,
    } = studentInfos;

    // Pour sécuriser nos requêtes SQL, on va passer en valeur des jetons
    // Attention, les jetons débutent par le chiffre 1 (et pas 0 comme les index de tableaux)
    const sql = {
      text: `
    INSERT INTO student
    (first_name, last_name, github_username, profile_picture_url, promo_id)
    VALUES ($1, $2, $3, $4, $5)`,
      values: [
        first_name,
        last_name,
        github_username,
        profile_picture_url,
        promo_id,
      ],
    };

    const result = await client.query(sql);
    console.log(result);

    // On retourne un résultat et si possible le nombre
    // de lignes traitées (idéalement 1 ligne = la ligne VALUES de notre requête SQL)
    return result?.rowCount;
  },*/
};

module.exports = dataMapper;
