document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. تفعيل الوضع الليلي (Dark Mode)
    // ==========================================
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // التحقق من التفضيل المحفوظ مسبقاً
    if(localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        body.classList.add('dark-mode'); // للتوافق مع CSS
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            body.classList.remove('dark-mode');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            body.classList.add('dark-mode');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==========================================
    // 2. بيانات المحاكم (58 ولاية)
    // ==========================================
    const courtsData = [
        { name: "01 - مجلس قضاء أدرار", link: "https://cour-adrar.mjustice.dz/" },
        { name: "02 - مجلس قضاء الشلف", link: "https://cour-chlef.mjustice.dz/" },
        { name: "03 - مجلس قضاء الأغواط", link: "https://cour-laghouat.mjustice.dz/" },
        { name: "04 - مجلس قضاء أم البواقي", link: "https://cour-oum-el-bouaghi.mjustice.dz/" },
        { name: "05 - مجلس قضاء باتنة", link: "https://cour-batna.mjustice.dz/" },
        { name: "06 - مجلس قضاء بجاية", link: "https://cour-bejaia.mjustice.dz/" },
        { name: "07 - مجلس قضاء بسكرة", link: "https://cour-biskra.mjustice.dz/" },
        { name: "08 - مجلس قضاء بشار", link: "https://cour-bechar.mjustice.dz/" },
        { name: "09 - مجلس قضاء البليدة", link: "https://cour-blida.mjustice.dz/" },
        { name: "10 - مجلس قضاء البويرة", link: "https://cour-bouira.mjustice.dz/" },
        { name: "11 - مجلس قضاء تمنراست", link: "https://cour-tamanrasset.mjustice.dz/" },
        { name: "12 - مجلس قضاء تبسة", link: "https://cour-tebessa.mjustice.dz/" },
        { name: "13 - مجلس قضاء تلمسان", link: "https://cour-tlemcen.mjustice.dz/" },
        { name: "14 - مجلس قضاء تيارت", link: "https://cour-tiaret.mjustice.dz/" },
        { name: "15 - مجلس قضاء تيزي وزو", link: "https://cour-tizi-ouzou.mjustice.dz/" },
        { name: "16 - مجلس قضاء الجزائر", link: "https://cour-alger.mjustice.dz/" },
        { name: "17 - مجلس قضاء الجلفة", link: "https://cour-djelfa.mjustice.dz/" },
        { name: "18 - مجلس قضاء جيجل", link: "https://cour-jijel.mjustice.dz/" },
        { name: "19 - مجلس قضاء سطيف", link: "https://cour-setif.mjustice.dz/" },
        { name: "20 - مجلس قضاء سعيدة", link: "https://cour-saida.mjustice.dz/" },
        { name: "21 - مجلس قضاء سكيكدة", link: "https://cour-skikda.mjustice.dz/" },
        { name: "22 - مجلس قضاء سيدي بلعباس", link: "https://cour-sidi-bel-abbes.mjustice.dz/" },
        { name: "23 - مجلس قضاء عنابة", link: "https://cour-annaba.mjustice.dz/" },
        { name: "24 - مجلس قضاء قالمة", link: "https://cour-guelma.mjustice.dz/" },
        { name: "25 - مجلس قضاء قسنطينة", link: "https://cour-constantine.mjustice.dz/" },
        { name: "26 - مجلس قضاء المدية", link: "https://cour-medea.mjustice.dz/" },
        { name: "27 - مجلس قضاء مستغانم", link: "https://cour-mostaganem.mjustice.dz/" },
        { name: "28 - مجلس قضاء المسيلة", link: "https://cour-msila.mjustice.dz/" },
        { name: "29 - مجلس قضاء معسكر", link: "https://cour-mascara.mjustice.dz/" },
        { name: "30 - مجلس قضاء ورقلة", link: "https://cour-ouargla.mjustice.dz/" },
        { name: "31 - مجلس قضاء وهران", link: "https://cour-oran.mjustice.dz/" },
        // ملاحظة: يمكنك إكمال الروابط الحقيقية لباقي الولايات هنا، وضعت لك الروابط الرسمية للأوائل
        { name: "32 - مجلس قضاء البيض", link: "#" }, 
        { name: "33 - مجلس قضاء إليزي", link: "#" },
        { name: "34 - مجلس قضاء برج بوعريريج", link: "#" },
        { name: "35 - مجلس قضاء بومرداس", link: "#" },
        { name: "36 - مجلس قضاء الطارف", link: "#" },
        { name: "37 - مجلس قضاء تندوف", link: "#" },
        { name: "38 - مجلس قضاء تيسمسيلت", link: "#" },
        { name: "39 - مجلس قضاء الوادي", link: "#" },
        { name: "40 - مجلس قضاء خنشلة", link: "#" },
        { name: "41 - مجلس قضاء سوق أهراس", link: "#" },
        { name: "42 - مجلس قضاء تيبازة", link: "#" },
        { name: "43 - مجلس قضاء ميلة", link: "#" },
        { name: "44 - مجلس قضاء عين الدفلى", link: "#" },
        { name: "45 - مجلس قضاء النعامة", link: "#" },
        { name: "46 - مجلس قضاء عين تموشنت", link: "#" },
        { name: "47 - مجلس قضاء غرداية", link: "#" },
        { name: "48 - مجلس قضاء غليزان", link: "#" },
        { name: "49 - مجلس قضاء تيميمون", link: "#" },
        { name: "50 - مجلس قضاء برج باجي مختار", link: "#" },
        { name: "51 - مجلس قضاء أولاد جلال", link: "#" },
        { name: "52 - مجلس قضاء بني عباس", link: "#" },
        { name: "53 - مجلس قضاء إن صالح", link: "#" },
        { name: "54 - مجلس قضاء إن قزام", link: "#" },
        { name: "55 - مجلس قضاء تقرت", link: "#" },
        { name: "56 - مجلس قضاء جانت", link: "#" },
        { name: "57 - مجلس قضاء المغير", link: "#" },
        { name: "58 - مجلس قضاء المنيعة", link: "#" }
    ];

    // ملء القائمة المنسدلة
    const dropdown = document.getElementById('courtsDropdown');
    // تنظيف القائمة أولاً لضمان عدم التكرار
    dropdown.innerHTML = '<option value="">-- اختر المجلس القضائي (58 ولاية) --</option>';
    
    courtsData.forEach(court => {
        const option = document.createElement('option');
        option.value = court.link;
        option.textContent = court.name;
        dropdown.appendChild(option);
    });

    // إضافة تفعيل الرابط عند الاختيار
    dropdown.addEventListener('change', function() {
        if(this.value && this.value !== "#") {
            window.open(this.value, '_blank');
        } else if (this.value === "#") {
            alert("رابط هذا المجلس قيد التحديث حالياً.");
        }
    });

    // ==========================================
    // 3. بيانات القانون الداخلي (50 مادة)
    // ==========================================
    const rulesData = [
        {
            title: "الديباجة",
            content: "تأسيساً على مبادئ التعاون العلمي، وسعياً لترسيخ ثقافة قانونية سليمة لدى طلبة كليات الحقوق في الجزائر، تم تأسيس منصة ومجموعة SWIMA تحت إشراف الطالب جمعة محمد عرفات."
        },
        {
            title: "الباب الأول: التأسيس والأهداف (المواد 1-5)",
            content: "<strong>المادة 1:</strong> SWIMA هي مبادرة طلابية تعليمية مستقلة.<br><strong>المادة 2:</strong> المصطلحات...<br><strong>المادة 3:</strong> تهدف المجموعة لتبسيط المقاييس القانونية.<br><strong>المادة 4:</strong> تلتزم المجموعة بقيم الأمانة العلمية والحياد.<br><strong>المادة 5:</strong> تستهدف الخدمات طلبة الحقوق (ليسانس)."
        },
        {
            title: "الباب الثاني: العضوية والحسابات (المواد 6-10)",
            content: "<strong>المادة 6:</strong> تكتسب العضوية بالانضمام للقناة.<br><strong>المادة 7:</strong> يجب استخدام اسم لائق.<br><strong>المادة 8:</strong> يمنع الصور الخادشة.<br><strong>المادة 9:</strong> المسؤولية الشخصية.<br><strong>المادة 10:</strong> حساب واحد لكل طالب."
        },
        {
            title: "الباب الثالث: النظام الدراسي والتحفيزات (المواد 11-16)",
            content: "<strong>المادة 11:</strong> الدروس 19:00 مساءً.<br><strong>المادة 12:</strong> تعديل التوقيت.<br><strong>المادة 13:</strong> حصص المنهجية.<br><strong>المادة 14:</strong> الحضور إلزامي للمباشر.<br><strong>المادة 16 مكرر:</strong> ترقية المنتظمين لـ 'مجموعة التميز'."
        },
        {
            title: "الباب الرابع: المحتوى التعليمي (المواد 17-22)",
            content: "<strong>المادة 17:</strong> تنوع المحتوى.<br><strong>المادة 18:</strong> المجانية.<br><strong>المادة 19:</strong> الملخصات المدفوعة.<br><strong>المادة 20:</strong> دعم تاريخ النظم.<br><strong>المادة 22:</strong> تصحيح الأخطاء."
        },
        {
            title: "الباب الخامس: حقوق الملكية الفكرية (المواد 23-27)",
            content: "<strong>المادة 23:</strong> المحتوى ملكية حصرية للطالب جمعة محمد عرفات.<br><strong>المادة 24:</strong> منع إعادة النشر.<br><strong>المادة 26:</strong> العلامة المائية."
        },
        {
            title: "الباب السادس: آداب التواصل (المواد 28-34)",
            content: "<strong>المادة 28:</strong> الاحترام المتبادل.<br><strong>المادة 29:</strong> منع السياسة والرياضة.<br><strong>المادة 31:</strong> منع الإزعاج في الخاص.<br><strong>المادة 34:</strong> النقد البناء."
        },
        {
            title: "الباب السابع: الإدارة والصلاحيات (المواد 35-39)",
            content: "<strong>المادة 35:</strong> سلطة المشرف العام.<br><strong>المادة 37:</strong> وضعية القراءة فقط.<br><strong>المادة 38:</strong> حق الحذف."
        },
        {
            title: "الباب الثامن: الجانب المالي (المواد 40-44)",
            content: "<strong>المادة 40:</strong> رسوم رمزية.<br><strong>المادة 41:</strong> الدفع عبر CCP/BaridiMob.<br><strong>المادة 43:</strong> لا استرداد.<br><strong>المادة 44 مكرر:</strong> مراجعة العطلة."
        },
        {
            title: "الباب التاسع والعاشر: الخصوصية والختام (المواد 45-50)",
            content: "<strong>المادة 45:</strong> سرية المعلومات.<br><strong>المادة 50:</strong> الانضمام يعني الموافقة التامة."
        }
    ];

    // ملء القانون الداخلي في الصفحة
    const rulesContainer = document.getElementById('rulesContainer');
    if(rulesContainer) {
        rulesContainer.innerHTML = '';
        rulesData.forEach(chapter => {
            const div = document.createElement('div');
            div.className = 'law-chapter'; // كلاس CSS الجديد
            div.innerHTML = `<h4>${chapter.title}</h4><p>${chapter.content}</p>`;
            rulesContainer.appendChild(div);
        });
    }

    // ==========================================
    // 4. شريط المبادئ (Ticker Animation)
    // ==========================================
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
    
    // الدالة الأولى لتعيين النص فوراً
    if(tickerElement) {
        tickerElement.innerText = maxims[0];
        
        setInterval(() => {
            tickerElement.style.opacity = 0; // إخفاء النص
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % maxims.length;
                tickerElement.innerText = maxims[currentIndex]; // تغيير النص
                tickerElement.style.opacity = 1; // إظهار النص الجديد
            }, 500); // الانتظار نصف ثانية (وقت الانتقال في CSS)
            
        }, 5000); // تغيير كل 5 ثواني لقراءة أسرع
    }

    // ==========================================
    // 5. زر الصعود للأعلى (Scroll Top)
    // ==========================================
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function() {
        if(scrollBtn) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }
    };
});

// دالة الصعود يتم استدعاؤها من الـ HTML مباشرة
function scrollToTop() { // قمت بتغيير الاسم ليتطابق مع الموجود في HTML
    window.scrollTo({top: 0, behavior: 'smooth'}); 
}
