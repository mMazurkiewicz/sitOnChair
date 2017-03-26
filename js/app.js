document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM");

    var next = document.querySelector("#nextPicture");
    var prev = document.querySelector("#prevPicture");
    var allPics = document.querySelectorAll(".fourty ul li");
    var picNumber = 0;

    allPics[picNumber].classList.toggle("animated");
    allPics[picNumber].classList.toggle("fadeIn");
    allPics[picNumber].classList.toggle("visible");


    next.addEventListener("click", function() {
        console.log("next click");
        allPics[picNumber].classList.toggle("animated");
        allPics[picNumber].classList.toggle("fadeIn");
        allPics[picNumber].classList.toggle("visible");
        picNumber++;

        if (picNumber >= allPics.length) {
            picNumber = 0;
        }

        allPics[picNumber].classList.toggle("animated");
        allPics[picNumber].classList.toggle("fadeIn");
        allPics[picNumber].classList.toggle("visible");
    });

    prev.addEventListener("click", function() {
        console.log("prev click");
        allPics[picNumber].classList.toggle("animated");
        allPics[picNumber].classList.toggle("fadeIn");
        allPics[picNumber].classList.toggle("visible");
        picNumber--;
        if (picNumber < 0) {
            picNumber = allPics.length - 1;
        }
        allPics[picNumber].classList.toggle("animated");
        allPics[picNumber].classList.toggle("fadeIn");
        allPics[picNumber].classList.toggle("visible");
    });


})
