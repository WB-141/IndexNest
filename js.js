function scrolltoview() {
  const cto_buttons = [
    { triggerID: "pakket", scrollID: "watleverik" },
    { triggerID: "offerte", scrollID: "contact" },
  ];

  cto_buttons.forEach(({ triggerID, scrollID }) => {
    const button = document.getElementById(triggerID);
    const section = document.getElementById(scrollID);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function countchar() {
  const question_box = document.getElementById("question-box");
  const character_count_text = document.getElementById("character_count");
  const max_len = 500;
  question_box.addEventListener("input", () => {
    const character_count = max_len - question_box.value.length;
    character_count_text.textContent = `karakters over: ${character_count}`;
  });

  question_box.addEventListener("keydown", (e) => {
    if (
      question_box.value.length >= max_len &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      !e.ctrlKey &&
      !e.metaKey
    ) {
      e.preventDefault();
    }
  });
}

function accordion() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Sluit eerst alle andere antwoorden
      document.querySelectorAll(".faq-answer").forEach((el) => {
        if (el !== answer) el.classList.remove("open");
      });

      // Toggle huidige antwoord
      answer.classList.toggle("open");
    });
  });
}

function preview() {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slider-image");

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  slides[currentIndex].classList.add("active");

  setInterval(showNextSlide, 4000);
}

preview();
accordion();
scrolltoview();
countchar();
