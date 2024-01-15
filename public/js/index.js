import { login, logout } from './login';
import { register } from './register';
import { createBook } from './createBook';
import { deleteBook } from './deleteBook';
import { createNote } from './createNote';
import { editNote } from './editNote';
import { deleteNote } from './deleteNote';
import { createQuote } from './createQuote';
import { editQuote } from './editQuote';
import { deleteQuote } from './deleteQuote';

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
const closeEditQuoteWindow = document.querySelector('#closeEditQuoteWindow');
const openedNoteContainer = document.querySelector('.openedNoteContainer');
const deleteNoteBtns = document.querySelectorAll('.deleteNote');
const deleteQuoteBtns = document.querySelectorAll('.deleteQuote');
const quoteContainers = document.querySelectorAll('.quoteContainer');
const openedQuoteContainer = document.querySelector('.openedQuoteContainer');

const headerOffsetTop = header.offsetTop;
let currentNoteTitle = '';
let currentNoteDescription = '';
let currentNoteContent = '';
let currentQuoteContent = '';
let currentQuotee = '';

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

        createBook(title, author);
    });

    document.querySelector('#closeWindow').addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
    });
}

// Open Book Buttons
if(openBookBtns.length > 0) {
    // Calculate available width and height
    const navBar = 61;
    const padding = 32;
    const leftContainer = 257.45;
    const availableWidth = (window.innerWidth - leftContainer) - padding;
    const availableHeight = (window.innerHeight - navBar) - padding;

    // First row is always -1, because of the add note container
    const docSize = 218; // 202px element and 16px padding from 'gap' between elements
    const docsPerRow = Math.floor(availableWidth / docSize);
    const totalRows = Math.floor(availableHeight/ docSize);

    const totalPerPage = (docsPerRow * totalRows) - 1;
    console.log(totalPerPage);

    openBookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookTitle = e.target.parentElement.firstElementChild.textContent;
            window.location.assign(`/books/${bookTitle}?page=1&limit=${totalPerPage}`);
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

// Delete Book

if(deleteBookBtn) {
    deleteBookBtn.addEventListener('click', () => {
        const bookId = document.querySelector('.nameAndAuthor').firstElementChild.dataset.bookid;
        deleteBook(bookId);
    });
}

// Open Notes & Update Them

if(openNoteBtns.length > 0) {
    openNoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.container').style.display = 'flex';
            openedNoteContainer.style.display = 'flex';
            const btnParent = e.target.parentElement;
            
            openedNoteContainer.dataset.noteid = btnParent.dataset.noteid;

            currentNoteTitle = btnParent.firstElementChild.textContent;
            currentNoteDescription = btnParent.firstElementChild.nextElementSibling.textContent;
            currentNoteContent = btnParent.firstElementChild.nextElementSibling.nextElementSibling.textContent;
            
            document.querySelector('#editNoteTitle').value = currentNoteTitle;
            document.querySelector('#editNoteDescription').value = currentNoteDescription;
            document.querySelector('#editNoteContent').value = currentNoteContent;
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

// Delete Notes
if(deleteNoteBtns.length > 0) {
    deleteNoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const result = window.confirm('Are you sure you want to delete this note?');

            if(!result) return;
            
            const id = e.target.parentElement.dataset.noteid;

            deleteNote(id);
        });
    });
}

// Open Quotes & Update Them
if(quoteContainers.length > 0) {
    quoteContainers.forEach(container => {
        container.addEventListener('click', (e) => {
            if(e.target.classList.contains('deleteQuote')) return;
            if(e.target.tagName === 'P') return;

            document.querySelector('.container').style.display = 'flex';
            openedQuoteContainer.style.display = 'flex';
            openedQuoteContainer.dataset.quoteid = e.target.dataset.quoteid;
            
            currentQuoteContent = e.target.firstElementChild.textContent.split('\"')[1];
            if(e.target.firstElementChild.nextElementSibling) currentQuotee = e.target.firstElementChild.nextElementSibling.textContent.slice(2);

            document.querySelector('#editQuoteContent').value = currentQuoteContent;
            if(currentQuotee) document.querySelector('#editQuotee').value = currentQuotee;
        })
    })

    if(closeEditQuoteWindow) {
        closeEditQuoteWindow.addEventListener('click', () => {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.openedQuoteContainer').style.display = 'none';
        })
    }
}

if(openedQuoteContainer) {
    openedQuoteContainer.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = openedQuoteContainer.dataset.quoteid;
        const quote = document.querySelector('#editQuoteContent').value;
        const quotee = document.querySelector('#editQuotee').value;

        const dataObj = {
            quote,
            quotee
        }

        editQuote(id, dataObj);
    });
}

// Delete Quotes
if(deleteQuoteBtns.length > 0) {
    deleteQuoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const result = window.confirm('Are you sure you want to delete this quote?');

            if(!result) return;
            
            const id = e.target.parentElement.dataset.quoteid;

            deleteQuote(id);
        });
    });
}
