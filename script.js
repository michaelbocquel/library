// Initialise empty library

const myLibrary = []

// Book Constructor

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
const riveDroite = new Book('Rive Droite', 'Pierre Bordage', 567, false)
const toutEstFoutu = new Book('Tout est Foutu', 'Mark Manson', 247, true)
const lArtSubtilDeSEnFoutre = new Book(`L'art subtil de s'en foutre`, 'Mark Manson', 186, true)
const auCoeurDeLEspritCritque = new Book(`Au coeur de l'esprit critique`, 'Séverine Falkowicz', 224, false)
const neurosapiens = new Book(`Neurosapiens`, 'Anaïs Roux', 314, true)
myLibrary.push(riveGauche, riveDroite, toutEstFoutu, lArtSubtilDeSEnFoutre, auCoeurDeLEspritCritque, neurosapiens)

console.log(myLibrary)

// add Books to the container

function createBook() {
	for (let i = 0; i < myLibrary.length; i++) {
		const bookCard = document.createElement('div')
		bookCard.classList.add('book-card')
		const bookCardCover = bookCard.appendChild(document.createElement('div'))
		bookCardCover.style.width = '150px'
		bookCardCover.style.height = '230px'
		bookCardCover.style.backgroundColor = 'red'
		const bookCardDescription = bookCard.appendChild(document.createElement('div'))
		bookCardDescription.classList.add('book-card-description')
		const bookCardDescriptionTitle = bookCardDescription.appendChild(document.createElement('p'))
		bookCardDescriptionTitle.textContent = `${myLibrary[i].title}`
		const bookCardDescriptionAuthor = bookCardDescription.appendChild(document.createElement('p'))
		bookCardDescriptionAuthor.textContent = `${myLibrary[i].author}`
		const bookCardDescriptionPages = bookCardDescription.appendChild(document.createElement('p'))
		bookCardDescriptionPages.textContent = `${myLibrary[i].pages} pages`
		const bookCardDescriptionIsRead = bookCardDescription.appendChild(document.createElement('p'))
		myLibrary[i].isRead ? bookCardDescriptionIsRead.textContent = `Of course i've read it` : bookCardDescriptionIsRead.textContent = `It is not read yet`
		bookContainer.insertBefore(bookCard, newBookButton)
	}
}
createBook()

