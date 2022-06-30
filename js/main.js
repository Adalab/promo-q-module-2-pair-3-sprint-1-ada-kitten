"user strict";

document.querySelector(".new-form").classList.add("js-new-form");
const menuCollapsable = document.querySelector(".js-new-form");
const buttonPlus = document.querySelector(".item");
const buttonSearch = document.querySelector(".button-search");

document.querySelector(".button").classList.add("js-btn-add");
const buttonAdd = document.querySelector(".js-btn-add");
/* 
buttonAdd.addEventListener("click", () => {
  event.preventDefault();
  const inputDesc = document.querySelector(".js-input-desc");
  const inputPhoto = document.querySelector(".js-input-photo");
  const inputName = document.querySelector(".js-input-name");
  const labelMesageError = document.querySelector(".js-label-error");

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMesageError.innerHTML = `Debe rellenar todos los valores`;
  }
}); */

buttonSearch.addEventListener("click", () => {
  event.preventDefault();
  const inputDesc = document.querySelector(".input__description");
  const inputRace = document.querySelector(".input__race");

  // const searchSection = document.querySelector(".search");
  // const labelMesageError = searchSection.querySelector(".js-label-error");
  const labelMesageError = document.querySelector(".js-label-error-search");

  const valueDesc = inputDesc.value;
  const valueRace = inputRace.value;

  if (valueDesc === "" || valueRace === "") {
    labelMesageError.innerHTML = `Debe rellenar todos los valores`;
  }
});

buttonPlus.addEventListener("click", () => {
  menuCollapsable.classList.toggle("collapsed");
});

// if (menuCollapsable.classList.contains("collapsed")) {
//   menuCollapsable.classList.remove('collapsed');
// } else {
//   menuCollapsable.classList.add('collapsed');
// }

const buttonCancel = document.querySelector(".button-cancel");
buttonCancel.addEventListener("click", () => {
  event.preventDefault();
  const inputDesc = document.querySelector(".js-input-desc");
  const inputPhoto = document.querySelector(".js-input-photo");
  const inputName = document.querySelector(".js-input-name");
  const inputRace = document.querySelector(".js-input-race");

  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
  inputRace.value = "";

  menuCollapsable.classList.add("collapsed");
});

const sectionList = document.querySelector(".data");
sectionList.classList.add("js-list");

const kittenOneImg = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenOneName = "Anastacio";
const kittenOneRace = "British Shorthair";
const kittenOneDescription =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kittenTwoImg =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenTwoName = "Fiona";
const kittenTwoRace = "British Shorthair";
const kittenTwoDescription =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kittenThreeImg =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenThreeName = "Cielo";
const kittenThreeRace = "British Shorthair";
const kittenThreeDescription =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

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

const kittenThree = `<li class="card kittenThree">
<img
  class="card_img"
  src="${kittenThreeImg}"
  alt="gatito"
/>
<h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDescription}</p>
</li>`;

sectionList.innerHTML = `<ul class='list'>${kittenOne} ${kittenTwo} ${kittenThree}</ul>`;

const inputDesc = document.querySelector(".input");
inputDesc.classList.add("js_in_search_desc");
const input_search_desc = document.querySelector(".js_in_search_desc");
// input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

if (!kittenOneDescription.includes(descrSearchText)) {
  document.querySelector(".kittenOne").classList.add("collapsed");
}

if (!kittenTwoDescription.includes(descrSearchText)) {
  document.querySelector(".kittenTwo").classList.add("collapsed");
}

if (!kittenThreeDescription.includes(descrSearchText)) {
  document.querySelector(".kittenThree").classList.add("collapsed");
}

let html = "";

if (!kittenOneRace) {
  html = `No se ha especificado la raza`;
} else {
  html = kittenOneRace;
}
/*  *** añadimos gato a traves del form */
const buttonAddKitten = document.querySelector(".js-addKitten");

function renderKitten(url, desc, name, race) {
  const newKitten = document.querySelector(".list");
  newKitten.innerHTML += `<li class="card newKitten">
  <img
  class="card_img"
  src="${url}"
  alt="gatito"
  />
  <h3 class="card_title">${name.toUpperCase()}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">${desc}</p>
  </li>`;
}

buttonAddKitten.addEventListener("click", () => {
  const valueDescr = document.querySelector(".js-input-desc").value;
  const valuePhoto = document.querySelector(".js-input-photo").value;
  const valueName = document.querySelector(".js-input-name").value;
  const valueRace = document.querySelector(".js-input-race").value;

  renderKitten(valuePhoto, valueDescr, valueName, valueRace);
});

/* *** validar gatito */

function addValidateKitten(ev) {
  ev.preventDefault();
  const inputDesc = document.querySelector(".js-input-desc");
  const inputPhoto = document.querySelector(".js-input-photo");
  const inputName = document.querySelector(".js-input-name");
  const labelMesageError = document.querySelector(".js-label-error");

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMesageError.innerHTML = `Debe rellenar todos los valores`;
  }
}

buttonAdd.addEventListener("click", addValidateKitten);
