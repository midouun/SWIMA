const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const scrollBtn = document.getElementById("scrollTopBtn");

themeBtn.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

fetch('courts.json')
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById('courtsDropdown');
        dropdown.innerHTML = '<option value="">-- اختر المجلس القضائي (58 ولاية) --</option>';
        data.forEach(court => {
            const option = document.createElement('option');
            option.value = court.link;
            option.textContent = court.name;
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching courts:', error);
        document.getElementById('courtsDropdown').innerHTML = '<option>تعذر تحميل البيانات، تأكد من رفع ملف json</option>';
    });

fetch('rules.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('rulesContainer');
        container.innerHTML = '';
        data.forEach(chapter => {
            const div = document.createElement('div');
            div.className = 'law-chapter';
            div.innerHTML = `<h4>${chapter.title}</h4><p>${chapter.content}</p>`;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error fetching rules:', error);
        document.getElementById('rulesContainer').innerHTML = '<p style="text-align:center;">تعذر تحميل القوانين</p>';
    });

const tickerElement = document.getElementById('legalTicker');
const maxims = [
    "العقد شريعة المتعاقدين (المادة 106 مدني).",
    "لا جريمة ولا عقوبة إلا بنص (مبدأ الشرعية).",
    "البينة على من ادعى واليمين على من أنكر.",
    "الشك يفسر لمصلحة المتهم.",
    "الأصل في الأشياء الإباحة.",
    "الخاص يقيد العام.",
    "لا ضرر ولا ضرار.",
    "المتهم بريء حتى تثبت إدانته.",
    "القانون لا يحمي المغفلين لكنه يحمي المظلومين."
];
let currentIndex = 0;
setInterval(() => {
    tickerElement.style.opacity = 0;
    setTimeout(() => {
        tickerElement.innerText = maxims[currentIndex];
        tickerElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % maxims.length;
    }, 500);
}, 10000);

window.onscroll = function() {
    scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};
function topFunction() { window.scrollTo({top: 0, behavior: 'smooth'}); }
