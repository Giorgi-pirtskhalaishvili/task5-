btnEl = document.createElement("button");
divEl = document.createElement("div");
btnEl.setAttribute("id", "mybtn");
btnEl.innerText = "CLICK ME";

divEl.setAttribute("id", "mydiv");
divEl.innerText = "show or hide this text";
divEl.style.display = "none";
divEl.style.fontSize = "40px";
divEl.style.backgroundColor = "yellow";
document.body.append(divEl, btnEl);

btnEl.addEventListener("click", () => {
  if (divEl.style.display === "none") {
    divEl.style.display = "block";
  } else {
    divEl.style.display = "none";
  }
});
