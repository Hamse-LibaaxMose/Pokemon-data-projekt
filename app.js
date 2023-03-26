"use strict"

window.addEventListener("load",start)

async function start(){
getGitHubUser()

const peterL = await getGitHubUser("petlatkea");
getGitHubUser("cederdorff");
getGitHubUser("race-js");

 const Butterfree = {
   name: "Butterfree",
   description:"In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
   ability: "Butterfree can use its sensitive antenna to detect the odors of blooming flowers six miles (ten kilometers) from its nest in search of nectar, which it carries with the hairs of its legs.",
   image: "https://img.favpng.com/4/8/7/butterfree-pok-mon-caterpie-beedrill-weedle-png-favpng-qi4HPERGcUNVZR16NTwh8Fh6e.jpg",
   footprint: "https://archives.bulbagarden.net/media/upload/a/ac/F0012.png",
   dexindex: "#0012",
   type: "Bug/Flying",
   subtype: "Bug/Flying",
   weaknesses:"Fire, Electric, Ice, Rock, Flying",
   gender: "male",
   weight: "31,978 kg",
   height: "1001 cm",
   generation: "Generation 1",
   spilversion: "All versions",
   canEvolve: "It evolves from Metapod at Level 10, after evolving from Caterpie at Level 7.",
   statsHP: "60",
   statsAttack: "45",
   statsDefence: "50",
   statsSpecialAttack: "90",
   statsSpecialDefence: "80",
   statsSpeed: "70",
 };
 const charmander = {
  image:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif?width=1920",
  name: "Charmander",
  weight: "200kg",
  generation: 2,
  height: "2000m",
  gender: "hankøn",


 }
 showCharacter(charmander)
 showCharacter(charmander)
 showCharacter(charmander)
 showCharacter(Butterfree)
 showCharacter(Butterfree)
 showCharacter(Butterfree)
 showCharacter(Butterfree)
 showCharacter(Butterfree)
 showCharacter(Butterfree)
 showCharacter(Butterfree)
 showCharacter(Butterfree)

}

function showCharacter(object){
  console.log(object)
  const myHTML =`
  <article>
    <img src="${object.image}"/>
<h2> Name : ${object.name}</h2>
<p> Weight: ${object.weight}</p>
<p> Gender: ${object.gender}</p>
<p> Height: ${object.height}</p>
<p> genereation: ${object.generation}</p>

</article>

`; 
document.querySelector("#characters").insertAdjacentHTML("beforeend",myHTML);

document.querySelector("#characters article:last-child").addEventListener("click",charactersClicked)


function charactersClicked(){
   document.querySelector("#dialog-character").showModal();
  document.querySelector("#dialog-name").textContent = object.name;
  document.querySelector("#dialog-description").textContent = object.description;
  document.querySelector("#dialog-ability").textContent = object.ability;
  document.querySelector("#dialog-image"). src = object.image;
  document.querySelector("#dialog-footprint").src = object.footprint;
  document.querySelector("#dialog-dexindex").textContent = object.dexindex;
  document.querySelector("#dialog-type").textContent = object.type;
  document.querySelector("#dialog-weaknesses").textContent = object.weaknesses;
  document.querySelector("#dialog-weight").textContent = object.weight;
  document.querySelector("#dialog-height").textContent = object.height;
  document.querySelector("#dialog-generation").textContent = object.generation;
  document.querySelector("#dialog-stats-speed").textContent = object.statsSpeed;
  document.querySelector("#dialog-stats-attack").textContent = object.statsAttack
  document.querySelector("#dialog-stats-defence").textContent = object.statsDefence;

  document.querySelector(".btn-close").addEventListener("click", closeModal)
}
}

//closing modal
function closeModal() {
  document.querySelector("#dialog-character").close();
}
async function getGitHubUser(username){
  const response = await fetch("https://api.github.com/users/" + username)
  console.log(response)
  const data = await response.json();
  console.log(data)



}
// // function fetchJson(){
// fetch('Pokemon.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json)
    
//     )

//     // console.log(json)

  

//   }

//   fetchJson()

//   function display(data){
//     document.querySelector("body").insertAdjacentHTML("beforeend", `<article> 
//     <h2>${data.name}</h2>
//     </article>`)
  // }


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
