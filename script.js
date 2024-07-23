let closeButton = document.querySelector("#bookshelf .bookcard");
closeButton.querySelector(".remove-book").addEventListener("click", () => {
  alert("button clicked");
  closeButton.setAttribute("style", "visibility:hidden");
})