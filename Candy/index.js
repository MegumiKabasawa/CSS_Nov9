// script.js
const quizForm = document.getElementById("quizForm");
const submitButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");
const feedbackParagraph = document.getElementById("feedback");

submitButton.addEventListener("click", function () {
    const userAnswer = document.querySelector('input[name="question1"]:checked').value;

    if (userAnswer === "red") {
        feedbackParagraph.textContent = "正解です！りんごは赤色です。";
    } else {
        feedbackParagraph.textContent = "不正解です。りんごは赤色です。";
    }

    resultDiv.style.display = "block";
});
