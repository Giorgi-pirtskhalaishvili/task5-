divEl = document.createElement("div");
divEl.setAttribute("id", "card");
h2El = document.createElement("h2");
h2El.innerText = "Gendalf";
aEl = document.createElement("a");
aEl.setAttribute("href", "#");
aEl.innerText = "Go to profile";

divEl.append(h2El, aEl);
document.body.appendChild(divEl);
