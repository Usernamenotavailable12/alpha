function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}
let currentIndex = 0;
const slides = document.querySelector('.carousel-inner');
const totalSlides = document.querySelectorAll('.slide').length;
/* 

Slider

*/
function showSlide(index) {
  if (index < 0) {
  currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
  currentIndex = 0;
  } else {
  currentIndex = index;
  }
  
  const translateValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
  }
  
  function autoSlide() {
  setInterval(function () {
  showSlide(currentIndex + 1);
  }, 4500); // Change slide every 3 seconds
  }
  
  autoSlide();

/* 

Lang

*/


  let currentLanguage = 'ENG';
  let originalTexts = {};

  document.addEventListener('DOMContentLoaded', function () {
    // Store original texts on page load
    const elementsToTranslate = document.querySelectorAll('.translate');
    elementsToTranslate.forEach((element) => {
      const originalText = element.dataset.original;
      originalTexts[originalText] = element.innerText;
    });
  });

  function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('.translate');
    const translations = {
      'ENG': {
        // English translations are the same as original texts
        // Add translations here if needed
      },
      'GEO': {
        'MAIN': 'მთავარი',
        'SLOTS': 'სლოტები',
        'CASINO': 'კაზინო',
        'SHOP': 'მაღაზია',
        'REGISTER': 'რეგისტრაცია',
        'LOGIN': 'შესვლა',
        'Registration Form': 'რეგისტრაციის ფორმა',
        'Username': 'სახელი',
        'Email': 'ელ-ფოსტა',
        'Password': 'პაროლი',
        'Register': 'რეგისტრაცია',
        'Sweet Bozana': 'Sweet Bozana',
        'Description for the Game.': 'თამაშის აღწერა',
        'About Us': 'ჩვენს შესახებ',
        'This is the about us section of your website.': 'ეს არის ვებსაიტის ჩვენ შესახებ განყოფილება.',
        'Contact': 'კონტაქტი',
        'Feel free to reach out to us at contact@example.com.': 'დაგვიკავშირდით contact@example.com-ზე.',
        'Search': 'ძებნა',
        'Slide 1 Text': 'ტექსტი 1',
        'Learn More': 'დეტალები',
        'Item 1': 'აითემი 1',
        'Buy': 'ყიდვა',
      },
      'RUS': {
        'MAIN': 'ГЛАВН',
        'SLOTS': 'СЛОТ',
        'CASINO': 'КАЗИНО',
        'SHOP': 'МАГАЗ',
        'REGISTER': 'РЕГИСТР',
        'LOGIN': 'ВОЙТИ',
        'Registration Form': 'Форма регистрации',
        'Username': 'Логин',
        'Email': 'Эл. почта',
        'Password': 'Пароль',
        'Register': 'Регистр',
        'Sweet Bozana': 'Sweet Bozana',
        'Description for the Game.': 'Описание к игре.',
        'About Us': 'О нас',
        'This is the about us section of your website.': 'Это раздел «О нас» вашего сайта.',
        'Contact': 'Контакт',
        'Feel free to reach out to us at contact@example.com.': 'Не стесняйтесь обращаться к нам по адресу contact@example.com.',
        'Search': 'Поиск',
        'Slide 1 Text': 'Текст 1',
        'Learn More': 'Узнать больше',
        'Item 1': 'Пункт 1',
        'Buy': 'Купить',
      },
    };


    elementsToTranslate.forEach((element) => {
      const originalText = element.dataset.original;
      element.innerText = translations[language][originalText] || originalTexts[originalText];
  
      // Check if the current language is Georgian and apply the special font
      if (language === 'GEO') {
        element.style.fontFamily = 'Lato';
        element.style.fontWeight = 'Bold';
      } else {
        // Remove the special font style if the language is not Georgian
        element.style.fontFamily = 'inherit';
        element.style.fontWeight = 'inherit';
      }
    });
  
    // Store the selected language in sessionStorage
    sessionStorage.setItem('selectedLanguage', language);
  
    // Close language options after selection
    document.getElementById('langOptions').style.display = 'none';
  
    // Update the displayed language in the switcher
    document.querySelector('.lang-switcher').innerText = language;
  }
  
  // Function to retrieve the selected language from sessionStorage
  function getSelectedLanguage() {
    return sessionStorage.getItem('selectedLanguage') || 'ENG'; // Default to English if not set
  }
  
  // Call changeLanguage with the stored language when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    const storedLanguage = getSelectedLanguage();
    changeLanguage(storedLanguage);
  });





function toggleLangOptions() {
  const langOptions = document.getElementById('langOptions');
  langOptions.style.display = langOptions.style.display === 'block' ? 'none' : 'block';
}

