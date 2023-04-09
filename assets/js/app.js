let slideImages = ["assets/img/1.jpg", "assets/img/2.jpg", "assets/img/3.jpg"];
let currentSlide = 0;
let image = document.querySelector(".slider img");
let dotsContainer = document.querySelector(".dots-container");

function ChangeSlide() {
  image.setAttribute("src", slideImages[currentSlide]);
}

function SetActiveDot() {
  let dots = document.querySelectorAll(".dot");
  for (let index = 0; index < dots.length; index++ ) {
    dots[index].classList.remove("active");
  }

  dots[currentSlide].classList.add("active");
}

function CreateDots() {
  for (let index = 0; index < slideImages.length; index++ ) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", function () {
      currentSlide = index;
      ChangeSlide();
      SetActiveDot();
    });
    dotsContainer.appendChild(dot);
  }
}

CreateDots();
ChangeSlide();
