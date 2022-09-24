function fetchBooks() {
  return  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
//  .then((json) => console.log(json));
  
}
function renderBooks(books) {
  const main = document.querySelector('main');
  console.log(books);
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('about to render books');
  renderBooks(fetchBooks().then((resp) => {
    console.log(resp)
    return resp

  }));
});


