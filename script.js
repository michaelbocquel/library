const myLibrary = []
console.log(myLibrary)

function Book(title, author, genre, pages, isRead) {
	this.title = title
	this.author = author
	this.genre = genre
	this.pages = pages
	this.isRead = isRead
}

const newBookButton = document.querySelector('.new-book-button')
const newBookForm = document.querySelector('.new-book-form')

newBookButton.addEventListener('click', () => { newBookForm.showModal() })