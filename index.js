// Récupération des dépendances
require("dotenv").config();
const express = require("express");
const router = require("./app/router");

// On appelle une instanciation d'Express
const app = express();

// Configuration du moteur de templates
app.set("views", "./app/views");
app.set("view engine", "ejs");

// Appel des fichiers statiques
app.use("/public", express.static("public"));

// Appel du routeur
app.use(router);

// Si au cas où, une route n'est pas trouvée dans notre router
// on veut pouvoir envoyer une page 404
app.use((req, res) => {
  res.status(404).render("404");
});

// Écoutons le port pour lancer notre application
app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});
