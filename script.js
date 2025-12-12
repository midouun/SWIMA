const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const noResults = document.getElementById('noResults');
const scrollBtn = document.getElementById("scrollTopBtn");

// 1. الوضع الليلي
themeBtn.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// 2. البحث الذكي (للبطاقات)
searchInput.addEventListener('keyup', (e) => {
    const text = e.target.value.toLowerCase();
    let hasResults = false;

    cards.forEach(card => {
        const title = card.getAttribute('data-title');
        if (title.includes(text)) {
            card.style.display = "block";
            hasResults = true;
        } else {
            card.style.display = "none";
        }
    });

    if (hasResults) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
});

// 3. زر الصعود
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
function topFunction() { window.scrollTo({top: 0, behavior: 'smooth'}); }

// 4. شريط المبادئ القانونية (كل 10 ثواني)
const tickerElement = document.getElementById('legalTicker');
const maxims = [
    "العقد شريعة المتعاقدين (المادة 106 مدني).",
    "الأصل في الأشياء الإباحة ما لم يرد نص بالتحريم.",
    "لا جريمة ولا عقوبة إلا بنص (مبدأ الشرعية).",
    "البينة على من ادعى واليمين على من أنكر.",
    "الجهل بالقانون ليس عذراً.",
    "الشك يفسر لمصلحة المتهم.",
    "الغرم بالغنم (من ينال النفع يتحمل الضرر).",
    "الخاص يقيد العام.",
    "لا ضرر ولا ضرار."
];

let currentIndex = 0;

function updateTicker() {
    tickerElement.style.opacity = 0;
    setTimeout(() => {
        tickerElement.innerText = maxims[currentIndex];
        tickerElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % maxims.length;
    }, 500);
}

setInterval(updateTicker, 10000);
updateTicker();
