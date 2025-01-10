
//menu bar 
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


//dynamic name typing
document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome, my name is Nahom Zenebe";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    const typeEffect = () => {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
            setTimeout(typeEffect, 100); 
        }
    };

    typeEffect();
});






//image and text slider
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "./src/images/person-image.jpg",
        "./src/images/person-image1.jpg",
   
    ];

    const texts = [
        "Hi! My name is Nahom Zenebe. I live in Addis Ababa.",
        "I am a MERN Stack Developer.",
        "I enjoy creating innovative solutions.",
       
       
        
    ]; 

    let currentIndex = 0;

    const carouselImage = document.getElementById("carousel-image");
    const dynamicText = document.getElementById("dynamic-text");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    
    carouselImage.src = images[currentIndex];
    dynamicText.textContent = texts[currentIndex];

    const updateContent = () => {
        carouselImage.src = images[currentIndex];
        dynamicText.textContent = texts[currentIndex];
    };

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent();
    });
});



//project reponsive slide


let currentSlide = 0;
const slides = document.querySelectorAll(".project-wrapper > div");
const totalSlides = slides.length;

function moveSlide(direction) {
    slides[currentSlide].style.display = 'none'; 
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; 
    slides[currentSlide].style.display = 'block'; 
}


slides[currentSlide].style.display = 'block';






//form vaildaton



document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

   
    if (name && email && message) {
      
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";

       
        document.getElementById("myForm").reset();
    } else {
       
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
    }
});



