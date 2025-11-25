const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const workInput = document.getElementById("work");
const genderInput = document.getElementById("gender");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  let name = nameInput.value.trim();
  let year = yearInput.value.trim();
  let work = workInput.value.trim();
  let gender = genderInput.value;

  if (!name || !year || !work || !gender) {
    alert("Заполните все поля!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <b>${name}</b>, ${year} г. — ${work}
    (уровен: <b>${gender}</b>)
    <span class="delete">×</span>
  `;

  list.appendChild(li);

  nameInput.value = "";
  yearInput.value = "";
  workInput.value = "";
  genderInput.value = "";
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
