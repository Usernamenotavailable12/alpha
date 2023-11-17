$(function() {
  // Create HTML for the FAQ content with expansion panels
  var faqContent = `
    <div class="faq-item">
      <div class="faq-question translate" data-original="What is your question 1?" data-key="question_0" onclick="toggleAnswer(0)">What is your question 1?</div>
      <div class="faq-answer translate" data-original="This is the answer 1." data-key="answer_0" id="faq-answer-0">This is the answer 1.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question translate" data-original="What is your question 2?" data-key="question_1" onclick="toggleAnswer(1)">What is your question 2?</div>
      <div class="faq-answer translate" data-original="This is the answer 2." data-key="answer_1" id="faq-answer-1">This is the answer 2.</div>
    </div>

    <div class="faq-item">
    <div class="faq-question translate" data-original="What is your question 2?" data-key="question_1" onclick="toggleAnswer(2)">What is your question 2?</div>
    <div class="faq-answer translate" data-original="This is the answer 2." data-key="answer_2" id="faq-answer-2">This is the answer 2.</div>
    </div>
  `;

  // Insert FAQ content into the specified container
  $("#faq-container").html(faqContent);

  // Retrieve the selected language from sessionStorage
  const storedLanguage = sessionStorage.getItem('selectedLanguage');

  // Call the changeLanguage function with the stored language, or default to ENG
  changeLanguage(storedLanguage || 'ENG');
});

// Function to toggle the answer visibility
function toggleAnswer(index) {
  var answerDiv = $("#faq-answer-" + index);
  answerDiv.slideToggle();
}
  // Store the selected language in sessionStorage
  sessionStorage.setItem('selectedLanguage', language);

  // Update the displayed language in the switcher
  document.querySelector('.lang-switcher').innerText = language;

