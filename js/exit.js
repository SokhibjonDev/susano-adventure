const exit = document.querySelector(".exit");
exit.addEventListener("click", () => {
  window.opener = self;
  window.close();
});
