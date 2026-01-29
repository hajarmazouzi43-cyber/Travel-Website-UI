document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const answers = ["q1", "q2", "q3"];
  let score = { calm: 0, culture: 0, adventure: 0 };

  answers.forEach(q => {
    const answer = document.querySelector(`input[name="${q}"]:checked`);
    if (answer) score[answer.value]++;
  });

  let personality = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  const resultBox = document.getElementById("result");

  const personalities = {
    calm: {
      title: "🌙 The Quiet Explorer",
      text: "You travel to reconnect with yourself.",
      suggestions: "Suggested destinations: Bali, Santorini, Kyoto"
    },
    culture: {
      title: "🏛️ The Culture Seeker",
      text: "You love history, art, and stories.",
      suggestions: "Suggested destinations: Rome, Paris, Istanbul"
    },
    adventure: {
      title: "⚡ The Adventurer",
      text: "You chase excitement and new challenges.",
      suggestions: "Suggested destinations: Peru, Iceland, New Zealand"
    }
  };

  const p = personalities[personality];

const packLinks = {
  calm: "pack-calm.html",
  culture: "pack-culture.html",
  adventure: "pack-adventure.html"
};

resultBox.innerHTML = `
  <h2>${p.title}</h2>
  <p>${p.text}</p>
  <p><strong>${p.suggestions}</strong></p>
  <button id="goPack">View My Travel Pack</button>
`;

document.getElementById("goPack").addEventListener("click", () => {
  window.location.href = packLinks[personality];
});

});
