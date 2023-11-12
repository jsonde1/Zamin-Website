const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});

/*function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}*/

function handleScroll() {
  const h2Element = document.querySelector(".animate-scale-in");
  if (isElementInViewport(h2Element)) {
    console.log("RUNNINGGG");
    h2Element.style.animationPlayState = "running";
  }
}

window.addEventListener("scroll", handleScroll);

function toggleContent() {
  var content = document.querySelector(".content");
  var button = document.querySelector("button");
  var paragraph = document.querySelector(".text_1");

  content.classList.toggle("expanded");
  button.textContent = content.classList.contains("expanded")
    ? "Read Less"
    : "Read More";

  paragraph.classList.toggle("slide-up");
}

function toggleContent2() {
  var content = document.querySelector(".content");
  var button = document.querySelector("button");
  var paragraph = document.querySelector(".text_2");

  content.classList.toggle("expanded");
  button.textContent = content.classList.contains("expanded")
    ? "Read Less"
    : "Read More";

  paragraph.classList.toggle("slide-up");
}

function toggleContent3() {
  var content = document.querySelector(".content");
  var button = document.querySelector("button");
  var paragraph = document.querySelector(".text_3");

  content.classList.toggle("expanded");
  button.textContent = content.classList.contains("expanded")
    ? "Read Less"
    : "Read More";

  paragraph.classList.toggle("slide-up");
}

function toggleContent4() {
  var content = document.querySelector(".content");
  var button = document.querySelector("button");
  var paragraph = document.querySelector(".text_4");

  content.classList.toggle("expanded");
  button.textContent = content.classList.contains("expanded")
    ? "Read Less"
    : "Read More";

  paragraph.classList.toggle("slide-up");
}

/*var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

var prevButton = document.querySelector(".carousel-prev");
var nextButton = document.querySelector(".carousel-next");

prevButton.addEventListener("click", function () {
  slideIndex--;
  showSlides();
});

nextButton.addEventListener("click", function () {
  slideIndex++;
  showSlides();
}); */

var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};
