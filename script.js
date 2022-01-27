// TOGGLE DARK/MODE ICON BUTTON
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
// NAVIGATION BAR OPEN AND CLOSE FOR MOBILE

const nav = document.querySelector("nav");
const close = document.querySelector(".close-svg");
const menu = document.querySelector(".menu-svg");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
  menu.style.display.toggle("none");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

// SCROLL APPEARRING ANIMATION FOR EXPLORE SECTION

function scrollAnimation() {
  const explorePage = document.querySelectorAll(".Explore-page");

  for (let i = 0; i < explorePage.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = explorePage[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      explorePage[i].classList.add("active");
    } else {
      explorePage[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", scrollAnimation);

// CAROUSEL FOR PACKAGES SECTION

let packageIndex = 1;
showPackages(packageIndex);

function plusPackages(n) {
  showPackages((packageIndex += n));
}

function currentPackage(n) {
  showPackages((packageIndex = n));
}

function showPackages(n) {
  let i;
  const packages = document.getElementsByClassName("package-details");
  const dots = document.getElementsByClassName("dot");
  if (n > packages.length) {
    packageIndex = 1;
  }
  if (n < 1) {
    packageIndex = packages.length;
  }
  for (i = 0; i < packages.length; i++) {
    packages[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  packages[packageIndex - 1].style.display = "block";
  dots[packageIndex - 1].className += " active1";
}

// SWIPER CAROUSEL FOR REVIEWS SECTION
const swiper = new Swiper(".review-swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
