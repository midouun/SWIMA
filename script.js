const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const scrollBtn = document.getElementById("scrollTopBtn");

// 1. تفعيل الوضع الليلي
themeBtn.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// 2. بيانات المحاكم (58 ولاية) - Google Maps Links
const courtsData = [
    { name: "01 - مجلس قضاء أدرار", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+أدرار" },
    { name: "02 - مجلس قضاء الشلف", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+الشلف" },
    { name: "03 - مجلس قضاء الأغواط", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+الأغواط" },
    { name: "04 - مجلس قضاء أم البواقي", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+أم+البواقي" },
    { name: "05 - مجلس قضاء باتنة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+باتنة" },
    { name: "06 - مجلس قضاء بجاية", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+بجاية" },
    { name: "07 - مجلس قضاء بسكرة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+بسكرة" },
    { name: "08 - مجلس قضاء بشار", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+بشار" },
    { name: "09 - مجلس قضاء البليدة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+البليدة" },
    { name: "10 - مجلس قضاء البويرة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+البويرة" },
    { name: "11 - مجلس قضاء تمنراست", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تمنراست" },
    { name: "12 - مجلس قضاء تبسة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تبسة" },
    { name: "13 - مجلس قضاء تلمسان", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تلمسان" },
    { name: "14 - مجلس قضاء تيارت", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تيارت" },
    { name: "15 - مجلس قضاء تيزي وزو", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تيزي+وزو" },
    { name: "16 - مجلس قضاء الجزائر", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+الجزائر" },
    { name: "17 - مجلس قضاء الجلفة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+الجلفة" },
    { name: "18 - مجلس قضاء جيجل", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+جيجل" },
    { name: "19 - مجلس قضاء سطيف", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+سطيف" },
    { name: "20 - مجلس قضاء سعيدة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+سعيدة" },
    { name: "21 - مجلس قضاء سكيكدة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+سكيكدة" },
    { name: "22 - مجلس قضاء سيدي بلعباس", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+سيدي+بلعباس" },
    { name: "23 - مجلس قضاء عنابة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+عنابة" },
    { name: "24 - مجلس قضاء قالمة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+قالمة" },
    { name: "25 - مجلس قضاء قسنطينة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+قسنطينة" },
    { name: "26 - مجلس قضاء المدية", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+المدية" },
    { name: "27 - مجلس قضاء مستغانم", "link": "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+مستغانم" },
    { name: "28 - مجلس قضاء المسيلة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+المسيلة" },
    { name: "29 - مجلس قضاء معسكر", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+معسكر" },
    { name: "30 - مجلس قضاء ورقلة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+ورقلة" },
    { name: "31 - مجلس قضاء وهران", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+وهران" },
    { name: "32 - مجلس قضاء البيض", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+البيض" },
    { name: "33 - مجلس قضاء إليزي", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+إليزي" },
    { name: "34 - مجلس قضاء برج بوعريريج", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+برج+بوعريريج" },
    { name: "35 - مجلس قضاء بومرداس", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+بومرداس" },
    { name: "36 - مجلس قضاء الطارف", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+الطارف" },
    { name: "37 - مجلس قضاء تندوف", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تندوف" },
    { name: "38 - مجلس قضاء تيسمسيلت", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تيسمسيلت" },
    { name: "39 - مجلس قضاء الوادي", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+الوادي" },
    { name: "40 - مجلس قضاء خنشلة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+خنشلة" },
    { name: "41 - مجلس قضاء سوق أهراس", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+سوق+أهراس" },
    { name: "42 - مجلس قضاء تيبازة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تيبازة" },
    { name: "43 - مجلس قضاء ميلة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+ميلة" },
    { name: "44 - مجلس قضاء عين الدفلى", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+عين+الدفلى" },
    { name: "45 - مجلس قضاء النعامة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+النعامة" },
    { name: "46 - مجلس قضاء عين تموشنت", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+عين+تموشنت" },
    { name: "47 - مجلس قضاء غرداية", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+غرداية" },
    { name: "48 - مجلس قضاء غليزان", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+غليزان" },
    { name: "49 - مجلس قضاء تيميمون", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تيميمون" },
    { name: "50 - مجلس قضاء برج باجي مختار", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+برج+باجي+مختار" },
    { name: "51 - مجلس قضاء أولاد جلال", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+أولاد+جلال" },
    { name: "52 - مجلس قضاء بني عباس", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+بني+عباس" },
    { name: "53 - مجلس قضاء إن صالح", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+إن+صالح" },
    { name: "54 - مجلس قضاء إن قزام", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+إن+قزام" },
    { name: "55 - مجلس قضاء تقرت", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+تقرت" },
    { name: "56 - مجلس قضاء جانت", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+جانت" },
    { name: "57 - مجلس قضاء المغير", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+المغير" },
    { name: "58 - مجلس قضاء المنيعة", link: "https://www.google.com/maps/search/?api=1&query=مجلس+قضاء+المنيعة" }
];

// 3. ملء القائمة المنسدلة (المحاكم)
const dropdown = document.getElementById('courtsDropdown');
dropdown.innerHTML = '<option value="">-- اختر المجلس القضائي (58 ولاية) --</option>';
courtsData.forEach(court => {
    const option = document.createElement('option');
    option.value = court.link;
    option.textContent = court.name;
    dropdown.appendChild(option);
});

// 4. بيانات القانون الداخلي (50 مادة)
const rulesData = [
    {
        title: "الديباجة",
        content: "تأسيساً على مبادئ التعاون العلمي، وسعياً لترسيخ ثقافة قانونية سليمة لدى طلبة كليات الحقوق في الجزائر، تم تأسيس منصة ومجموعة SWIMA تحت إشراف الطالب جمعة محمد عرفات. تعد هذه الوثيقة عقداً تنظيمياً ملزماً يحكم العلاقة بين إدارة المنصة والطلبة الأعضاء."
    },
    {
        title: "الباب الأول: التأسيس والأهداف (المواد 1-5)",
        content: "<strong>المادة 1:</strong> SWIMA هي مبادرة طلابية تعليمية مستقلة.<br><strong>المادة 2 (المصطلحات):</strong><br>- <strong>بصفة منتظمة:</strong> الحضور الفعلي للمكالمات الصوتية لثلاث (03) حصص متتالية.<br>- <strong>مجموعة التميز:</strong> فضاء خاص للأعضاء النشطين يحتوي على الأرشيف.<br>- <strong>الطالب المشترك:</strong> الطالب الذي قام باقتناء الملخصات المدفوعة.<br><strong>المادة 3:</strong> تهدف المجموعة لتبسيط المقاييس القانونية.<br><strong>المادة 4:</strong> تلتزم المجموعة بقيم الأمانة العلمية والحياد.<br><strong>المادة 5:</strong> تستهدف الخدمات طلبة الحقوق (ليسانس)."
    },
    {
        title: "الباب الثاني: العضوية والحسابات (المواد 6-10)",
        content: "<strong>المادة 6:</strong> تكتسب العضوية بالانضمام للقناة أو التسجيل في الموقع.<br><strong>المادة 7:</strong> يجب استخدام اسم لائق ويمنع انتحال الصفة.<br><strong>المادة 8:</strong> يمنع وضع صور شخصية خادشة للحياء.<br><strong>المادة 9:</strong> العضو مسؤول عن نشاط حسابه.<br><strong>المادة 10:</strong> يفضل استخدام حساب واحد لكل طالب."
    },
    {
        title: "الباب الثالث: النظام الدراسي والتحفيزات (المواد 11-16)",
        content: "<strong>المادة 11:</strong> تنطلق الدروس يومياً الساعة 19:00 مساءً.<br><strong>المادة 12:</strong> للإدارة حق تعديل التوقيت في الظروف الاستثنائية.<br><strong>المادة 13:</strong> تخصص حصص إضافية للمنهجية.<br><strong>المادة 14:</strong> الدروس المباشرة تتطلب الحضور.<br><strong>المادة 15:</strong> قد يستمر النشاط خلال العطل.<br><strong>المادة 16:</strong> الالتزام بالرزنامة المحددة.<br><strong>المادة 16 مكرر (مكافأة الانضباط):</strong> يُرقى العضو الذي يثبت حضوره في المكالمات الصوتية بصفة منتظمة إلى 'مجموعة التميز' ويستفيد من ملخص مجاني وأرشيف التسجيلات."
    },
    {
        title: "الباب الرابع: المحتوى التعليمي (المواد 17-22)",
        content: "<strong>المادة 17:</strong> يتنوع المحتوى بين نصوص، صوتيات وفيديوهات.<br><strong>المادة 18:</strong> الشرح اليومي للدروس مجاني.<br><strong>المادة 19:</strong> الملخصات الاحترافية تقدم مقابل رسوم رمزية.<br><strong>المادة 20:</strong> دعم خاص لطلبة السنة الثانية (تاريخ النظم).<br><strong>المادة 21:</strong> التحديث المستمر للمعلومات.<br><strong>المادة 22:</strong> يتم تصحيح الأخطاء العلمية فور التبليغ عنها."
    },
    {
        title: "الباب الخامس: حقوق الملكية الفكرية (المواد 23-27)",
        content: "<strong>المادة 23:</strong> المحتوى ملكية حصرية للطالب جمعة محمد عرفات.<br><strong>المادة 24:</strong> يُمنع منعاً باتاً إعادة نشر الملخصات المدفوعة.<br><strong>المادة 25:</strong> الاستخدام شخصي فقط.<br><strong>المادة 26:</strong> الملفات محمية بعلامة مائية.<br><strong>المادة 27:</strong> يجب ذكر المصدر عند الاقتباس."
    },
    {
        title: "الباب السادس: آداب التواصل (المواد 28-34)",
        content: "<strong>المادة 28:</strong> الاحترام المتبادل هو الأساس.<br><strong>المادة 29:</strong> يمنع الخوض في السياسة والرياضة.<br><strong>المادة 30:</strong> يمنع نشر روابط لمجموعات أخرى.<br><strong>المادة 31:</strong> يمنع الإزعاج في الخاص.<br><strong>المادة 32:</strong> التواصل مع الإدارة للضرورة.<br><strong>المادة 33:</strong> الأسئلة تطرح في المجموعة العامة.<br><strong>المادة 34:</strong> النقد البناء مقبول بأسلوب محترم."
    },
    {
        title: "الباب السابع: الإدارة والصلاحيات (المواد 35-39)",
        content: "<strong>المادة 35:</strong> للمشرف العام السلطة التقديرية الكاملة.<br><strong>المادة 36:</strong> قرارات المساعدين ملزمة.<br><strong>المادة 37:</strong> وضعية القراءة فقط أثناء الدروس.<br><strong>المادة 38:</strong> للإدارة حق حذف المحتوى المخالف.<br><strong>المادة 39:</strong> أرشفة الدروس القديمة."
    },
    {
        title: "الباب الثامن: الجانب المالي (المواد 40-44)",
        content: "<strong>المادة 40:</strong> الرسوم رمزية لدعم المنصة.<br><strong>المادة 41:</strong> الدفع عبر CCP أو BaridiMob.<br><strong>المادة 42:</strong> إرسال وصل الدفع ضروري.<br><strong>المادة 43:</strong> لا يمكن استرداد المبلغ بعد استلام الملف.<br><strong>المادة 44:</strong> توجد تخفيضات للمتفوقين.<br><strong>المادة 44 مكرر (مراجعة العطلة):</strong> يستفيد المشتركون في الملخصات من موعد مراجعة خاص (صوتي) خلال العطلة مع الطالب الباحث."
    },
    {
        title: "الباب التاسع: الخصوصية (المواد 45-47)",
        content: "<strong>المادة 45:</strong> سرية معلومات الطلبة محفوظة.<br><strong>المادة 46:</strong> استخدام البيانات للإحصاء فقط.<br><strong>المادة 47:</strong> استخدام ملفات تعريف الارتباط."
    },
    {
        title: "الباب العاشر: أحكام ختامية (المواد 48-50)",
        content: "<strong>المادة 48:</strong> لا نتحمل مسؤولية الظروف القاهرة.<br><strong>المادة 49:</strong> القانون قابل للتعديل.<br><strong>المادة 50:</strong> الانضمام للمجموعة يعني الموافقة التامة على هذا القانون."
    }
];

// 5. ملء القانون الداخلي
const rulesContainer = document.getElementById('rulesContainer');
rulesContainer.innerHTML = '';
rulesData.forEach(chapter => {
    const div = document.createElement('div');
    div.className = 'law-chapter';
    div.innerHTML = `<h4>${chapter.title}</h4><p>${chapter.content}</p>`;
    rulesContainer.appendChild(div);
});

// 6. شريط المبادئ
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

// 7. زر الصعود
window.onscroll = function() {
    scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};
function topFunction() { window.scrollTo({top: 0, behavior: 'smooth'}); }
