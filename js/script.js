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
