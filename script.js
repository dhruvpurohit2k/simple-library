let modal = document.querySelector("dialog");
let cardlist = document.querySelectorAll(".bookcard");
// let closeButton = document.querySelector("#bookshelf .bookcard");
// closeButton.querySelector(".remove-book").addEventListener("click", () => {
//   alert("button clicked");
//   closeButton.setAttribute("style", "visibility:hidden");
// })

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
// modal.querySelector("button").addEventListener("click", (e) => {
//   createBookCard();
//   cardlist = document.querySelectorAll(".bookcard");
//   console.log(cardlist);
//   cardlist.forEach((card) => {
//     card.querySelector(".remove-book").addEventListener("click", () => {
//       card.remove();
//     })
//   })
//   modal.close();
// })

function createBookCard() {
  let bookname = modal.querySelector("#bookname").value;
  let authorname = modal.querySelector("#authorname").value;
  let pages = modal.querySelector("#pages").value;
  let div = document.createElement("div");
  div.classList.add("bookcard");
  div.innerHTML = `<p>${bookname}</p>
      <p>${authorname}</p>
      <p>${pages}</p>
      <div class="read-checkbox">
        <label>Read</label>
        <input type="checkbox" name="read">
      </div>
      <div class="remove-book">
        <img src="/svg/close.svg" alt="">
      </div>`;
  document.querySelector("#bookshelf").appendChild(div);
  // let bookname = document.createElement("p");
  // bookname.innerHTML = modal.querySelector("bookname").textContent;
  // let authorname = document.createElement("p");
  // authorname.innerHTML = modal.querySelector("authorname").textContent;
  // let pages = document.createElement("p");
  // pages.innerHTML = modal.querySelector("#pages").textContent;
  // let card = document.createElement("div");
  // let readdiv = document.createElement("div");
  // readdiv.classList.add("read-checkbox");
  // readdiv.
  // card.classList.add("bookcard");
  // card.appendChild(bookname,authorname,pages);

}
function checkEmpty() {

}