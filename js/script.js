const carouselBody = document.getElementById('carousel-body');

carouselBody.innerHTML +=
    `<div class="slide active">
        <img src="./img/01.jpg" alt="">
    </div>`;

for ( let i = 2 ; i <= 5 ; i++){
    carouselBody.innerHTML +=
        `<div class="slide">
            <img src="./img/0${i}.jpg" alt="">
        </div>`; 
}

carouselBody.innerHTML +=
    `<div class="carousel__arrow arrow-left">
        <i class="fa-solid fa-chevron-left"></i>
    </div>

    <div class="carousel__arrow arrow-right">
        <i class="fa-solid fa-chevron-right"></i>
    </div>` ;