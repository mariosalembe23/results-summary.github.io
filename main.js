"use strict";
async function getValues() {
  const dados = await axios.get("./data.json");
  const allDados = await dados.data;
  const categories = document.querySelectorAll(".textCategory");
  const score = document.querySelectorAll(".score");
  const imagesIcons = document.querySelectorAll(".imageIcon");
  for (
    let i = 0;
    i < allDados.length &&
    i < categories.length &&
    score.length &&
    imagesIcons.length;
    i++
  ) {
    categories[i].textContent = allDados[i].category;
    score[i].textContent = allDados[i].score;
    imagesIcons[i].src = allDados[i].icon;
  }
}
getValues();
