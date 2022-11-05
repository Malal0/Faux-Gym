const body = document.querySelector('body');
const pref = window.matchMedia('(prefers-color-scheme: dark)');
console.log(pref); // TRUE if user prefers dark mode
const toggleColorPref = document.getElementById('hero-btn');
const searchBtnL = document.getElementById('search-btn-L');
const searchInputL = document.getElementById('searchInput-L');
const deleteBtnL = document.getElementById('delete-btn-L');
const searchBtnS = document.getElementById('search-btn-S');
const searchInputS = document.getElementById('searchInput-S');
const deleteBtnS = document.getElementById('delete-btn-S');
const menuBtn = document.getElementById('menu-btn');
const navEl = document.querySelector('nav');
const ctaContainer = document.getElementById('cta-container');
const heroBtn = document.getElementById('hero-btn');
const navSmall = document.getElementById('nav-bar-small');

if (pref) {
    body.classList.add('darkmode');
} else {
    body.classList.remove('darkmode');
}

toggleColorPref.addEventListener('click', () => {
    if (body.classList.contains('darkmode')) {
        body.classList.remove('darkmode');
    } else {
        body.classList.add('darkmode');
    }
})

// menuBtn.addEventListener('click', () => {
//     // navEl.classList.toggle('mobile-menu-open');
//     // ctaContainer.classList.toggle('no-display');
//     // heroBtn.classList.toggle('no-display');
//     // body.classList.toggle('full-screen');
// })

//  search bar code

searchBtnL.addEventListener('click', () => {
    searchInputL.focus();
});

deleteBtnL.addEventListener('click', () => {
    searchInputL.value = '';
    searchInputL.focus();
});

searchBtnS.addEventListener('click', () => {
    searchInputS.focus();
});

deleteBtnS.addEventListener('click', () => {
    searchInputS.value = '';
    searchInputS.focus();
});

//  search bar code

menuBtn.addEventListener('click', () => {
    navSmall.classList.toggle('open');
    const imageEl = menuBtn.childNodes[1];

    if (navSmall.classList.contains('open')) {
        imageEl.src = "./images/x-icon.svg"
    } else {
        imageEl.src = "./images/menu btn.svg"
    }
});