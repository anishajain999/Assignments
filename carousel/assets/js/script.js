const img = document.getElementsByTagName("img");
const activeImg = document.getElementById("active");
const imgContainer = document.querySelector(".imgcontainer");

for (let i = 0; i < 5; i++) {
  imgContainer.innerHTML += `<img src="assets/img/${(i % 5) + 1}.jpg">`;
}

for (let i = 0; i <= 5; i++) {
  img[i].addEventListener("click", () => {
    if (i % 5 == 0) {
      activeImg.innerHTML = `<img src="assets/img/${
        (i % 5) + 5
      }.jpg" class="img-fluid">`;
    } else {
      activeImg.innerHTML = `<img src="assets/img/${
        i % 5
      }.jpg" class="img-fluid">`;
    }
  });
}

// let counterGLobal = 0;
let counter = 0;
// console.log(counter);
function playPrev() {
 
  counter = counter - 1;
  // console.log(counter);
  if (counter == 0) counter = 5;
  activeImg.innerHTML = `<img src="assets/img/${counter.toString()}.jpg" class="img-fluid">`;
};

function playNext(){
  // counter = +counter;
  counter = counter + 1;
  // console.log(counter);
  if (counter == 6) counter = 1;
  activeImg.innerHTML = `<img src="assets/img/${counter.toString()}.jpg" class="img-fluid">`;
};