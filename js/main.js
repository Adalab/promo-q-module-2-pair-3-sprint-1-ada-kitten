'user strict';

const kittenImage ='https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName = 'Anastasio';
const kittenDesc = 'Ruisueño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! ';
const kittenRace = 'British Shorthair';


document.querySelector('.new-form').classList.add('js-new-form');
document.querySelector('.new-form').classList.remove('collapsed');


const sectionList = document.querySelector('.data');
sectionList.classList.add('js-list');


const kittenOne = `<li class="card">
<article>
  <img 
    class="card_img"
    src="${kittenImage}"
    alt="gatito" 
  />
  <h3 class="card_title">${kittenName}</h3>
  <p class="card_description">
   ${kittenDesc}
  </p>
 
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
class="card_img"
src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
Risueño, juguetón, le guta estar tranquilo y que nadie le moleste.
Es una maravilla acariciarle!
</p>
</li>`;
const kittenThree =  `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!;
</p>
</li>`;

sectionList.innerHTML=`<ul class='list'>${kittenOne} ${kittenTwo} ${kittenThree}</ul>`;


