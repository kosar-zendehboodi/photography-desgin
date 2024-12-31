var btn = $("#scrollUp");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

const images = [
  "img/photo-1431578500526-4d9613015464-1920x550.jpg",
  "img/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-1920x550.jpg",
  "img/119H-1920x550.jpg",
  "img/photo-1431578500526-4d9613015464-1920x550.jpg",
  "img/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-1920x550.jpg",
];

let currentIndex = 0;

const sliderImage = document.querySelector(".slider-image");
const dots = document.querySelectorAll(".nav-dots span");

function updateSlider(index) {
  sliderImage.src = images[index];
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(index);
  });
});

// Initialize
updateSlider(currentIndex);
setInterval(autoSlide, 5000); // Change image every



const slider = document.getElementById("slider");
const nextButton = document.getElementById("next");

nextButton.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});


