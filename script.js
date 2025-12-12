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

// 2. البحث (يعمل مع البطاقات فقط حالياً)
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

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
