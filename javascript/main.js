//  Variables
const removeBtn = document.querySelector("#top-remove-btn");
const topTerms = document.querySelector("#topterms");
const menuBtn = document.querySelector("#menu-button");
const ul = document.querySelector("#ul");

//  Click Functions
removeBtn.addEventListener("click", (e) => {
    setTimeout(() => {
        topTerms.remove();
    }, 1);
});

menuBtn.addEventListener("click", (e) => {
    ul.classList.toggle("nodisplay");
    ul.classList.toggle("ulFlex");
    menuBtn.classList.toggle("open");
});