const body = document.querySelector('body');
const pref = window.matchMedia('(prefers-color-scheme: dark)');
console.log(pref); // TRUE if user prefers dark mode
const toggleColorPref = document.getElementById('hero-btn');
const searchBtn = document.getElementById('search-btn');
const deleteBtn = document.getElementById('delete-btn');
const searchInput = document.getElementById('searchInput');
const menuBtn = document.getElementById('menu-btn');
const navEl = document.querySelector('nav');
const ctaContainer = document.getElementById('cta-container');
const heroBtn = document.getElementById('hero-btn');

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

searchBtn.addEventListener('click', () => {
    searchInput.focus();
});

deleteBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
});