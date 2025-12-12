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

// 2. المودال
const modal = document.getElementById("forumModal");
function openForumModal(yearName) {
    document.getElementById("modalTitle").innerText = "بوابة المشاركة - " + yearName;
    modal.style.display = "block";
}
function closeForumModal() { modal.style.display = "none"; }
window.onclick = function(event) { if (event.target == modal) modal.style.display = "none"; }

// 3. المحاكم
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
    .catch(err => console.error(err));

// 4. القانون
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
    .catch(err => console.error(err));

// 5. الشريط المتحرك
const tickerElement = document.getElementById('legalTicker');
const maxims = ["العقد شريعة المتعاقدين", "لا جريمة إلا بنص", "الأصل البراءة", "الشك يفسر لمصلحة المتهم"];
let idx = 0;
setInterval(() => {
    tickerElement.style.opacity = 0;
    setTimeout(() => {
        tickerElement.innerText = maxims[idx];
        tickerElement.style.opacity = 1;
        idx = (idx + 1) % maxims.length;
    }, 500);
}, 8000);

// 6. الصعود
window.onscroll = function() {
    scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};
function topFunction() { window.scrollTo({top: 0, behavior: 'smooth'}); }
