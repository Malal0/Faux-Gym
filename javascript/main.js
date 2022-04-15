//  Variables
const removeBtn = document.querySelector("#top-remove-btn");
const topTerms = document.querySelector("#topterms");
const menuBtn = document.querySelector("#menu-button");

//  Click Functions
removeBtn.addEventListener("click", (e) => {
    setTimeout(() => {
        topTerms.remove();
    }, 1);
});

menuBtn.addEventListener("click", (e) => {
    console.log(e);
})