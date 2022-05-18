//scroll arrow up button
const scrollBtn = document.querySelector(".scroll_top");

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 100) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }
};
refreshButtonVisibility();
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});

// hamburger menu
function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}