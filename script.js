class Library {
  constructor(bookShelfElement) {
    this.bookShelfElement = bookShelfElement;
    console.log(this.bookShelfElement);
  }

  addBook(bookName, authorName, pages) {
    let div = document.createElement("div");
    div.classList.add("bookcard");
    div.innerHTML = `<p>${bookName.value}</p>
      <p>${authorName.value}</p>
      <p>${pages.value}</p>
      <div class="read-checkbox">
        <label>Read</label>
        <input type="checkbox" name="read">
      </div>
      <div class="remove-book">
        <img src="/svg/close.svg" alt="">
      </div>`;
    // document.querySelector("#bookshelf").appendChild(div);
    this.bookShelfElement.appendChild(div);
    bookName.value = "";
    authorName.value = "";
    pages.value = "";
    this.addCloseFunction();
  }

  addCloseFunction() {
    cardlist = this.bookShelfElement.querySelectorAll(".bookcard");
    cardlist.forEach((card) => {
      card.querySelector(".remove-book").addEventListener("click", () => {
        card.remove();
      })
    })
  }


}
let modal = document.querySelector("dialog");
let cardlist = document.querySelectorAll(".bookcard");
let lib = new Library(document.querySelector("#bookshelf"));
let addBook = document.querySelector("#addbook");
addBook.addEventListener("click", () => {
  modal.showModal();
})

modal.addEventListener("submit", (e) => {
  let bookname = modal.querySelector("#bookname");
  let authorname = modal.querySelector("#authorname");
  let pages = modal.querySelector("#pages");
  lib.addBook(bookname, authorname, pages);
  modal.close();
})

modal.querySelector("#closemodal").addEventListener("click", () => {
  modal.close();
})

function createBookCard() {
  let bookname = modal.querySelector("#bookname");
  let authorname = modal.querySelector("#authorname");
  let pages = modal.querySelector("#pages");
}

