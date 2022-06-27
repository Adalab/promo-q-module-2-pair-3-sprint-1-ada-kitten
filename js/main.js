'user strict';


document.querySelector('.new-form').classList.add('js-new-form');
const menuCollapsable = document.querySelector('.js-new-form');
menuCollapsable.classList.remove('collapsed');

if (menuCollapsable.classList.contains("collapsed")) {
  menuCollapsable.classList.remove('collapsed');
} else {
  menuCollapsable.classList.add('collapsed');
}


const sectionList = document.querySelector('.data');
sectionList.classList.add('js-list');


const kittenOneImg = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenOneName = "Anastacio";
const kittenOneRace = "";
const kittenOneDescription = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kittenTwoImg = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenTwoName = "Fiona";
const kittenTwoRace = "British Shorthair";
const kittenTwoDescription = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kittenThreeImg = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenThreeName = "Cielo";
const kittenThreeRace = "British Shorthair";
const kittenThreeDescription = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";


const kittenOne = `<li class="card kittenOne">
<article>
  <img
    class="card_img"
    src="${kittenOneImg}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
  <p class="card_description">${kittenOneDescription}</p>
</article>
</li>`;

const kittenTwo = `<li class="card kittenTwo">
<img
class="card_img"
src="${kittenTwoImg}"
alt="gatito"
/>
<h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">${kittenTwoDescription}</p>
</li>`;

const kittenThree =  `<li class="card kittenThree">
<img
  class="card_img"
  src="${kittenThreeImg}"
  alt="gatito"
/>
<h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDescription}</p>
</li>`;

sectionList.innerHTML = `<ul class="list" >${kittenOne} ${kittenTwo} ${kittenThree}</ul>`;


const inputDesc = document.querySelector(".input");
inputDesc.classList.add("js_in_search_desc");
const input_search_desc = document.querySelector(".js_in_search_desc");
// input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;


if ( !kittenOneDescription.includes(descrSearchText) ) {
    document.querySelector(".kittenOne").classList.add("collapsed");
}

if ( !kittenTwoDescription.includes(descrSearchText)) {
    document.querySelector(".kittenTwo").classList.add("collapsed");
  }

if ( !kittenThreeDescription.includes(descrSearchText)) {
    document.querySelector(".kittenThree").classList.add("collapsed");
  }


  let html = '';

  if (!kittenOneRace) {
    html = `No se ha especificado la raza`;

  } else {
    html = kittenOneRace;
  }

