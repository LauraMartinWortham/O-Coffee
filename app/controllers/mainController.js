// On déclare un nouveau controller
// qui va me servir à gérer la page d'accueil
const mainController = {
  // Méthode qui sert à afficher la page d'accueil
  home: (req, res) => {
    // On va vérifier le contenu de la session
    res.render("home");
  },
};

// On n'oublie pas d'exporter notre mainController
module.exports = mainController;
