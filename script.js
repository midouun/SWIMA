const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
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

// 2. جلب بيانات المحاكم (courts.json)
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
        console.error('Error:', error);
        document.getElementById('courtsDropdown').innerHTML = '<option>تعذر تحميل القائمة</option>';
    });

// 3. جلب القانون الداخلي (rules.json)
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
        console.error('Error:', error);
        document.getElementById('rulesContainer').innerHTML = '<p style="text-align:center;">تعذر تحميل القوانين</p>';
    });

// 4. شريط المبادئ
const tickerElement = document.getElementById('legalTicker');
const maxims = [
    "العقد شريعة المتعاقدين (المادة 106 مدني).",
    "الأصل في الأشياء الإباحة ما لم يرد نص بالتحريم.",
    "لا جريمة ولا عقوبة إلا بنص (مبدأ الشرعية).",
    "البينة على من ادعى واليمين على من أنكر.",
    "الشك يفسر لمصلحة المتهم.",
    "الخاص يقيد العام.",
    "المتهم بريء حتى تثبت إدانته."
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

// 5. زر الصعود
window.onscroll = function() {
    scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};
function topFunction() { window.scrollTo({top: 0, behavior: 'smooth'}); }
