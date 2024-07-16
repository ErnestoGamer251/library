// script.js
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not Read'}</p>
            <button onclick="toggleReadStatus(${index})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryDiv.appendChild(bookCard);
    });
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

document.getElementById('new-book-btn').addEventListener('click', () => {
    document.getElementById('form-container').classList.toggle('hidden');
});

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    document.getElementById('book-form').reset();
    document.getElementById('form-container').classList.add('hidden');
});

// Example books for testing
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
addBookToLibrary(new Book('1984', 'George Orwell', 328, true));
