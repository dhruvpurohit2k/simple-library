let modal = document.querySelector("dialog");
let cardlist = document.querySelectorAll(".bookcard");

let addBook = document.querySelector("#addbook");
addBook.addEventListener("click", () => {
  modal.showModal();
})

modal.addEventListener("submit", (e) => {
  createBookCard();
  cardlist = document.querySelectorAll(".bookcard");
  console.log(cardlist);
  cardlist.forEach((card) => {
    card.querySelector(".remove-book").addEventListener("click", () => {
      card.remove();
    })
  })
  modal.close();
})

modal.querySelector("#closemodal").addEventListener("click", () => {
  modal.close();
})

function createBookCard() {
  let bookname = modal.querySelector("#bookname");
  let authorname = modal.querySelector("#authorname");
  let pages = modal.querySelector("#pages");
  let div = document.createElement("div");
  div.classList.add("bookcard");
  div.innerHTML = `<p>${bookname.value}</p>
      <p>${authorname.value}</p>
      <p>${pages.value}</p>
      <div class="read-checkbox">
        <label>Read</label>
        <input type="checkbox" name="read">
      </div>
      <div class="remove-book">
        <img src="/svg/close.svg" alt="">
      </div>`;
  document.querySelector("#bookshelf").appendChild(div);
  bookname.value = "";
  authorname.value = "";
  pages.value = "";

}