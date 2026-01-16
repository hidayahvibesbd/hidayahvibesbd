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
