const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering.",
    "I speak three languages fluently.",
    "I am 26 years old and love to play games like chess, cricket, football, and badminton."
];

document.getElementById('generate-fact').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
