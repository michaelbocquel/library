// Initialise empty library

const myLibrary = []

function Book(title, author, pages, isRead) {
	this.title = title
	this.author = author
	this.pages = pages
	this.isRead = isRead
}

const bookContainer = document.querySelector('.book-container')
const newBookButton = document.querySelector('.new-book-button')
const newBookForm = document.querySelector('.new-book-form')



newBookButton.addEventListener('click', () => { newBookForm.showModal() })

// Book Objects

const riveGauche = new Book('Rive Gauche', 'Pierre Bordage', 601, true)
const riveDroite = new Book('Rive Droite', 'Pierre Bordage', 567, true)
myLibrary.push(riveGauche, riveDroite)

console.log(myLibrary)

// add Books to the container

function createBook() {
	for (let i = 0; i < myLibrary.length; i++) {
		const bookCard = document.createElement('div')
		bookCard.style.width = '150px'
		bookCard.style.height = '230px'
		bookCard.style.backgroundColor = 'red'
		bookContainer.insertBefore(bookCard, newBookButton)
	}
}
createBook()

