const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const searchInput = document.getElementById('searchInput');
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

// 2. زر الصعود
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
function topFunction() { window.scrollTo({top: 0, behavior: 'smooth'}); }

// 3. شريط المبادئ (كل 10 ثواني)
const tickerElement = document.getElementById('legalTicker');
const maxims = [
    "العقد شريعة المتعاقدين (المادة 106 مدني).",
    "الأصل في الأشياء الإباحة ما لم يرد نص بالتحريم.",
    "لا جريمة ولا عقوبة إلا بنص (مبدأ الشرعية).",
    "البينة على من ادعى واليمين على من أنكر.",
    "الجهل بالقانون ليس عذراً.",
    "الخاص يقيد العام.",
    "لا ضرر ولا ضرار.",
    "المتهم بريء حتى تثبت إدانته."
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
