// select dom , var
let root = document.getElementById("root");
let buttons = document.querySelectorAll("button");
let bookIcon = document.getElementById("bookicon");

// functions
// render 
function render(list) {
  root.innerHTML = "";
  let template = list
    .map(function (item) {
      const { id, title, author, published_date, genre, imgSrc } = item;
      return `
            <div class="book">
                <img src="${imgSrc}">
                <h1> نام کتاب : ${title}</h1>
                <h2> نویسنده : ${author}</h2>
                <h3> سال انتشار : ${published_date}</h3>
                <h3> ژانر : ${genre}</h3>
            </div>
        `;
    })
    .join("");
  root.innerHTML = template;
}

// filterGenre
function filterGenre(genre) {
  let filterBooks = librarys.filter((item) => item.genre === genre);
  render(filterBooks);
  bookIcon.classList.remove("unshow");
}
// renderAllBook
function renderAllBooks(list) {
  render(list);
  bookIcon.classList.add("unshow");
}

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
