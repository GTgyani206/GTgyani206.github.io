const drkMd = document.querySelector(".drk-md");
const html = document.querySelector("html");
const icns = document.querySelectorAll(".icn-btn");

drkMd.addEventListener("click", () => {
  if (drkMd.className === "btn btn-outline-dark drk-md") {
    html.setAttribute("data-bs-theme", "dark");
    for (icn of icns) {
      icn.className = "btn btn-outline-light icn-btn";
    }
    drkMd.className = "btn btn-outline-light drk-md";
    drkMd.innerHTML = 'Light Mode <i class="bi bi-brightness-high-fill"></i>';
  } else {
    html.setAttribute("data-bs-theme", "light");
    for (icn of icns) {
      icn.className = "btn btn-outline-dark icn-btn";
    }
    drkMd.className = "btn btn-outline-dark drk-md";
    drkMd.innerHTML = 'Dark Mode <i class="bi bi-moon-stars-fill"></i>';
  }
});

