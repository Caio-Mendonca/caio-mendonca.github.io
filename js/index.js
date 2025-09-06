document.querySelectorAll("ul#menu-content li a").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("input[type=checkbox").checked = false;
  });
});
