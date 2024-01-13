import { login, logout } from './login';
import { register } from './register';
import { createBook } from './createBook';
import { createNote } from './createNote';
import { createQuote } from './createQuote';
import { deleteBook } from './deleteBook';
import { editNote } from './editNote';

const sections = document.querySelectorAll('section');
const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const dropDownMenu = document.querySelector('.dropDownMenu');
const aboutBtn = document.querySelector('#about');
const contactBtn = document.querySelector('#contact');
const header = document.querySelector('.mainMenu');
const toTopBtn = document.querySelector('#toTopBtn');
const loginForm = document.querySelector('.loginForm');
const LogoutBtn = document.querySelector('#logout');
const registerForm = document.querySelector('.registerForm');
const addBookBtn = document.querySelector('#addBookBtn');
const addBookForm = document.querySelector('.addBookForm');
const openBookBtns = document.querySelectorAll('.openBookBtn');
const openNotes = document.querySelector('#notes');
const openQuotes = document.querySelector('#quotes');
const addNoteBtn = document.querySelector('#addNoteBtn');
const addNoteForm = document.querySelector('.addNoteForm');
const addQuoteBtn = document.querySelector('#addQuoteBtn');
const addQuoteForm = document.querySelector('.addQuoteForm');
const deleteBookBtn = document.querySelector('#deleteBook');
const openNoteBtns = document.querySelectorAll('.openNoteBtn');
const closeEditNoteWindow = document.querySelector('#closeEditNoteWindow');
const openedNoteContainer = document.querySelector('.openedNoteContainer');

const headerOffsetTop = header.offsetTop;
let currentNoteTitle = '';
let currentNoteDescription = '';
let currentNoteContent = '';

// Window Events
addEventListener('resize', (e) => {
    if(openMenu) {
        if(window.screen.width > 650) {
            openMenu.style.display = 'none';
        } else if(window.screen.width < 650) {
            openMenu.style.display = 'block';
        }
    }

    const sectionTwo = document.querySelector('.sectionTwo');
    if(sectionTwo) {
        if(window.screen.width < 700) {
            const firstChild = sectionTwo.firstElementChild;
            sectionTwo.removeChild(sectionTwo.firstElementChild);
            sectionTwo.appendChild(firstChild);
        }
    }
});

addEventListener('scroll', () => {
    if(toTopBtn) {
        if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) toTopBtn.style.visibility = 'visible';
        else toTopBtn.style.visibility = 'hidden';   
    }
})

// Hamburger Menu 
if(openMenu) {
    openMenu.addEventListener('click', () => {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
        dropDownMenu.style.display = 'flex';
        sections.forEach(section => section.style.display = 'none');
        dropDownMenu.style.animation = 'fadeIn 2s'
    })
}

if(closeMenu) {
    closeMenu.addEventListener('click', () => {
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        dropDownMenu.style.display = 'none';
        sections.forEach(section => section.style.display = 'flex');
    })
}

// Switch Image and Paragraph on certain resolution
if(aboutBtn) {
    aboutBtn.addEventListener('click', () => {
        const sectionTwo = document.querySelector('.sectionTwo');
        sectionTwo.scrollIntoView();
    })
}

if(contactBtn) {
    contactBtn.addEventListener('click', () => {
        const sectionThree = document.querySelector('.sectionThree');
        sectionThree.scrollIntoView();
    })
}

// Button that takes you to the top of the page
if(toTopBtn) {
    toTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

// Login 
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        login(email, password);
    })
}

// Logout
if(LogoutBtn) {
    LogoutBtn.addEventListener('click', logout);
}

// Register
if(registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const dataObj = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value,
            passwordConfirm: document.querySelector('#passwordConfirm').value,
            gender: document.querySelector('.genderCb:checked').value,
        };

        register(dataObj);
    })
}

// Add New Book
if(addBookBtn) {
    addBookBtn.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'flex';
    });
}

if(addBookForm) {
    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.querySelector('#bookTitle').value;
        const author = document.querySelector('#bookAuthor').value;
        const book = document.querySelector('.nameAndAuthor').firstElementChild.dataset.bookid;
        console.log(book);
        // createBook(title, author);
    });

    document.querySelector('#closeWindow').addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
    });
}

// Open Book Buttons
if(openBookBtns.length > 0) {
    openBookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookTitle = e.target.parentElement.firstElementChild.textContent;
            window.location.assign(`/books/${bookTitle}`);
        })
    })
}

// Open Notes OR Quotes Button
if(openNotes) {
    openNotes.addEventListener('click', () => {
        const notes = document.querySelector('.notes');
        const quotes = document.querySelector('.quotes');
        notes.style.display = 'flex';
        quotes.style.display = 'none';
    })
}

if(openQuotes) {
    openQuotes.addEventListener('click', () => {
        const notes = document.querySelector('.notes');
        const quotes = document.querySelector('.quotes');
        notes.style.display = 'none';  
        quotes.style.display = 'flex';  
    })
}

// Add New Note
if(addNoteBtn) {
    addNoteBtn.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'flex';
        document.querySelector('.addNoteForm').style.display = 'flex';
    });
}

if(addNoteForm) {
    addNoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.querySelector('#noteTitle').value;
        const description = document.querySelector('#noteDescription').value;
        const book = document.querySelector('.nameAndAuthor').firstElementChild.dataset.bookid;
        createNote(title, description, book);
    });

    document.querySelector('#closeNoteWindow').addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.addNoteForm').style.display = 'none';
    });
}

// Add New Quote

if(addQuoteBtn) {
    addQuoteBtn.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'flex';
        document.querySelector('.addQuoteForm').style.display = 'flex';
    });
}

if(addQuoteForm) {
    addQuoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const quote = document.querySelector('#quoteContent').value;
        const quotee = document.querySelector('#quotee').value;
        const book = document.querySelector('.nameAndAuthor').firstElementChild.dataset.bookid;
        if(quotee !== "") {
            const data = {
                quote,
                quotee,
                book
            }
            createQuote(data);
        } 
        if(quotee === "") {
            const data = {
                quote, 
                book
            }
            createQuote(data)
        } 
    });

    document.querySelector('#closeQuoteWindow').addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.addQuoteForm').style.display = 'none';
    });
}

if(deleteBookBtn) {
    deleteBookBtn.addEventListener('click', () => {
        const bookId = document.querySelector('.nameAndAuthor').firstElementChild.dataset.bookid;
        deleteBook(bookId);
    });
}

if(openNoteBtns.length > 0) {
    openNoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.container').style.display = 'flex';
            openedNoteContainer.style.display = 'flex';
            openedNoteContainer.dataset.noteid = document.querySelector('.noteContainer').dataset.noteid;

            const btnParent = e.target.parentElement;

            currentNoteTitle = btnParent.firstElementChild.textContent;
            currentNoteDescription = btnParent.firstElementChild.nextElementSibling.textContent;
            currentNoteContent = btnParent.firstElementChild.nextElementSibling.nextElementSibling.textContent;
            
            document.querySelector('#editNoteTitle').value = currentNoteTitle;
            document.querySelector('#editNoteDescription').value = currentNoteDescription;
            document.querySelector('#editNoteContent').value = currentNoteContent;

            // window.history.pushState({}, null, '/wow');
        });
    });

    if(closeEditNoteWindow) {
        closeEditNoteWindow.addEventListener('click', () => {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.openedNoteContainer').style.display = 'none';
        })
    }
}

if(openedNoteContainer) {
    openedNoteContainer.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = openedNoteContainer.dataset.noteid;
        const title = document.querySelector('#editNoteTitle').value;
        const description = document.querySelector('#editNoteDescription').value;
        const content = document.querySelector('#editNoteContent').value;

        const dataObj = {
            title,
            description,
            content
        };

        editNote(id, dataObj);

    });
}
