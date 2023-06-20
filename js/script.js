function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const h2Element = document.querySelector(".animate-scale-in");
  if (isElementInViewport(h2Element)) {
    console.log("RUNNINGGG");
    h2Element.style.animationPlayState = "running";
  }
}

window.addEventListener("scroll", handleScroll);

Calendly.initInlineWidget({
  url: "https://calendly.com/joshuasonde",
  parentElement: document.getElementById("calendly"),
  prefill: {},
  utm: {},
});

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

var slideIndex = 0;
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
});
