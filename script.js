// Magic Card Flip Game Script

const cards = document.querySelectorAll(".card");
let flippedCards = [];
let lockBoard = false;

// Shuffle cards (randomize positions)
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 6);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => {
  card.addEventListener("click", flipCard);
});

function flipCard() {
  if (lockBoard || this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  this.textContent = this.getAttribute("data-card");

  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  let [card1, card2] = flippedCards;

  if (card1.dataset.card === card2.dataset.card) {
    flippedCards = [];
  } else {
    lockBoard = true;
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.textContent = "";
      card2.textContent = "";
      flippedCards = [];
      lockBoard = false;
    }, 1000);
  }
}

// Loading Animation Toggle
// Loader toggle
const toggleBtn = document.getElementById("toggle-btn");
const loader = document.getElementById("loader");

toggleBtn.addEventListener("click", () => {
  loader.style.display = loader.style.display === "none" ? "block" : "none";
});
