function activateCard() {
  const overlay = document.getElementById("po-card1");
  const default_card = document.getElementById("p-card1");

  default_card.addEventListener("mouseenter", () => {
    overlay.classList.remove("hidden");
  });

  default_card.addEventListener("mouseleave", () => {
    overlay.classList.add("hidden");
  });

  const overlay1 = document.getElementById("po-card2");
  const default_card1 = document.getElementById("p-card2");

  default_card1.addEventListener("mouseenter", () => {
    overlay1.classList.remove("hidden");
  });

  default_card1.addEventListener("mouseleave", () => {
    overlay1.classList.add("hidden");
  });

  const overlay2 = document.getElementById("po-card3");
  const default_card2 = document.getElementById("p-card3");

  default_card2.addEventListener("mouseenter", () => {
    overlay2.classList.remove("hidden");
  });

  default_card2.addEventListener("mouseleave", () => {
    overlay2.classList.add("hidden");
  });

  const pricetag1 = document.getElementById("pr-card1-overlay");
  const default_pricetag1 = document.getElementById("pr-card1");

  default_pricetag1.addEventListener("mouseenter", () => {
    pricetag1.classList.remove("hidden");
  });

  default_pricetag1.addEventListener("mouseleave", () => {
    pricetag1.classList.add("hidden");
  });
}

function scrollAboutMe(){
    const button = document.getElementById("aboutme-button")
    const section = document.getElementById("aboutMeSection")

    button.addEventListener("click", () => {
        event.preventDefault(); 
        section.scrollIntoView({ behavior: "smooth" });
    })
}

function watMaakIk(){
    const button = document.getElementById("watMaakIk-button")
    const section = document.getElementById("watMaakIkSection")

    button.addEventListener("click", () => {
        event.preventDefault(); 
        section.scrollIntoView({ behavior: "smooth" });
    })
}

function prijzen(){
    const button = document.getElementById("prijzen-button")
    const section = document.getElementById("prijzenSection")

    button.addEventListener("click", () => {
        event.preventDefault(); 
        section.scrollIntoView({ behavior: "smooth" });
    })
}



scrollAboutMe();
watMaakIk();
prijzen();
activateCard();
