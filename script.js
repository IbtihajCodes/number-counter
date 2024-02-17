"use strict";

const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");
const increaseBtn = document.querySelector(".increase-btn");
let counter = document.querySelector(".heading-primary");

decreaseBtn.addEventListener("click", function () {
  counter.innerHTML -= 1;
  colorChecker();
});

increaseBtn.addEventListener("click", function () {
  counter.innerHTML = Number(counter.innerHTML) + 1;
  colorChecker();
});

resetBtn.addEventListener("click", function () {
  counter.innerHTML = 0;
  colorChecker();
});

const colorChecker = function () {
  if (Number(counter.innerHTML) < 0) {
    counter.style.color = "red";
  } else if (Number(counter.innerHTML) > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "#495057";
  }
};
