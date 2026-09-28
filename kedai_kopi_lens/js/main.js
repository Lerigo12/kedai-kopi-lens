const filterButtons = document.querySelectorAll(".filter");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filterButtons.forEach((item) =>
      item.classList.toggle("active", item === button),
    );
    menuCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
