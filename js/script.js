// Add custom JavaScript here

function runTypingEffect() {
  let text = "I am John Doe.";
  const typingElement = document.querySelector("#typing-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, element, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text[i];
    }, delay * i);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  runTypingEffect();
});
