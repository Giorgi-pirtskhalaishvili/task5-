const btnEl = document.querySelector(".correct");
const option = document.querySelectorAll(".option");
const options = document.querySelector(".options");

options.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className.includes("correct")) {
    e.target.style.color = "white";
    e.target.style.background = "green";
  } else if (e.target.className === "option") {
    e.target.style.background = "red";
  }
});
