const GITHUB_USER = 'hidayahvibesbd'; // আপনার ইউজারনেম এখানে দিন
const GITHUB_REPO = 'hidayahvibesbd';

document.addEventListener('DOMContentLoaded', () => {
    loadGitHubPosts();
    loadLocalComments();
    
    // Navigation Logic
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if(this.hash) {
                e.preventDefault();
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.querySelector(this.hash).classList.add('active');
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

async function loadGitHubPosts() {
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/posts`;
    try {
        const res = await fetch(url);
        const files = await res.json();
        
        for (let file of files) {
            if(file.name.endsWith('.md')) {
                const data = await fetch(file.download_url).then(r => r.text());
                displayPost(data);
            }
        }
    } catch (e) { console.log("অ্যাডমিন পোস্ট লোড হয়নি"); }
}

function displayPost(md) {
    // সাধারণ মার্কডাউন পার্সিং (অ্যাডমিন প্যানেলের জন্য)
    const title = md.match(/title: (.*)/)?.[1]?.replace(/"/g, '') || "শিরোনামহীন";
    const category = md.match(/category: (.*)/)?.[1]?.replace(/"/g, '') || "অন্যান্য";
    const content = md.split('---').pop();

    const html = `
        <div class="card">
            <h3>${title}</h3>
            <p>${content}</p>
            <small>বিভাগ: ${category}</small>
        </div>`;
    
    if(category.includes("কুরআন")) document.getElementById('quranList').innerHTML += html;
    else if(category.includes("হাদিস")) document.getElementById('hadithList').innerHTML += html;
    else document.getElementById('articlesList').innerHTML += html;
    document.getElementById('latestPosts').innerHTML += html;
}

// কমেন্ট সিস্টেম (লোকাল স্টোরেজ ব্যবহার করে)
function saveComment() {
    const name = document.getElementById('commenterName').value || "অজ্ঞাত";
    const text = document.getElementById('commentText').value;
    if(!text) return alert("কিছু লিখুন");

    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push({name, text, date: new Date().toLocaleDateString()});
    localStorage.setItem('comments', JSON.stringify(comments));
    document.getElementById('commentText').value = "";
    loadLocalComments();
}

function loadLocalComments() {
    const container = document.getElementById('displayComments');
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    container.innerHTML = comments.map(c => `
        <div style="border-bottom:1px solid #ddd; padding:10px;">
            <strong>${c.name}</strong> <small>(${c.date})</small>
            <p>${c.text}</p>
        </div>
    `).join('');
}
