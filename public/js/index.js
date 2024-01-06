import { login, logout } from './login';
import { register } from './register';
import { createBook } from './createBook';

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

const headerOffsetTop = header.offsetTop;

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
    openBookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookTitle = e.target.parentElement.firstElementChild.textContent;
            window.location.assign(`/books/${bookTitle}`);
        })
    })
}