const bannerImg = document.getElementById("banner");
const imgArr = ["imgs/b2.png", "imgs/b1.png", "imgs/b4.png", "imgs/b3.png","imgs/b5.png"];
let index = 0;

function startBannerSlider() {
    setInterval(() => {
        index = (index + 1) % imgArr.length;
        bannerImg.src = imgArr[index];
    }, 2000);
}

const navRight = document.querySelector(".nav_right");

const menu = document.querySelector(".menu");
const cross = document.querySelector(".hidden");

menu.addEventListener("click", () => {
    navRight.style.right = "0";
    cross.classList.remove("hidden");
});

if (cross) {
    cross.addEventListener("click", () => {
        navRight.style.right = "-2000px";
    })
}
