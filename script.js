let btnb = document.querySelector("#btnb");
let text1 = document.querySelector(".card-text");
let imgc = document.querySelector(".card-img-top");

let body = document.querySelector("body");
(() => {
  body.style.backgroundColor = "black";
})();

let URL = "https://cat-fact.herokuapp.com/facts";
let facts = async () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let num1 = getRandomInt(5);

  let data = await fetch(URL);
  let usedata = await data.json();
  text1.innerText = usedata[num1].text;
};

let URL2 = "https://api.thecatapi.com/v1/images/search";
let imag = async () => {
  let img = await fetch(URL2);
  let real_img = await img.json();
  imgc.src = real_img[0].url;
};

btnb.addEventListener("click", facts);
btnb.addEventListener("click", imag);
