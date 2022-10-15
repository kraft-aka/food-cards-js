function CardSlider( sliderNum=0 ) {
  const slides = document.querySelectorAll(".slide");

  slides[sliderNum].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  });

  const clearActiveClasses = () =>
    slides.forEach((slide) => slide.classList.remove("active"));
}

CardSlider(3)