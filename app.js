"use strict"
// 1 
window.addEventListener("load",start)
// 2
async function start(){
                              // 3
const arrayPokemon = await getData("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
arrayPokemon.forEach(showCharacter)

}

function showCharacter(pokemon){
  console.log(pokemon)
  const myHTML =`
  <article>
    <img src="${pokemon.image}"/>
<h2> Name : ${pokemon.name}</h2>
<p> Weight: ${pokemon.weight}</p>
<p> Gender: ${pokemon.gender}</p>
<p> Height: ${pokemon.height}</p>
<p> genereation: ${pokemon.generation}</p>

</article>

`; 
document.querySelector("#characters").insertAdjacentHTML("beforeend",myHTML);

document.querySelector("#characters article:last-child").addEventListener("click",charactersClicked)


function charactersClicked(){
   document.querySelector("#dialog-character").showModal();
  document.querySelector("#dialog-name").textContent = pokemon.name;
  document.querySelector("#dialog-description").textContent = pokemon.description;
  document.querySelector("#dialog-ability").textContent = pokemon.ability;
  document.querySelector("#dialog-image"). src = pokemon.image;
  document.querySelector("#dialog-footprint").src = pokemon.footprint;
  document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
  document.querySelector("#dialog-type").textContent = pokemon.type;
  document.querySelector("#dialog-weaknesses").textContent = pokemon.weaknesses;
  document.querySelector("#dialog-weight").textContent = pokemon.weight;
  document.querySelector("#dialog-height").textContent = pokemon.height;
  document.querySelector("#dialog-generation").textContent = pokemon.generation;
  document.querySelector("#dialog-stats-speed").textContent = pokemon.statsSpeed;
  document.querySelector("#dialog-stats-attack").textContent = pokemon.statsAttack
  document.querySelector("#dialog-stats-defence").textContent = pokemon.statsDefence;
  document.querySelector("#dialog-subtype").textContent=pokemon.subtype;
  document.querySelector("#dialog-spilversion").textContent=pokemon.spilversion;
  document.querySelector("#dialog-can-evolve").textContent=pokemon.canEvolve;
  document.querySelector("#dialog-stats-hp").textContent=pokemon.statsHP;
  document.querySelector("#dialog-stats-special-attack").textContent=pokemon.statsSpecialAttack;
  document.querySelector("#dialog-stats-special-defence").textContent=pokemon.statsSpecialDefence;


  
  document.querySelector(".btn-close").addEventListener("click", closeModal)
}
}

//closing modal
function closeModal() {
  document.querySelector("#dialog-character").close();
}               
              //  4
async function getData(urlData){
  const response = await fetch(urlData)
  console.log(response)
  const data = await response.json();
  console.log(data)
  return data



}
  


function showInformation(pokemon){
const myHTML = /*html*/ `
<li>Name: ${pokemon.name}</li>
<li>Description: ${pokemon.description}</li>
<li>Ability: ${pokemon.ability}</li>
<li>Image: ${pokemon.image}</li>
<li>Footprint: ${pokemon.footprint}</li>
<li>Dexindex: ${pokemon.dexindex}</li>
<li>Type: ${pokemon.type}</li>
<li>subtype: ${pokemon.subtype}</li>
<li>Weaknesses: ${pokemon.weaknesses}</li>
<li>Gender: ${pokemon.gender}</li>
<li>Weight: ${pokemon.weight}</li>
<li>Height: ${pokemon.height}</li>
<li>Generation: ${pokemon.generation}</li>
<li>Spilversion: ${pokemon.spilversion}</li>
<li>Can Evolve: ${pokemon.canEvolve}</li>
<li>HP: ${pokemon.statsHP}</li>
<li>Attack: ${pokemon.statsAttack}</li>
<li>Special attack: ${pokemon.statsSpecialAttack}</li>
<li>Special defence: ${pokemon.statsSpecialDefence}</li>
<li>Speed: ${pokemon.statsSpeed}</li>
`;
document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML)

}

// showInformation(Butterfree);
