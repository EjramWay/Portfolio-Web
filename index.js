// Use sessionStorage to track if this is the first visit
function createLoadingMask() {
    // Check if this is the first visit in this session
    if (sessionStorage.getItem('hasVisited')) {
        // If not first visit, only run loading mask if page is being closed/opened
        if (!document.hidden) {
            return;
        }
    } else {
        // Mark that user has visited in this session
        sessionStorage.setItem('hasVisited', 'true');
    }

    document.body.classList.add('loading');
    const mask = document.createElement('div');
    mask.className = 'page-mask';
    document.body.appendChild(mask);

    setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loading');
        setTimeout(() => mask.remove(), 6000);
        changeContent('work');
    }, 6000);
}

// Only run on initial page load and page visibility changes
window.addEventListener('load', () => {
    // Check if this is the first visit
    if (!sessionStorage.getItem('hasVisited')) {
        createLoadingMask();
    }
});

// Handle page visibility changes (closing/opening)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is being hidden/closed
        createLoadingMask();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    changeContent('work');
});

// Rest of your existing JavaScript remains the same
const workButton = document.getElementById("work");
const socialButton = document.getElementById("social");
const workContent = document.getElementById('content-work');
const socialContent = document.getElementById('content-social');
const moreButton = document.getElementById('more-button');
const moreMenu = document.getElementById('more-section');
const title = document.getElementById('title')
const credit = document.getElementById('info');
const projectText = document.getElementById('project-text-slider');
const bj_deco = document.getElementById('background-decoration');
const bj_deco2 = document.getElementById('background-overlay');

function changeContent(type) {
    const workTitle = workContent.querySelector('.title');
    const socialTitle = socialContent.querySelector('.title');
    
    if (type === 'work') {
        workContent.classList.add('active');
        workContent.classList.remove('hidden');
        socialContent.classList.add('hidden');
        socialContent.classList.remove('active');

        title.classList.remove('animate');
        void workTitle.offsetWidth;
        title.classList.add('animate');

        credit.style.cssText = 'bottom: -158%;';
        socialButton.style.cssText = 'background-color: transparent; color: rgba(0, 0, 0, 0.5)';
        workButton.style.cssText = "box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5); background-color: #FFFFFF; color: #000;";

        bj_deco.style.background = "linear-gradient(90deg, rgba(199,199,199,1) 0%, rgba(162,162,162,1) 0%, rgba(255,255,255,1) 89%, rgba(255,255,255,1) 100%)";
        bj_deco2.style.backgroundImage = "linear-gradient(90deg, rgba(199,199,199,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 8%, rgba(138,138,138,1) 74%)";

        workTitle.style.backgroundImage = "linear-gradient(135deg, rgba(116,116,116,1) 10%, rgba(0,0,0,1) 31%)";
    } else if (type === 'social') {
        socialContent.classList.add('active');
        socialContent.classList.remove('hidden');
        workContent.classList.add('hidden');
        workContent.classList.remove('active');

        socialTitle.classList.remove('animate');
        void socialTitle.offsetWidth;
        socialTitle.classList.add('animate');

     
        credit.style.cssText = 'bottom: -110%;';

        projectText.classList.add('hidden');
        workButton.style.cssText = 'background-color: transparent; color: rgba(0, 0, 0, 0.5)';
        socialButton.style.cssText = "box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5); background-color: #FFFFFF; color: #000;";

        bj_deco.style.backgroundImage = "";
        bj_deco2.style.backgroundImage = "";

        socialTitle.style.backgroundImage = "linear-gradient(141deg, rgba(173,241,224,1) 0%, rgba(128,117,255,1) 28%, rgba(255,113,113,1) 97%)";
    }
}

workButton.addEventListener('click', () => changeContent('work'));
socialButton.addEventListener('click', () => changeContent('social'));
moreButton.addEventListener('click', () => moreMenu.classList.toggle('active'));