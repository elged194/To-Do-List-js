const form = document.querySelector("form");
const inp = document.querySelector(" form input");
const tasks_cont = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inp.value) {
    const x = `
      <div class="task">
        <i class='bx bxs-star'></i>
        <p class="task-text" lang='ar' > ${inp.value}</p>
        <div>
            <i class='bx bx-trash'></i>
            <i class='bx bx-angry'></i>
        </div>
      </div>
    `;

    tasks_cont.innerHTML += x;
    inp.value = "";
  } else {
    alert("برجاء اكمل البيانات");
  }
});

tasks_cont.addEventListener("click", (e) => {
  const finskTask =
    e.target.parentElement.parentElement.querySelector(".task-text");

  // Remove Task
  if (e.target.classList == "bx bx-trash") {

    e.target.parentElement.parentElement.remove();
  }

  // Finsh Task
  if (e.target.classList == "bx bx-angry") {

    e.target.classList.add("bxs-user-check");
    finskTask.classList.add("finsh");

  } else if (e.target.classList == "bx bx-angry bxs-user-check") {

    e.target.classList.remove("bxs-user-check");
    finskTask.classList.remove("finsh");
  }

  // Star
  if (e.target.classList == "bx bxs-star") {

    e.target.classList.add("star");
    tasks_cont.prepend(e.target.parentElement);

  } else if (e.target.classList == "bx bxs-star star") {

    e.target.classList.remove("star");
    tasks_cont.append(e.target.parentElement);
  }
});
