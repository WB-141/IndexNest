function activateCard() {
  const hoverpairs = [
    { triggerId: "p-card1", triggerCard: "po-card1" },
    { triggerId: "p-card2", triggerCard: "po-card2" },
    { triggerId: "p-card3", triggerCard: "po-card3" },
    { triggerId: "pr-card1", triggerCard: "pr-card1-overlay" },
    { triggerId: "pr-card2", triggerCard: "pr-card2-overlay" },
    { triggerId: "pr-card3", triggerCard: "pr-card3-overlay" }
  ];


  hoverpairs.forEach(({ triggerId, triggerCard }) => {
    const trigger = document.getElementById(triggerId);
    const card = document.getElementById(triggerCard);

    if (trigger && card) {
      trigger.addEventListener("mouseenter", () => {
        card.classList.remove("hidden");
      });

      trigger.addEventListener("mouseleave", () => {
        card.classList.add("hidden");
      });
    }
  });
}

//Scroll functies
function scrollAboutMe() {
  const button = document.getElementById("aboutme-button");
  const section = document.getElementById("aboutMeSection");

  button.addEventListener("click", () => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
}

function watMaakIk() {
  const button = document.getElementById("watMaakIk-button");
  const section = document.getElementById("watMaakIkSection");

  button.addEventListener("click", () => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
}

function prijzen() {
  const button = document.getElementById("prijzen-button");
  const section = document.getElementById("prijzenSection");

  button.addEventListener("click", () => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
}

function countchar(){
  const question_box = document.querySelector('input[name="vraag"]');
  const max_len = 500;
  const character_count_text = document.getElementById("character_count")
  var character_count = 0
  question_box.addEventListener("input", () => {
  
  if(question_box.value.length < max_len){
    character_count = max_len - question_box.value.length;
    character_count_text.textContent = "karakters over: ${character_count}"
  }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  activateCard();
  scrollAboutMe();
  watMaakIk();
  prijzen();
  countchar();
});
