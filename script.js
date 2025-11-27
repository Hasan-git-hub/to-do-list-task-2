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
    <b>${name}</b>, ${year} г. — ${work}
    (уровен: <b>${levelbox}</b>)
    <span class="delete">×</span>
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
