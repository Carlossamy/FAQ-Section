document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Switch the 'active' class for the question that was clicked
      question.classList.toggle("active");

      if (answer.classList.contains("open")) {
        // Display the answer
        answer.style.height = "0";
        answer.classList.remove("open");
      } else {
        // Adjust the height to match the scrollHeight
        answer.style.height = answer.scrollHeight + "px";
        answer.classList.add("open");
      }

      // Close other open answers
      questions.forEach((q) => {
        if (q !== question) {
          const otherAnswer = q.nextElementSibling;
          q.classList.remove("active");
          otherAnswer.style.height = "0";
          otherAnswer.classList.remove("open");
        }
      });
    });
  });
});
