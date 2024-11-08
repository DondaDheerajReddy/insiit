function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  const arrow = button.querySelector(".arrow");

  if (answer.classList.contains("open")) {
    answer.classList.remove("open");
    arrow.classList.remove("open");
  } else {
    answer.classList.add("open");
    arrow.classList.add("open");
  }
}
