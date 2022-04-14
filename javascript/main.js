const removeBtn = document.querySelector("#top-remove-btn");
const topTerms = document.querySelector("#topterms");

removeBtn.addEventListener("click", (e) => {
    setTimeout(() => {
        topTerms.remove();
    }, 1);
});