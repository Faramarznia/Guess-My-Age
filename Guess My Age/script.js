let now = 2022;
const myAge = now - 2002;
console.log(myAge);
let score = 20;

document.querySelector(".checkbutton").addEventListener("click", function () {
  const guessMyAge = Number(document.querySelector(".check").value);
  if (guessMyAge == myAge) {
    document.querySelector("main","body","h1").style.backgroundColor = "green";
    score += 1;
    document.querySelector(".message").textContent =
      "باریکلا چقدر شما باهوشی واقعا آفرین";
    document.querySelector(".score").textContent = score;
  } else if (guessMyAge < myAge) {
    score -= 1;
    document.querySelector(".message").textContent =
      " دیگه والا انقدرم بچه نیستم ";
    document.querySelector(".score").textContent = score;
  } else if (guessMyAge > myAge) {
    score -= 1;
    document.querySelector(".message").textContent =
      "خیلی دیگه پیرم کردی , این زندگی دیگه فایده نداره";
    document.querySelector(".score").textContent = score;
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
  });
});
