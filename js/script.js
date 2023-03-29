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
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 5000, //auto-play cada 5 sec
        pauseOnMouseEnter: true, //pasa maus y pausa slides
        disableOnInteraction: false, //vuelva a lo mismo
    },
});
// swiperMainPage END

// modo osucro START
let btnNight = document.querySelector("#BtnNight");
btnNight.addEventListener("click", () => {
    document.documentElement.classList.toggle("night-mode");
    btnNight.classList.toggle("bxs-moon");
});
// modo osucro END