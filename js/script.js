// header START
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .navBar");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuBtn.classList.toggle("bx-x");
})

document.addEventListener("click", (event) => {
    if (event.target.closest(".header")) {
        return 0;
    }

    navBar.classList.remove("active");
    menuBtn.classList.remove("bx-x");
})
// header END

// swiperMainPage START
var swiper = new Swiper(".photoMainPage", {
    loop: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
});
// swiperMainPage END