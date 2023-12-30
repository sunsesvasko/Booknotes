const sections = document.querySelectorAll('section');
const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const dropDownMenu = document.querySelector('.dropDownMenu');
const aboutBtn = document.querySelector('#about');
const header = document.querySelector('.mainMenu');
const toTopBtn = document.querySelector('#toTopBtn');

const headerOffsetTop = header.offsetTop;

// Switch elements at certain resolution
if(window.screen.width < 700) {
    const sectionTwo = document.querySelector('.sectionTwo');
    const firstChild = sectionTwo.firstElementChild;
    sectionTwo.removeChild(sectionTwo.firstElementChild);
    sectionTwo.appendChild(firstChild);
}

addEventListener('resize', (e) => {
    if(window.screen.width > 550) {
        openMenu.style.display = 'none';
    } else if(window.screen.width < 550) {
        openMenu.style.display = 'block';
    }
})

addEventListener('scroll', () => {
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) toTopBtn.style.display = 'block';
    else toTopBtn.style.display = 'none';   
})

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

if(aboutBtn) {
    aboutBtn.addEventListener('click', () => {
        const sectionTwo = document.querySelector('.sectionTwo');
        sectionTwo.scrollIntoView();
    })
}

if(toTopBtn) {
    toTopBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
}