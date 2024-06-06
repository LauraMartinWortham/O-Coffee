displayAllProducts();

function displayAllProducts() {
  const catalogList = document.getElementById("catalog_list");
  const catalogButton = document.getElementById("catalog_button");
  
  catalogButton.addEventListener("click", () => {
    catalogList.classList.toggle("only-display-3-articles");
    if(catalogButton.textContent === "Voir tout"){
      catalogButton.textContent = "Voir moins";
    }
    else if (catalogButton.textContent === "Voir moins"){
      catalogButton.textContent = "Voir tout"
    }
  });
}