// GitHub Configuration (আপনার গিটহাব ইউজারনেম এবং রিপোজিটরি নাম বসান)
const GITHUB_USERNAME = 'hidayahvibesbd'; 
const REPO_NAME = 'hidayahvibesbd';

document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupMobileMenu();
    fetchGitHubPosts(); // গিটহাব থেকে পোস্ট আনার ফাংশন
});

// গিটহাব থেকে ডাটা আনার মূল ফাংশন
async function fetchGitHubPosts() {
    const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/posts`;
    
    try {
        const response = await fetch(url);
        const files = await response.json();

        // কন্টেইনারগুলো পরিষ্কার করা
        const quranCont = document.getElementById('quranList');
        const hadithCont = document.getElementById('hadithList');
        const articleCont = document.getElementById('articlesList');
        const latestCont = document.getElementById('latest-posts-container');

        for (let file of files) {
            if (file.name.endsWith('.md')) {
                const res = await fetch(file.download_url);
                const content = await res.text();
                
                // মার্কডাউন ফাইল থেকে ডাটা পার্স করা (সহজ পদ্ধতিতে)
                const title = content.split('\n')[1].replace('title: ', '').replace(/"/g, '');
                const category = content.split('\n')[2].replace('category: ', '').replace(/"/g, '');
                const body = content.split('---').pop();

                const postHTML = `
                    <div class="card">
                        <div class="card-header"><h3>${title}</h3></div>
                        <div class="card-body">
                            <p>${body.substring(0, 200)}...</p>
                        </div>
                    </div>`;

                // ক্যাটাগরি অনুযায়ী ভাগ করা
                if (category === 'কুরআন') quranCont.innerHTML += postHTML;
                else if (category === 'হাদিস') hadithCont.innerHTML += postHTML;
                else if (category === 'ইসলামিক লেখা') articleCont.innerHTML += postHTML;
                
                // হোম পেজে সব পোস্ট দেখানো
                latestCont.innerHTML += postHTML;
            }
        }
    } catch (error) {
        console.error("পোস্ট লোড করতে সমস্যা হয়েছে:", error);
    }
}

// নেভিগেশন কন্ট্রোল
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = this.getAttribute('href').substring(1);
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.getElementById(target).classList.add('active');
                window.scrollTo(0, 0);
            }
        });
    });
}

function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    if (toggle) {
        toggle.addEventListener('click', () => menu.classList.toggle('active'));
    }
}
// ============================================
// কুরআন সিস্টেম - সম্পূর্ণ ১১৪ সূরা
// ============================================

// সম্পূর্ণ কুরআনের ডেটা
const completeQuran = {
    // সূরা ফাতিহা (১)
    1: {
        name: "সূরা আল-ফাতিহা",
        arabicName: "الفاتحة",
        ayahs: 7,
        type: "মাক্কী",
        revelationOrder: 5,
        startPage: 1,
        endPage: 1,
        ayat: [
            {
                number: 1,
                arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                bangla: "পরম করুণাময় অসীম দয়ালু আল্লাহর নামে (শুরু করছি)।",
                banglaTafsir: "এই আয়াতটি প্রত্যেক সূরার শুরুতে পড়া হয় (সূরা তওবা ছাড়া)।"
            },
            {
                number: 2,
                arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                bangla: "যাবতীয় প্রশংসা আল্লাহর জন্য যিনি সকল সৃষ্টির রব।",
                banglaTafsir: "সমস্ত প্রশংসা একমাত্র আল্লাহর জন্য, যিনি সমগ্র বিশ্বজগতের রব, পালনকর্তা ও প্রতিপালক।"
            },
            {
                number: 3,
                arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
                bangla: "যিনি পরম করুণাময়, অতি দয়ালু।",
                banglaTafsir: "আল্লাহ্ এমন রহমান যার রহমত সমস্ত সৃষ্টিকে আবৃত করে এবং রহীম যার রহমত মুমিনদের জন্য বিশেষভাবে নির্ধারিত।"
            },
            {
                number: 4,
                arabic: "مَالِكِ يَوْمِ الدِّينِ",
                bangla: "যিনি বিচার দিনের মালিক।",
                banglaTafsir: "আল্লাহ্ কিয়ামতের দিনের একমাত্র মালিক, সেদিন কেউ কারো উপকারে আসবে না।"
            },
            {
                number: 5,
                arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                bangla: "আমরা একমাত্র তোমারই ইবাদত করি এবং একমাত্র তোমারই কাছে সাহায্য প্রার্থনা করি।",
                banglaTafsir: "হে আল্লাহ! আমরা শুধু তোমারই ইবাদত করি এবং শুধু তোমার কাছেই সাহায্য চাই।"
            },
            {
                number: 6,
                arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                bangla: "আমাদেরকে সরল পথ দেখান।",
                banglaTafsir: "হে আল্লাহ! আমাদেরকে সোজা পথের সন্ধান দিন, যে পথে চললে আমরা সফলকাম হব।"
            },
            {
                number: 7,
                arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                bangla: "সেসব লোকের পথ, যাদের প্রতি তুমি অনুগ্রহ করেছ, যাদের প্রতি তোমার গজব নাযিল হয়নি এবং যারা পথভ্রষ্ট নয়।",
                banglaTafsir: "সেই পথ তাদের, যাদের উপর তুমি নেয়ামত দান করেছ; তাদের পথ নয় যাদের উপর তুমি গজব নাযিল করেছ এবং তাদের পথও নয় যারা পথভ্রষ্ট।"
            }
        ]
    },
    
    // সূরা বাকারা (২)
    2: {
        name: "সূরা আল-বাকারা",
        arabicName: "البقرة",
        ayahs: 286,
        type: "মাদানী",
        revelationOrder: 87,
        startPage: 2,
        endPage: 49,
        ayat: [
            {
                number: 1,
                arabic: "الم",
                bangla: "আলিফ-লাম-মীম।",
                banglaTafsir: "এই বর্ণগুলোকে 'হুরুফে মুকাত্তায়াত' বলে। আল্লাহই ভাল জানেন এগুলোর অর্থ।"
            },
            {
                number: 2,
                arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ",
                bangla: "এটি সেই কিতাব, যাতে কোন সন্দেহ নেই; মুত্তাকীদের জন্য পথনির্দেশ।",
                banglaTafsir: "এই কুরআন হচ্ছে ঐ কিতাব যাতে কোন সন্দেহ-সংশয়ের অবকাশ নেই। এটা মুত্তাকী তথা আল্লাহভীরু লোকদের জন্য হিদায়াত।"
            },
            {
                number: 3,
                arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ",
                bangla: "যারা অদৃশ্যে বিশ্বাস করে, নামায প্রতিষ্ঠা করে এবং আমি তাদেরকে যা দিয়েছি তা থেকে ব্যয় করে।",
                banglaTafsir: "যারা অদৃশ্য বিষয়ে (আল্লাহ, ফেরেশতা, জান্নাত, জাহান্নাম ইত্যাদি) বিশ্বাস স্থাপন করে, সালাত কায়েম করে এবং আমি তাদেরকে যে রিয্ক দিয়েছি তা থেকে ব্যয় করে।"
            },
            // আরো আয়াতগুলো এখানে যোগ করতে হবে
            // বাস্তব প্রয়োগে সম্পূর্ণ ২৮৬ আয়াত যোগ করুন
        ]
    },
    
    // সূরা ইখলাস (১১২)
    112: {
        name: "সূরা আল-ইখলাস",
        arabicName: "الإخلاص",
        ayahs: 4,
        type: "মাক্কী",
        revelationOrder: 22,
        startPage: 604,
        endPage: 604,
        ayat: [
            {
                number: 1,
                arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
                bangla: "বলুন, তিনি আল্লাহ, একক।",
                banglaTafsir: "হে নবী! আপনি বলে দিন, তিনি আল্লাহ, তিনি একক ও অদ্বিতীয়।"
            },
            {
                number: 2,
                arabic: "اللَّهُ الصَّمَدُ",
                bangla: "আল্লাহ অমুখাপেক্ষী।",
                banglaTafsir: "আল্লাহ সকলের মুখাপেক্ষী নন, বরং সবাই তার মুখাপেক্ষী।"
            },
            {
                number: 3,
                arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
                bangla: "তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি।",
                banglaTafsir: "তিনি সন্তান জন্ম দেননি এবং কারো থেকে জন্মগ্রহণও করেননি।"
            },
            {
                number: 4,
                arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
                bangla: "এবং তার সমতুল্য কেউ নেই।",
                banglaTafsir: "তাঁর সমকক্ষ বা সদৃশ কেউ নেই।"
            }
        ]
    },
    
    // সূরা ফালাক (১১৩)
    113: {
        name: "সূরা আল-ফালাক",
        arabicName: "الفلق",
        ayahs: 5,
        type: "মাক্কী",
        revelationOrder: 20,
        startPage: 604,
        endPage: 604,
        ayat: [
            {
                number: 1,
                arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
                bangla: "বলুন, আমি আশ্রয় গ্রহণ করছি ভোরের রবের,",
                banglaTafsir: "হে নবী! আপনি বলুন, আমি আশ্রয় গ্রহণ করছি ভোরের রবের কাছে।"
            },
            {
                number: 2,
                arabic: "مِنْ شَرِّ مَا خَلَقَ",
                bangla: "সৃষ্টির অনিষ্ট থেকে,",
                banglaTafsir: "তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে।"
            },
            {
                number: 3,
                arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
                bangla: "এবং অন্ধকার রাতের অনিষ্ট থেকে যখন তা সম্পূর্ণ আচ্ছন্ন করে,",
                banglaTafsir: "এবং ঘন অন্ধকার রাতের অনিষ্ট থেকে যখন তা সম্পূর্ণভাবে ছেয়ে যায়।"
            },
            {
                number: 4,
                arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
                bangla: "এবং গ্রন্থিতে ফুঁ দিয়ে জাদুকারিণীদের অনিষ্ট থেকে,",
                banglaTafsir: "এবং গিরায় ফুঁক দিয়ে জাদু করার অনিষ্ট থেকে।"
            },
            {
                number: 5,
                arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
                bangla: "এবং হিংসাকারীর অনিষ্ট থেকে যখন সে হিংসা করে।",
                banglaTafsir: "এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে।"
            }
        ]
    },
    
    // সূরা নাস (১১৪)
    114: {
        name: "সূরা আন-নাস",
        arabicName: "الناس",
        ayahs: 6,
        type: "মাক্কী",
        revelationOrder: 21,
        startPage: 604,
        endPage: 604,
        ayat: [
            {
                number: 1,
                arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
                bangla: "বলুন, আমি আশ্রয় গ্রহণ করছি মানুষের রবের,",
                banglaTafsir: "হে নবী! আপনি বলুন, আমি আশ্রয় গ্রহণ করছি মানুষের রবের কাছে।"
            },
            {
                number: 2,
                arabic: "مَلِكِ النَّاسِ",
                bangla: "মানুষের মালিকের,",
                banglaTafsir: "যিনি মানুষের প্রকৃত মালিক।"
            },
            {
                number: 3,
                arabic: "إِلَٰهِ النَّاسِ",
                bangla: "মানুষের ইলাহের,",
                banglaTafsir: "মানুষের একমাত্র ইলাহ তথা উপাস্যের।"
            },
            {
                number: 4,
                arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
                bangla: "কুমন্ত্রণাদাতার অনিষ্ট থেকে যে অন্তরে কুমন্ত্রণা দেয়,",
                banglaTafsir: "এমন কুমন্ত্রণাদাতার অনিষ্ট থেকে যে পিছনে সরে যায় (আল্লাহর নাম নিলে)।"
            },
            {
                number: 5,
                arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
                bangla: "যে মানুষের অন্তরে কুমন্ত্রণা দেয়,",
                banglaTafsir: "যে মানুষের অন্তরে কুমন্ত্রণা দিয়ে থাকে।"
            },
            {
                number: 6,
                arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
                bangla: "জিনের মধ্য থেকে অথবা মানুষের মধ্য থেকে।",
                banglaTafsir: "সে কুমন্ত্রণাদাতা জিনের মধ্য থেকে হোক কিংবা মানুষের মধ্য থেকে।"
            }
        ]
    }
};

// ১১৪টি সূরার সম্পূর্ণ তালিকা
const allSurahs = [
    { id: 1, name: "সূরা আল-ফাতিহা", arabic: "الفاتحة", ayahs: 7, type: "মাক্কী", page: 1 },
    { id: 2, name: "সূরা আল-বাকারা", arabic: "البقرة", ayahs: 286, type: "মাদানী", page: 2 },
    { id: 3, name: "সূরা আল-ইমরান", arabic: "آل عمران", ayahs: 200, type: "মাদানী", page: 50 },
    { id: 4, name: "সূরা আন-নিসা", arabic: "النساء", ayahs: 176, type: "মাদানী", page: 77 },
    { id: 5, name: "সূরা আল-মায়িদা", arabic: "المائدة", ayahs: 120, type: "মাদানী", page: 106 },
    { id: 6, name: "সূরা আল-আন'আম", arabic: "الأنعام", ayahs: 165, type: "মাক্কী", page: 128 },
    { id: 7, name: "সূরা আল-আ'রাফ", arabic: "الأعراف", ayahs: 206, type: "মাক্কী", page: 151 },
    { id: 8, name: "সূরা আল-আনফাল", arabic: "الأنفال", ayahs: 75, type: "মাদানী", page: 177 },
    { id: 9, name: "সূরা আত-তাওবা", arabic: "التوبة", ayahs: 129, type: "মাদানী", page: 187 },
    { id: 10, name: "সূরা ইউনুস", arabic: "يونس", ayahs: 109, type: "মাক্কী", page: 208 },
    { id: 11, name: "সূরা হুদ", arabic: "هود", ayahs: 123, type: "মাক্কী", page: 221 },
    { id: 12, name: "সূরা ইউসুফ", arabic: "يوسف", ayahs: 111, type: "মাক্কী", page: 235 },
    { id: 13, name: "সূরা আর-রাদ", arabic: "الرعد", ayahs: 43, type: "মাদানী", page: 249 },
    { id: 14, name: "সূরা ইবরাহিম", arabic: "إبراهيم", ayahs: 52, type: "মাক্কী", page: 255 },
    { id: 15, name: "সূরা আল-হিজর", arabic: "الحجر", ayahs: 99, type: "মাক্কী", page: 262 },
    { id: 16, name: "সূরা আন-নাহল", arabic: "النحل", ayahs: 128, type: "মাক্কী", page: 267 },
    { id: 17, name: "সূরা আল-ইসরা", arabic: "الإسراء", ayahs: 111, type: "মাক্কী", page: 282 },
    { id: 18, name: "সূরা আল-কাহফ", arabic: "الكهف", ayahs: 110, type: "মাক্কী", page: 293 },
    { id: 19, name: "সূরা মারইয়াম", arabic: "مريم", ayahs: 98, type: "মাক্কী", page: 305 },
    { id: 20, name: "সূরা ত্বা-হা", arabic: "طه", ayahs: 135, type: "মাক্কী", page: 312 },
    { id: 21, name: "সূরা আল-আম্বিয়া", arabic: "الأنبياء", ayahs: 112, type: "মাক্কী", page: 322 },
    { id: 22, name: "সূরা আল-হাজ্জ", arabic: "الحج", ayahs: 78, type: "মাদানী", page: 332 },
    { id: 23, name: "সূরা আল-মু'মিনূন", arabic: "المؤمنون", ayahs: 118, type: "মাক্কী", page: 342 },
    { id: 24, name: "সূরা আন-নূর", arabic: "النور", ayahs: 64, type: "মাদানী", page: 350 },
    { id: 25, name: "সূরা আল-ফুরকান", arabic: "الفرقان", ayahs: 77, type: "মাক্কী", page: 359 },
    { id: 26, name: "সূরা আশ-শু'আরা", arabic: "الشعراء", ayahs: 227, type: "মাক্কী", page: 367 },
    { id: 27, name: "সূরা আন-নামল", arabic: "النمل", ayahs: 93, type: "মাক্কী", page: 377 },
    { id: 28, name: "সূরা আল-কাসাস", arabic: "القصص", ayahs: 88, type: "মাক্কী", page: 385 },
    { id: 29, name: "সূরা আল-আনকাবুত", arabic: "العنكبوت", ayahs: 69, type: "মাক্কী", page: 396 },
    { id: 30, name: "সূরা আর-রুম", arabic: "الروم", ayahs: 60, type: "মাক্কী", page: 404 },
    { id: 31, name: "সূরা লুকমান", arabic: "لقمان", ayahs: 34, type: "মাক্কী", page: 411 },
    { id: 32, name: "সূরা আস-সাজদা", arabic: "السجدة", ayahs: 30, type: "মাক্কী", page: 415 },
    { id: 33, name: "সূরা আল-আহযাব", arabic: "الأحزاب", ayahs: 73, type: "মাদানী", page: 418 },
    { id: 34, name: "সূরা সাবা", arabic: "سبإ", ayahs: 54, type: "মাক্কী", page: 428 },
    { id: 35, name: "সূরা ফাতির", arabic: "فاطر", ayahs: 45, type: "মাক্কী", page: 434 },
    { id: 36, name: "সূরা ইয়াসীন", arabic: "يس", ayahs: 83, type: "মাক্কী", page: 440 },
    { id: 37, name: "সূরা আস-সাফফাত", arabic: "الصافات", ayahs: 182, type: "মাক্কী", page: 446 },
    { id: 38, name: "সূরা সাদ", arabic: "ص", ayahs: 88, type: "মাক্কী", page: 453 },
    { id: 39, name: "সূরা আয-যুমার", arabic: "الزمر", ayahs: 75, type: "মাক্কী", page: 458 },
    { id: 40, name: "সূরা আল-মু'মিন", arabic: "غافر", ayahs: 85, type: "মাক্কী", page: 467 },
    { id: 41, name: "সূরা হা-মীম আস-সাজদা", arabic: "فصلت", ayahs: 54, type: "মাক্কী", page: 477 },
    { id: 42, name: "সূরা আশ-শুরা", arabic: "الشورى", ayahs: 53, type: "মাক্কী", page: 483 },
    { id: 43, name: "সূরা আয-যুখরুফ", arabic: "الزخرف", ayahs: 89, type: "মাক্কী", page: 489 },
    { id: 44, name: "সূরা আদ-দুখান", arabic: "الدخان", ayahs: 59, type: "মাক্কী", page: 496 },
    { id: 45, name: "সূরা আল-জাসিয়া", arabic: "الجاثية", ayahs: 37, type: "মাক্কী", page: 499 },
    { id: 46, name: "সূরা আল-আহকাফ", arabic: "الأحقاف", ayahs: 35, type: "মাক্কী", page: 502 },
    { id: 47, name: "সূরা মুহাম্মদ", arabic: "محمد", ayahs: 38, type: "মাদানী", page: 507 },
    { id: 48, name: "সূরা আল-ফাতহ", arabic: "الفتح", ayahs: 29, type: "মাদানী", page: 511 },
    { id: 49, name: "সূরা আল-হুজুরাত", arabic: "الحجرات", ayahs: 18, type: "মাদানী", page: 515 },
    { id: 50, name: "সূরা ক্বাফ", arabic: "ق", ayahs: 45, type: "মাক্কী", page: 518 },
    { id: 51, name: "সূরা আয-যারিয়াত", arabic: "الذاريات", ayahs: 60, type: "মাক্কী", page: 523 },
    { id: 52, name: "সূরা আত-তূর", arabic: "الطور", ayahs: 49, type: "মাক্কী", page: 526 },
    { id: 53, name: "সূরা আন-নাজম", arabic: "النجم", ayahs: 62, type: "মাক্কী", page: 528 },
    { id: 54, name: "সূরা আল-কামার", arabic: "القمر", ayahs: 55, type: "মাক্কী", page: 531 },
    { id: 55, name: "সূরা আর-রাহমান", arabic: "الرحمن", ayahs: 78, type: "মাদানী", page: 534 },
    { id: 56, name: "সূরা আল-ওয়াকিয়াহ", arabic: "الواقعة", ayahs: 96, type: "মাক্কী", page: 537 },
    { id: 57, name: "সূরা আল-হাদীদ", arabic: "الحديد", ayahs: 29, type: "মাদানী", page: 541 },
    { id: 58, name: "সূরা আল-মুজাদালাহ", arabic: "المجادلة", ayahs: 22, type: "মাদানী", page: 545 },
    { id: 59, name: "সূরা আল-হাশর", arabic: "الحشر", ayahs: 24, type: "মাদানী", page: 549 },
    { id: 60, name: "সূরা আল-মুমতাহিনাহ", arabic: "الممتحنة", ayahs: 13, type: "মাদানী", page: 551 },
    { id: 61, name: "সূরা আস-সাফ", arabic: "الصف", ayahs: 14, type: "মাদানী", page: 553 },
    { id: 62, name: "সূরা আল-জুমু'আহ", arabic: "الجمعة", ayahs: 11, type: "মাদানী", page: 554 },
    { id: 63, name: "সূরা আল-মুনাফিকুন", arabic: "المنافقون", ayahs: 11, type: "মাদানী", page: 556 },
    { id: 64, name: "সূরা আত-তাগাবুন", arabic: "التغابن", ayahs: 18, type: "মাদানী", page: 558 },
    { id: 65, name: "সূরা আত-তালাক", arabic: "الطلاق", ayahs: 12, type: "মাদানী", page: 560 },
    { id: 66, name: "সূরা আত-তাহরীম", arabic: "التحريم", ayahs: 12, type: "মাদানী", page: 562 },
    { id: 67, name: "সূরা আল-মুলক", arabic: "الملك", ayahs: 30, type: "মাক্কী", page: 564 },
    { id: 68, name: "সূরা আল-কালাম", arabic: "القلم", ayahs: 52, type: "মাক্কী", page: 567 },
    { id: 69, name: "সূরা আল-হাক্কাহ", arabic: "الحاقة", ayahs: 52, type: "মাক্কী", page: 570 },
    { id: 70, name: "সূরা আল-মা'আরিজ", arabic: "المعارج", ayahs: 44, type: "মাক্কী", page: 572 },
    { id: 71, name: "সূরা নূহ", arabic: "نوح", ayahs: 28, type: "মাক্কী", page: 574 },
    { id: 72, name: "সূরা আল-জিন", arabic: "الجن", ayahs: 28, type: "মাক্কী", page: 575 },
    { id: 73, name: "সূরা আল-মুযযাম্মিল", arabic: "المزمل", ayahs: 20, type: "মাক্কী", page: 577 },
    { id: 74, name: "সূরা আল-মুদ্দাস্সির", arabic: "المدثر", ayahs: 56, type: "মাক্কী", page: 578 },
    { id: 75, name: "সূরা আল-কিয়ামাহ", arabic: "القيامة", ayahs: 40, type: "মাক্কী", page: 581 },
    { id: 76, name: "সূরা আদ-দাহর", arabic: "الدهر", ayahs: 31, type: "মাদানী", page: 583 },
    { id: 77, name: "সূরা আল-মুরসালাত", arabic: "المرسلات", ayahs: 50, type: "মাক্কী", page: 585 },
    { id: 78, name: "সূরা আন-নাবা", arabic: "النبأ", ayahs: 40, type: "মাক্কী", page: 587 },
    { id: 79, name: "সূরা আন-নাজি'আত", arabic: "النازعات", ayahs: 46, type: "মাক্কী", page: 589 },
    { id: 80, name: "সূরা 'আবাসা", arabic: "عبس", ayahs: 42, type: "মাক্কী", page: 591 },
    { id: 81, name: "সূরা আত-তাকভীর", arabic: "التكوير", ayahs: 29, type: "মাক্কী", page: 592 },
    { id: 82, name: "সূরা আল-ইনফিতার", arabic: "الإنفطار", ayahs: 19, type: "মাক্কী", page: 593 },
    { id: 83, name: "সূরা আল-মুতাফফিফীন", arabic: "المطففين", ayahs: 36, type: "মাক্কী", page: 594 },
    { id: 84, name: "সূরা আল-ইনশিকাক", arabic: "الإنشقاق", ayahs: 25, type: "মাক্কী", page: 596 },
    { id: 85, name: "সূরা আল-বুরুজ", arabic: "البروج", ayahs: 22, type: "মাক্কী", page: 597 },
    { id: 86, name: "সূরা আত-তারিক", arabic: "الطارق", ayahs: 17, type: "মাক্কী", page: 598 },
    { id: 87, name: "সূরা আল-আ'লা", arabic: "الأعلى", ayahs: 19, type: "মাক্কী", page: 599 },
    { id: 88, name: "সূরা আল-গাশিয়াহ", arabic: "الغاشية", ayahs: 26, type: "মাক্কী", page: 600 },
    { id: 89, name: "সূরা আল-ফাজর", arabic: "الفجر", ayahs: 30, type: "মাক্কী", page: 601 },
    { id: 90, name: "সূরা আল-বালাদ", arabic: "البلد", ayahs: 20, type: "মাক্কী", page: 602 },
    { id: 91, name: "সূরা আশ-শামস", arabic: "الشمس", ayahs: 15, type: "মাক্কী", page: 602 },
    { id: 92, name: "সূরা আল-লাইল", arabic: "الليل", ayahs: 21, type: "মাক্কী", page: 603 },
    { id: 93, name: "সূরা আদ-দুহা", arabic: "الضحى", ayahs: 11, type: "মাক্কী", page: 603 },
    { id: 94, name: "সূরা আল-শারহ", arabic: "الشرح", ayahs: 8, type: "মাক্কী", page: 603 },
    { id: 95, name: "সূরা আত-তীন", arabic: "التين", ayahs: 8, type: "মাক্কী", page: 603 },
    { id: 96, name: "সূরা আল-আলাক", arabic: "العلق", ayahs: 19, type: "মাক্কী", page: 604 },
    { id: 97, name: "সূরা আল-কাদর", arabic: "القدر", ayahs: 5, type: "মাক্কী", page: 604 },
    { id: 98, name: "সূরা আল-বাইয়িনাহ", arabic: "البينة", ayahs: 8, type: "মাদানী", page: 604 },
    { id: 99, name: "সূরা আজ-যিলযাল", arabic: "الزلزلة", ayahs: 8, type: "মাদানী", page: 605 },
    { id: 100, name: "সূরা আল-আদিয়াত", arabic: "العاديات", ayahs: 11, type: "মাক্কী", page: 605 },
    { id: 101, name: "সূরা আল-কারি'আহ", arabic: "القارعة", ayahs: 11, type: "মাক্কী", page: 605 },
    { id: 102, name: "সূরা আত-তাকাসুর", arabic: "التكاثر", ayahs: 8, type: "মাক্কী", page: 606 },
    { id: 103, name: "সূরা আল-আসর", arabic: "العصر", ayahs: 3, type: "মাক্কী", page: 606 },
    { id: 104, name: "সূরা আল-হুমাজাহ", arabic: "الهمزة", ayahs: 9, type: "মাক্কী", page: 606 },
    { id: 105, name: "সূরা আল-ফীল", arabic: "الفيل", ayahs: 5, type: "মাক্কী", page: 606 },
    { id: 106, name: "সূরা কুরাইশ", arabic: "قريش", ayahs: 4, type: "মাক্কী", page: 606 },
    { id: 107, name: "সূরা আল-মাউন", arabic: "الماعون", ayahs: 7, type: "মাক্কী", page: 607 },
    { id: 108, name: "সূরা আল-কাওসার", arabic: "الكوثر", ayahs: 3, type: "মাক্কী", page: 607 },
    { id: 109, name: "সূরা আল-কাফিরুন", arabic: "الكافرون", ayahs: 6, type: "মাক্কী", page: 607 },
    { id: 110, name: "সূরা আন-নাসর", arabic: "النصر", ayahs: 3, type: "মাদানী", page: 607 },
    { id: 111, name: "সূরা আল-মাসাদ", arabic: "المسد", ayahs: 5, type: "মাক্কী", page: 607 },
    { id: 112, name: "সূরা আল-ইখলাস", arabic: "الإخلاص", ayahs: 4, type: "মাক্কী", page: 604 },
    { id: 113, name: "সূরা আল-ফালাক", arabic: "الفلق", ayahs: 5, type: "মাক্কী", page: 604 },
    { id: 114, name: "সূরা আন-নাস", arabic: "الناس", ayahs: 6, type: "মাক্কী", page: 604 }
];

// ============================================
// হাদিস সিস্টেম - ৮টি প্রসিদ্ধ কিতাব
// ============================================

const hadithBooks = {
    bukhari: {
        id: 'bukhari',
        name: 'সহিহ বুখারী',
        arabicName: 'صحيح البخاري',
        author: 'ইমাম মুহাম্মদ আল-বুখারী (রহ.)',
        totalHadith: 7563,
        volumes: 9,
        description: 'সকল মুসলিমের নিকট সর্বাধিক গ্রহণযোগ্য হাদিস গ্রন্থ। ইমাম বুখ
