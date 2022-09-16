const body = document.querySelector('body');
const toggleColorPref = document.getElementById('hero-btn');

const pref = window.matchMedia('(prefers-color-scheme: dark)');
console.log(pref); // TRUE if user prefers dark mode

if (pref.media == '(prefers-color-scheme: dark)') {
    body.classList.add('darkmode');
} else {
    body.classList.remove('darkmode');
}

toggleColorPref.addEventListener('click', () => {
    /*
    if pref = light
    set pref to dark
    else
    set pref to light
    */
    if (body.classList.contains('darkmode')) {
        body.classList.remove('darkmode');
    } else {
        body.classList.add('darkmode');
    }

    console.log(pref.media)
})