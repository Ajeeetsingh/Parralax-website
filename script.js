//PARALLAX

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

// SWIPER

let keys = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

let slider = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".planet-links",
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class="' + className + '">' + keys[index] + "</div>";
        }
    }
});

//SLIDE ANIMATION 

slider.on("slideChange", function() {
    gasp.to(".slide-text span", 0.2, {
        x: "-100px"
    })
    gasp.to(".slide-number span", 0.2, {
        x: "-100px"
    })
    gasp.to(".slide-detail span", 0.5, {
        x: "-1000px"
    })
    gasp.to(".slide-detail-facts div", 0.5, {
        x: "-1000px"
    })
    gasp.to(".swiper-slide-active", 0.5, {
        scale: 0.85
    })
    gasp.to(".swiper-slide .slide-img", 1, {
        rotation: 20
    })
})

slider.on("slideChangeTransitionEnd", function() {
    gasp.to(".slide-text span", 0.2, {
        x: 0,
        delay: 0.1
    })
    gasp.to(".slide-text span", 0.2, {
        x: "100px",
    })
    gasp.to(".slide-number span", 0.2, {
        x: 0,
        delay: 0.1
    })
    gasp.to(".slide-number span", 0.2, {
        x: "100px",
    })
    gasp.to(".slide-detail span", 0.5, {
        x: 0
    })
    gasp.to(".slide-detail-facts div", 0.5, {
        x: 0
    })
    gasp.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
    })
    gasp.to(".swiper-slide .slide-img", 1, {
        rotation: 10
    })
})