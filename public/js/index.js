import { login, logout } from './login';

const sections = document.querySelectorAll('section');
const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const dropDownMenu = document.querySelector('.dropDownMenu');
const aboutBtn = document.querySelector('#about');
const header = document.querySelector('.mainMenu');
const toTopBtn = document.querySelector('#toTopBtn');
const loginForm = document.querySelector('.loginForm');
const LogoutBtn = document.querySelector('#logout');

const headerOffsetTop = header.offsetTop;

// Switch elements at certain resolution
if(window.screen.width < 700) {
    const sectionTwo = document.querySelector('.sectionTwo');
    const firstChild = sectionTwo.firstElementChild;
    sectionTwo.removeChild(sectionTwo.firstElementChild);
    sectionTwo.appendChild(firstChild);
}

// Window Events
addEventListener('resize', (e) => {
    if(window.screen.width > 550) {
        openMenu.style.display = 'none';
    } else if(window.screen.width < 550) {
        openMenu.style.display = 'block';
    }
})

addEventListener('scroll', () => {
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) toTopBtn.style.visibility = 'visible';
    else toTopBtn.style.visibility = 'hidden';   
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

// addEventListener('click', () => {
//     console.log(localStorage.getItem('user'));
// })