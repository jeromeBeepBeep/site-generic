const paragraphs = document.querySelectorAll(".typewriter > *");

let currentLetter = 0;
let currentParagraph = 0;

const typeWriter = () => {
  if (
    currentLetter <
    paragraphs[currentParagraph].textContent.length
  ) {
    paragraphs[currentParagraph].setAttribute(
      "data-content",
      paragraphs[currentParagraph].textContent.slice(
        0,
        currentLetter + 1
      )
    );
    currentLetter++;
  } else {
    currentParagraph++;
    currentLetter = 0;
  }

  if (currentParagraph === paragraphs.length) return;

  if (
    currentLetter ===
    paragraphs[currentParagraph].textContent.length
  )
    setTimeout(typeWriter, 125);
  else setTimeout(typeWriter, 10);
};

typeWriter();