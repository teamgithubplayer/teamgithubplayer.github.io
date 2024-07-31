let slideIndex = [1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
let dotId = ["dot1", "dot2", "dot3", "dot4", "dot5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
carousel(0);
carousel(1);
carousel(2);
carousel(3);
carousel(4);

// Next/previous controls
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);
    if (n > slides.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[no]-1].style.display = "block";  
    dots[slideIndex[no]-1].className += " active";
}

function carousel(no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex[no]++;
    if (slideIndex[no] > slides.length) {slideIndex[no] = 1}
    slides[slideIndex[no]-1].style.display = "block";
    dots[slideIndex[no]-1].className += " active";
    setTimeout(carousel, 3000, no); // Change image every 2 seconds
}