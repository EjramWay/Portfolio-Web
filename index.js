function createLoadingMask() {
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

window.addEventListener('load', createLoadingMask);
window.addEventListener('beforeunload', createLoadingMask);

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

        title.style.backgroundImage = "linear-gradient(135deg, rgba(163,163,163,1) 12%, rgba(0,0,0,1) 46%)";
    } else if (type === 'social') {
        socialContent.classList.add('active');
        socialContent.classList.remove('hidden');
        workContent.classList.add('hidden');
        workContent.classList.remove('active');

        socialTitle.classList.remove('animate');
        void socialTitle.offsetWidth;
        socialTitle.classList.add('animate');

        credit.style.cssText = 'bottom: -158%;';
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