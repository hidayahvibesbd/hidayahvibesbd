// Main JavaScript for Hidayah Vibes BD

// DOM Elements
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('.section');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

// Sample data (in a real application, this would come from a database)
const surahs = [
    { id: 1, name: "সূরা আল-ফাতিহা", arabic: "الفاتحة", verses: 7, type: "মাক্কী" },
    { id: 2, name: "সূরা আল-বাকারা", arabic: "البقرة", verses: 286, type: "মাদানী" },
    { id: 3, name: "সূরা আল-ইমরান", arabic: "آل عمران", verses: 200, type: "মাদানী" },
    { id: 4, name: "সূরা আন-নিসা", arabic: "النساء", verses: 176, type: "মাদানী" },
    { id: 5, name: "সূরা আল-মায়িদাহ", arabic: "المائدة", verses: 120, type: "মাদানী" },
    { id: 6, name: "সূরা আল-আন'আম", arabic: "الأنعام", verses: 165, type: "মাক্কী" },
    { id: 7, name: "সূরা আল-আ'রাফ", arabic: "الأعراف", verses: 206, type: "মাক্কী" },
    { id: 8, name: "সূরা আল-আনফাল", arabic: "الأنفال", verses: 75, type: "মাদানী" },
    { id: 9, name: "সূরা আত-তাওবাহ", arabic: "التوبة", verses: 129, type: "মাদানী" },
    { id: 10, name: "সূরা ইউনুস", arabic: "يونس", verses: 109, type: "মাক্কী" }
];

const hadiths = [
    { 
        id: 1, 
        arabic: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى", 
        bangla: "নিশ্চয় সকল কাজের ফলাফল নির্ভর করে নিয়তের উপর। আর প্রত্যেক ব্যক্তি যা নিয়ত করবে তাই সে পাবে।", 
        reference: "সহীহ বুখারী, হাদীস নং ১" 
    },
    { 
        id: 2, 
        arabic: "من حسن إسلام المرء تركه ما لا يعنيه", 
        bangla: "ব্যক্তির ইসলামের সৌন্দর্য এই যে, সে অপ্রয়োজনীয় বিষয় বর্জন করে।", 
        reference: "তিরমিজী, হাদীস নং ২৩১৭" 
    },
    { 
        id: 3, 
        arabic: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه", 
        bangla: "তোমাদের কেউ প্রকৃত মুমিন হবে না, যতক্ষণ না সে তার ভাইয়ের জন্য তা পছন্দ করবে, যা সে নিজের জন্য পছন্দ করে।", 
        reference: "সহীহ বুখারী, হাদীস নং ১৩" 
    },
    { 
        id: 4, 
        arabic: "الكلمة الطيبة صدقة", 
        bangla: "ভালো কথা সদকাস্বরূপ।", 
        reference: "সহীহ বুখারী, হাদীস নং ২৯৮৯" 
    },
    { 
        id: 5, 
        arabic: "اتق الله حيثما كنت", 
        bangla: "তুমি যেখানেই থাকো, আল্লাহকে ভয় করো।", 
        reference: "তিরমিজী, হাদীস নং ১৯৮৭" 
    }
];

const articles = [
    { 
        id: 1, 
        title: "রমজানের প্রস্তুতি", 
        content: "রমজান মাস আসন্ন। এই মাসের প্রস্তুতির জন্য আমাদের করণীয় বিষয়গুলো জানা জরুরি...", 
        author: "শাইখ আবদুল্লাহ আল মামুন", 
        date: "২০২৪-০২-১৫" 
    },
    { 
        id: 2, 
        title: "সালাতের গুরুত্ব", 
        content: "সালাত ইসলামের দ্বিতীয় রুকন এবং মুসলিম জীবনের অন্যতম গুরুত্বপূর্ণ ইবাদাত...", 
        author: "ড. মুহাম্মাদ জুনায়েদ", 
        date: "২০২৪-০২-১০" 
    },
    { 
        id: 3, 
        title: "কুরআন তেলাওয়াতের ফজিলত", 
        content: "কুরআন তেলাওয়াত করলে প্রতি হরফের বদলে দশ নেকী করে দেওয়া হয়...", 
        author: "মুফতি আহমাদুল্লাহ", 
        date: "২০২৪-০২-০৫" 
    },
    { 
        id: 4, 
        title: "আল্লাহর উপর ভরসা", 
        content: "আল্লাহর উপর ভরসা বা তাওয়াক্কুল ইমানের অপরিহার্য অংশ...", 
        author: "মাওলানা সৈয়দ নুরুল আবসার", 
        date: "২০২৪-০১-২৮" 
    }
];

const videos = [
    { 
        id: 1, 
        title: "রমজানের প্রস্তুতি ও করণীয়", 
        duration: "১৫:৩০", 
        views: "২.৫ হাজার" 
    },
    { 
        id: 2, 
        title: "সূরা ইয়াসিনের তাফসির", 
        duration: "৪৫:২০", 
        views: "৫.২ হাজার" 
    },
    { 
        id: 3, 
        title: "দুআ কবুলের সময়সমূহ", 
        duration: "২২:১০", 
        views: "৩.৮ হাজার" 
    },
    { 
        id: 4, 
        title: "সালাতুতে তাসবিহর নিয়ম", 
        duration: "১৮:৪৫", 
        views: "১.৯ হাজার" 
    }
];

// Comments data
let comments = [
    { id: 1, author: "রহমত আলী", text: "আলহামদুলিল্লাহ, খুব সুন্দর ওয়েবসাইট। কুরআন ও হাদিস পড়া খুব সহজ হয়ে গেছে।", date: "২০২৪-০২-২০" },
    { id: 2, author: "আয়েশা সিদ্দিকা", text: "মাশাআল্লাহ, ইসলামিক জ্ঞান অর্জনের জন্য চমৎকার একটি প্ল্যাটফর্ম।", date: "২০২৪-০২-১৮" }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load initial data
    loadSurahs();
    loadHadiths();
    loadArticles();
    loadVideos();
    loadComments();
    
    // Set up navigation
    setupNavigation();
    
    // Set up mobile menu toggle
    setupMobileMenu();
    
    // Set up search functionality
    setupSearch();
    
    // Set up contact form
    setupContactForm();
    
    // Show home section by default
    showSection('home');
});

// Navigation setup
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the section ID from href
            const sectionId = this.getAttribute('href').substring(1);
            
            // Show the corresponding section
            showSection(sectionId);
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Go to specific section (used by buttons)
function goToSection(sectionId) {
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Show the section
    showSection(sectionId);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile menu setup
function setupMobileMenu() {
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
}

// Search functionality
function setupSearch() {
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchBar) {
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const query = searchBar.value.trim();
    
    if (query) {
        alert(`"${query}" অনুসন্ধান করা হচ্ছে...\n\n(এই ফিচারটি সম্পূর্ণভাবে কাজ করবে যখন ব্যাকএন্ড সার্ভার যুক্ত করা হবে)`);
        // In a real application, this would redirect to search results or filter content
    }
}

// Load surahs
function loadSurahs() {
    const surahList = document.getElementById('surahList');
    
    if (!surahList) return;
    
    surahList.innerHTML = '';
    
    surahs.forEach(surah => {
        const surahItem = document.createElement('div');
        surahItem.className = 'surah-item';
        surahItem.innerHTML = `
            <div class="surah-number">${surah.id}</div>
            <h3 class="surah-name">${surah.name}</h3>
            <p class="surah-name-arabic">${surah.arabic}</p>
            <p class="surah-details">
                <span>আয়াত: ${surah.verses}</span>
                <span>${surah.type}</span>
            </p>
        `;
        
        surahItem.addEventListener('click', function() {
            alert(`সূরা ${surah.name} খোলা হচ্ছে...\n\n(এই ফিচারটি সম্পূর্ণভাবে কাজ করবে যখন সম্পূর্ণ কুরআনের ডাটা যুক্ত করা হবে)`);
        });
        
        surahList.appendChild(surahItem);
    });
}

// Load hadiths
function loadHadiths() {
    const hadithList = document.getElementById('hadithList');
    
    if (!hadithList) return;
    
    hadithList.innerHTML = '';
    
    hadiths.forEach(hadith => {
        const hadithItem = document.createElement('div');
        hadithItem.className = 'hadith-item';
        hadithItem.innerHTML = `
            <div class="hadith-text">
                <p class="arabic-text">${hadith.arabic}</p>
                <p class="bangla-translation">${hadith.bangla}</p>
                <p class="hadith-reference">${hadith.reference}</p>
            </div>
        `;
        
        hadithList.appendChild(hadithItem);
    });
}

// Load articles
function loadArticles() {
    const articlesList = document.getElementById('articlesList');
    
    if (!articlesList) return;
    
    articlesList.innerHTML = '';
    
    articles.forEach(article => {
        const articleItem = document.createElement('div');
        articleItem.className = 'article-item';
        articleItem.innerHTML = `
            <h3 class="article-title">${article.title}</h3>
            <p class="article-content">${article.content.substring(0, 150)}...</p>
            <div class="article-meta">
                <p><strong>লেখক:</strong> ${article.author}</p>
                <p><strong>তারিখ:</strong> ${article.date}</p>
            </div>
        `;
        
        articleItem.addEventListener('click', function() {
            alert(`"${article.title}" নিবন্ধ পড়া হচ্ছে...\n\n(এই ফিচারটি সম্পূর্ণভাবে কাজ করবে যখন সম্পূর্ণ নিবন্ধের ডাটা যুক্ত করা হবে)`);
        });
        
        articlesList.appendChild(articleItem);
    });
}

// Load videos
function loadVideos() {
    const videosList = document.getElementById('videosList');
    
    if (!videosList) return;
    
    videosList.innerHTML = '';
    
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <div class="video-thumbnail">
                <i class="fas fa-play-circle"></i>
            </div>
            <h3 class="video-title">${video.title}</h3>
            <div class="video-details">
                <span><i class="fas fa-clock"></i> ${video.duration}</span>
                <span><i class="fas fa-eye"></i> ${video.views}</span>
            </div>
        `;
        
        videoItem.addEventListener('click', function() {
            alert(`"${video.title}" ভিডিওটি দেখা হচ্ছে...\n\n(এই ফিচারটি সম্পূর্ণভাবে কাজ করবে যখন ভিডিও প্লেয়ার যুক্ত করা হবে)`);
        });
        
        videosList.appendChild(videoItem);
    });
}

// Load and display comments
function loadComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    
    if (!commentsContainer) return;
    
    commentsContainer.innerHTML = '';
    
    if (comments.length === 0) {
        commentsContainer.innerHTML = '<p>এখনও কোন মন্তব্য নেই। প্রথম মন্তব্যকারী হোন!</p>';
        return;
    }
    
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment-item';
        commentElement.innerHTML = `
            <div class="comment-author">${comment.author}</div>
            <div class="comment-date">${comment.date}</div>
            <div class="comment-text">${comment.text}</div>
        `;
        
        commentsContainer.appendChild(commentElement);
    });
}

// Add a new comment
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (!commentText) {
        alert('দয়া করে মন্তব্য লিখুন!');
        return;
    }
    
    // Create a new comment object
    const newComment = {
        id: comments.length + 1,
        author: 'আপনি',
        text: commentText,
        date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
    };
    
    // Add to comments array
    comments.unshift(newComment);
    
    // Clear the input
    commentInput.value = '';
    
    // Reload comments
    loadComments();
    
    alert('আপনার মন্তব্য সংরক্ষণ করা হয়েছে!');
}

// Contact form setup
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('দয়া করে সব তথ্য প্রদান করুন!');
            return;
        }
        
        // In a real application, this would send the data to a server
        alert(`ধন্যবাদ ${name}! আপনার বার্তা পাওয়া গেছে। আমরা শীঘ্রই আপনার ইমেইল ${email} এ যোগাযোগ করব।`);
        
        // Reset the form
        contactForm.reset();
    });
}