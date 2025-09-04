const seeMoreBtn = document.getElementById("seeMoreBtn");
const extraProjects = document.getElementById("extraProjects");

seeMoreBtn.addEventListener("click", () => {
  if (extraProjects.style.display === "flex") {
    extraProjects.style.display = "none";
    seeMoreBtn.textContent = "See More Projects ↓";
  } else {
    extraProjects.style.display = "flex";
    seeMoreBtn.textContent = "See Less Projects ↑";
  }
});
