// select dom , var
let root = document.getElementById("root");

// functions
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

// event
window.addEventListener("load", render(librarys));
