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
        'What is your question 1?': 'What is your question 1?',
        'This is the answer 1.': 'This is the answer 1.',
        'What is your question 2?': 'What is your question 2?',
        'This is the answer 2.': 'This is the answer 2.',
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
        'What is your question 1?': 'რა არის თქვენი შეკითხვა 1?',
        'This is the answer 1.': 'ეს არის პასუხი 1.',
        'What is your question 2?': 'რა არის თქვენი შეკითხვა 2?',
        'This is the answer 2.': 'ეს არის პასუხი 2.',
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
        'What is your question 1?': 'Какой у вас вопрос 1?',
        'This is the answer 1.': 'Это ответ 1.',
        'What is your question 2?': 'Какой у вас вопрос 2?',
        'This is the answer 2.': 'Это ответ 2.',
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





// Amount of Snowflakes
var snowMax = 35;

// Snowflake Colours
var snowColor = ["rgb(255,255,255)", "rgb(2255,2255,255)"];

// Snow Entity
var snowEntity = "❄";

// Falling Velocity
var snowSpeed = 0.75;

// Minimum Flake Size
var snowMinSize = 8;

// Maximum Flake Size
var snowMaxSize = 24;

// Refresh Rate (in milliseconds)
var snowRefresh = 30;

// Additional Styles
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none; z-index: 1;";

/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

var snow = [],
  pos = [],
  coords = [],
  lefr = [],
  marginBottom,
  marginRight;

function randomise(range) {
  rand = Math.floor(range * Math.random());
  return rand;
}

function initSnow() {
  var snowSize = snowMaxSize - snowMinSize;
  marginBottom = document.body.scrollHeight - 5;
  marginRight = document.body.clientWidth - 15;

  for (i = 0; i <= snowMax; i++) {
    coords[i] = 0;
    lefr[i] = Math.random() * 15;
    pos[i] = 0.03 + Math.random() / 10;
    snow[i] = document.getElementById("flake" + i);
    snow[i].style.fontFamily = "inherit";
    snow[i].size = randomise(snowSize) + snowMinSize;
    snow[i].style.fontSize = snow[i].size + "px";
    snow[i].style.color = snowColor[randomise(snowColor.length)];
    snow[i].style.zIndex = 10;
    snow[i].style.opacity = .5;
    snow[i].sink = snowSpeed * snow[i].size / 5;
    snow[i].posX = randomise(marginRight - snow[i].size);
    snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
    snow[i].style.left = snow[i].posX + "px";
    snow[i].style.top = snow[i].posY + "px";
  }

  moveSnow();
}

function resize() {
  marginBottom = document.body.scrollHeight - 5;
  marginRight = document.body.clientWidth - 15;
}

function moveSnow() {
  for (i = 0; i <= snowMax; i++) {
    coords[i] += pos[i];
    snow[i].posY += snow[i].sink;
    snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
    snow[i].style.top = snow[i].posY + "px";

    if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
      snow[i].posX = randomise(marginRight - snow[i].size);
      snow[i].posY = 0;
    }
  }

  setTimeout("moveSnow()", snowRefresh);
}

for (i = 0; i <= snowMax; i++) {
  document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}

window.addEventListener('resize', resize);
window.addEventListener('load', initSnow);




/*


Santa scroll


*/




document.addEventListener('DOMContentLoaded', function () {
  var _scrollSpider = {
      config: {
          side: 'right',
          offset: '0px',
          tooltip: 'spider',
          image: './public/christmas-scroll.png',
          web: 'background: repeating-linear-gradient(45deg, #287843, #287843 3px, #579a6e 3px,  #579a6e 6px);width:2px;height:999em;position:absolute;right:66%;bottom:84%;'
      },
      move: function () {
          _scrollSpider.spider.style.top = ((document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100) + '%';
      },
      goingUp: false,
      applyOffset: function () {
          var img = _scrollSpider.spider.getElementsByTagName('img')[0];
          if (img) {
              _scrollSpider.spider.style.marginTop = '-' + img.height + 'px';
              _scrollSpider.spider.style.display = '';
          } else {
              window.addEventListener('load', _scrollSpider.applyOffset);
          }
      },
      init: function () {
          var spider = document.createElement('DIV');
          spider.id = 'scrollSpider';
          spider.innerHTML = '<div style="' + _scrollSpider.config.web + '"></div><img class="js-scroll-top-spider hvr-wobble-vertical" src="' + _scrollSpider.config.image + '" title="' + _scrollSpider.config.tooltip + '" srcset="' + _scrollSpider.config.image + ', ' + _scrollSpider.config.image.replace('.png', '@2x.png') + ' 2x">';
          spider.style.position = 'fixed';
          spider.style.zIndex = '4';
          spider.style[/left|right/i.test(_scrollSpider.config.side) ? _scrollSpider.config.side : 'right'] = _scrollSpider.config.offset;
          spider.style.top = '0%';
          spider.style.display = 'none';

          document.body.appendChild(spider);

          _scrollSpider.spider = spider;
          _scrollSpider.move();
          _scrollSpider.applyOffset();

          window.addEventListener('scroll', _scrollSpider.move);
          document.addEventListener('scroll', function (e) {
              var scrollTop = document.body.parentNode.scrollTop;
              if (scrollTop > 300) {
                  var img = _scrollSpider.spider.getElementsByTagName('img')[0];
                  _scrollSpider.spider.style.marginTop = '-' + img.height + 'px';
                  _scrollSpider.spider.style.display = '';
              }
          });
      }
  };

  _scrollSpider.init();
});
