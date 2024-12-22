
var btn = $('#scrollUp');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
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

// document.addEventListener("DOMContentLoaded", function () {
//   const humbergerMenu = document.querySelector(".humberger-menu");
//   const navList = document.querySelector(".nav-list");

//   humbergerMenu.addEventListener("click", function () {
//     navList.classList.toggle("active");
//   });
// });


dodocument.addEventListener('DOMContentLoaded', function() {
  var items = document.querySelectorAll('.slider-item');
  items.forEach(function(item) {
      item.addEventListener('click', function() {
          alert('محصول انتخاب شد!');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var slider = document.querySelector('.slider');
  var items = document.querySelectorAll('.slider-item');
  var currentIndex = 0;
  var itemsToShow = 4;

  document.getElementById('next').addEventListener('click', function() {
      if (currentIndex < items.length - itemsToShow) {
          currentIndex++;
          updateSlider();
      }
  });

  document.getElementById('prev').addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
      }
  });

  function updateSlider() {
      var offset = -currentIndex * (100 + 20); // ۱۰۰ پیکسل عرض آیتم + ۱۰ پیکسل فاصله در هر طرف
      slider.style.transform = 'translateX(' + offset + 'px)';
  }

  updateSlider();
});







$('.responsive').slick({
  dots: true,
	prevArrow: $('#prev'),
	nextArrow: $('#next'),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});