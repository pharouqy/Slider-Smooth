const object = {
  image1: "images/images_1.jpg",
  image2: "images/images_2.jpg",
  image3: "images/images_3.jpg",
  image4: "images/images_4.jpg",
  image5: "images/images_5.jpg",
};

const image = document.querySelector("img");
const btn = document.querySelectorAll("button");
const radios = document.querySelectorAll("input");
let count = 1;

function showImage(count) {
  for (let i = 0; i < Object.keys(object).length; i++) {
    if (i + 1 === count) {
      image.src = object[`image${i + 1}`];
      radios[i].checked = true;
      break;
    }
  }
}

radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    count = index + 1;
    showImage(count);
  });
});

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "prev") {
      count--;
      if (count < 1) {
        count = Object.keys(object).length;
      }
      showImage(count);
    }
    if (e.target.id === "next") {
      count++;
      if (count > Object.keys(object).length) {
        count = 1;
      }
      showImage(count);
    }
  });
});

const images = document.querySelectorAll(".container img");
const radiosFluide = document.getElementsByName("sliderFluide");
let countFluide = 0;

function translateImage(countFluide) {
  images.forEach((image) => {
    image.style.transform = `translateX(-${image.offsetWidth * countFluide}px)`;
  });
  radiosFluide[countFluide].checked = true;
}

radiosFluide.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    countFluide = index;
    translateImage(countFluide);
  });
});

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "nextFluide") {
      countFluide++;
      if (countFluide >= images.length) {
        countFluide = 0;
      }
      translateImage(countFluide);
    }
    if (e.target.id === "prevFluide") {
      countFluide--;
      if (countFluide < 0) {
        countFluide = images.length - 1;
      }
      translateImage(countFluide);
    }
  });
});
