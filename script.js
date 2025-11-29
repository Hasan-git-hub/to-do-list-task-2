const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const workInput = document.getElementById("work");
const levelInput = document.getElementById("levelbox");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

const all = document.getElementById("all");
const esey = document.getElementById("esey");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const night = document.getElementById("icon");
const body = document.getElementById("body");

let box = document.getElementById("box-1");
let box1 = document.getElementById("box-2");
let box2 = document.getElementById("box-3");
addBtn.addEventListener("click", () => {
  let name = nameInput.value.trim();
  let year = yearInput.value.trim();
  let work = workInput.value.trim();
  let levelbox = levelInput.value;

  if (!name || !year || !work || !levelbox) {
    alert("Заполните все поля!");
    return;
  }

  const li = document.createElement("li");

  li.dataset.level = levelbox;

  li.innerHTML = `
    <b>${name}</b> ,
    ${year}   ,
    ${work}   ,
    <b>${levelbox}</b>
    <span class="delete">×</span>
    <span class="edit"><svg class="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg></span>
  `;

  list.appendChild(li);

  nameInput.value = "";
  yearInput.value = "";
  workInput.value = "";
  levelInput.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const li = e.target.closest("li");

    if (li.querySelector(".confirm-box")) return;

    const box = document.createElement("div");
    box.className = "confirm-box";
    box.innerHTML = `
      <span>Удалить запись?</span>
      <div>
        <button class="confirm-btn confirm-yes">Да</button>
        <button class="confirm-btn confirm-no">Нет</button>
      </div>
    `;

    li.appendChild(box);

    box.querySelector(".confirm-no").onclick = () => {
      box.remove();
    };

    box.querySelector(".confirm-yes").onclick = () => {
      box.remove();
      li.classList.add("remove");

      li.addEventListener(
        "animationend",
        () => {
          li.remove();
        },
        { once: true }
      );
    };
  }
});

function filterList(level) {
  const items = document.querySelectorAll("#list li");

  items.forEach((li) => {
    if (level === "all") {
      li.style.display = "block";
    } else if (li.dataset.level === level) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
}

all.addEventListener("click", () => filterList("all"));
esey.addEventListener("click", () => filterList("esey"));
medium.addEventListener("click", () => filterList("medium"));
hard.addEventListener("click", () => filterList("hard"));

night.addEventListener("click", (e) => {
  body.style.background = "black";
  night.style.display = "none";
  light.style.display = "block";
});
night.addEventListener("click", (e) => {
  body.style.animation = "back 15s ease infinite";
});
let reg = /^[a-zA-Zа-яА-Я]+$/;
let reg1 = /^[0-9]+$/;
let reg2 = /^[a-zA-Zа-яА-Я0-9]+$/;
nameInput.addEventListener("input", () => {
  if (nameInput.value == "") {
    box.innerHTML = `
    не заполненое строка
    `;
    box.style.color = "red";
  } else if (!reg.test(nameInput.value)) {
    box.innerHTML = `
    не правилное имя
    `;
    box.style.color = "red";
  } else if (reg.test(nameInput.value)) {
    box.innerHTML = `
    правилно
    `;
    box.style.color = "green";
  }
});
yearInput.addEventListener("input", () => {
  if (yearInput.value == "") {
    box1.innerHTML = `
    не заполненое строка
    `;
    box1.style.color = "red";
  } else if (!reg1.test(yearInput.value)) {
    box1.innerHTML = `
    не правильное дата
    `;
    box1.style.color = "red";
  } else {
    box1.innerHTML = `
    правильно
    `;
    box1.style.color = "green";
  }
});
workInput.addEventListener("input", () => {
  if (workInput.value == "") {
    box2.innerHTML = `
    не заполненое строка
    `;
    box2.style.color = "red";
  } else if (!reg2.test(workInput.value)) {
    box2.innerHTML = `
    не правилно
    `;
    box2.style.color = "red";
  } else if (reg2.test(workInput.vale)) {
    box2.innerHTML = `
    правилно
    `;
    box2.style.color = "green";
  }
});
