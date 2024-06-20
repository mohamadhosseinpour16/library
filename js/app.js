// select dom , var
let root = document.getElementById("root");
let buttons = document.querySelectorAll("button");
let bookIcon = document.getElementById("bookicon");
let basketIcon = document.getElementById("basket");
let valueBasket = document.getElementById("value-basket");
let h1 = document.querySelector("div > h1");
let basket = [];

// functions
// render books
function render(List) {
  root.innerHTML = "";
  let template = List.map(function (item) {
    const { id, title, author, published_date, genre, imgSrc } = item;
    return `
            <div class="book">
                <img src="${imgSrc}">
                <h1> نام کتاب : ${title}</h1>
                <h2> نویسنده : ${author}</h2>
                <h3> سال انتشار : ${published_date}</h3>
                <h3> ژانر : ${genre}</h3>
                ${
                  basket.find((phrchase) => phrchase.id === id)
                    ? `<button>موجود در سبد خرید</button>`
                    : `<button onclick="addToBasket(${id})">اضافه به سبد خرید </button>`
                }
            </div>
        `;
  }).join("");
  root.innerHTML = template;
}
// filterGenre
function filterGenre(genre) {
  let filterBooks = librarys.filter((item) => item.genre === genre);
  render(filterBooks);
  bookIcon.classList.remove("unshow");
  h1.textContent = genre;
}
// renderAllBook
function renderAllBooks(List) {
  render(List);
  bookIcon.classList.add("unshow");
  h1.textContent = "کتابخانه";
  for (const button of buttons) {
    button.style.display = "block";
  }
}
// addToBasket
function addToBasket(id) {
  let findBook = librarys.find((item) => item.id === id);
  basket.push(findBook);
  // localStorage.setItem("Basket", JSON.stringify(basket));
  updateValueBasket();
}
// updateValueBasket
function updateValueBasket() {
  valueBasket.textContent = basket.length;
}
// renderBasket
function renderBasket(List) {
  root.innerHTML = "";
  let template = List.map(function (item) {
    const { id, title, author, published_date, genre, imgSrc } = item;
    return `
            <div class="book">
                <img src="${imgSrc}">
                <h1> نام کتاب : ${title}</h1>
                <h2> نویسنده : ${author}</h2>
                <h3> سال انتشار : ${published_date}</h3>
                <h3> ژانر : ${genre}</h3>
                <button onclick="removeBasket(${id})">حذف از سبد خرید</button>
            </div>
        `;
  }).join("");
  root.innerHTML = template;
  bookIcon.classList.remove("unshow");
  h1.textContent = "سبد خرید";
  for (const button of buttons) {
    button.style.display = "none";
  }
}
// removeBasket
function removeBasket(id) {
  let findBook = basket.find((item) => item.id === id);
  basket.splice(findBook, 1);
  // localStorage.setItem("Basket", JSON.stringify(basket));
  renderBasket(basket);
  updateValueBasket();
}

// let basketStore = localStorage.getItem("Basket");
// basket = JSON.parse(basketStore);
// updateValueBasket();

// events
window.addEventListener("load", render(librarys));
for (const button of buttons) {
  button.addEventListener("click", function () {
    filterGenre(this.textContent);
  });
}
bookIcon.addEventListener("click", function () {
  renderAllBooks(librarys);
});
basketIcon.addEventListener("click", function () {
  renderBasket(basket);
});
