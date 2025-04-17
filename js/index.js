const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

var avtive_nav = "";

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('active')
});

let elem =document.getElementById('home-nav')
 elem.classList.add('active')


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

let slideIndex = 0;
let autoSlideTimeout;
const slideDurations = [2000, 6000, 4000]; // ms for slide 1, 2, 3

const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slideIndex = (n + slides.length) % slides.length; // wrap around
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(() => {
    showSlide(slideIndex + 1);
  }, slideDurations[slideIndex]);
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

function currentSlide(n) {
  showSlide(n - 1);
}

// Start the slideshow
window.onload = () => {
  showSlide(0);
};