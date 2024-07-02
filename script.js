let nextDom = document.querySelector(".next");
let prevDom = document.querySelector(".prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");

nextDom.addEventListener("click", () => {
    showSlider("next");
});

prevDom.addEventListener("click", () => {
    showSlider("prev");
});

let timeRunning = 3000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let thumbnailSlider = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(thumbnailSlider[0]);
        carouselDom.classList.add("next");
        carouselDom.classList.remove("prev");
    } else {
        let lastItemPosition = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[lastItemPosition]);
        thumbnailDom.prepend(thumbnailSlider[lastItemPosition]);
        carouselDom.classList.add("prev");
        carouselDom.classList.remove("next");
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);
    
    clearTimeout(runTimeOut);
    
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
   
