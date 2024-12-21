document.addEventListener('DOMContentLoaded', () => {
    changeContent('work'); // Load 'work' content initially
});


document.addEventListener('DOMContentLoaded', () => {
    
});


const workButton = document.getElementById("work");
const socialButton = document.getElementById("social");
const title = document.getElementById("title");
const workContent = document.getElementById('content-work');
const socialContent = document.getElementById('content-social');
const moreButton = document.getElementById('more-button');
const moreMenu = document.getElementById('more-section');
const aboutMe = document.getElementById('about');
const credit = document.getElementById('info')
const project_text = document.getElementById('project-text')

function changeContent(type) {
    if (type === 'work') {
        workContent.classList.add('active');
        workContent.classList.remove('hidden');
        socialContent.classList.add('hidden');
        socialContent.classList.remove('active');


        title.classList.remove('animate'); // Reset animation
        void title.offsetWidth; // Trigger reflow to restart the animation
        title.classList.add('animate');

        // Update button styles

        credit.style.cssText = 'bottom: -180%;';

        socialButton.style.cssText = 'background-color: transparent; color: rgba(0, 0, 0, 0.5)'

        // Correctly set the box shadow
workButton.style.cssText = "box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5); background-color: #FFFFFF; color: #000;";


     // Correctly set the box shadow
workButton.style.cssText = "box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5); background-color: #FFFFFF; color: #000;";


        // Update title gradient
        title.style.backgroundImage = "linear-gradient(135deg, rgba(163,163,163,1) 12%, rgba(0,0,0,1) 46%)";
    } else if (type === 'social') {
        socialContent.classList.add('active');
        socialContent.classList.remove('hidden');
        workContent.classList.add('hidden');
        workContent.classList.remove('active');

        title.classList.remove('animate'); // Reset animation
        void title.offsetWidth; // Trigger reflow to restart the animation
        title.classList.add('animate');


          credit.style.cssText = 'bottom: -80%;';
          project_text.classList.add('hidden')
        

        // Update button styles
      
    workButton.style.cssText = 'background-color: transparent; color: rgba(0, 0, 0, 0.5)'

        // Correctly set the box shadow
socialButton.style.cssText = "box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5); background-color: #FFFFFF; color: #000;";



        // Update title gradient
        title.style.backgroundImage = "linear-gradient(141deg, rgba(173,241,224,1) 0%, rgba(128,117,255,1) 28%, rgba(255,113,113,1) 97%)";
    }
}

// Add event listeners for button clicks
workButton.addEventListener('click', () => changeContent('work'));
socialButton.addEventListener('click', () => changeContent('social'));




moreButton.addEventListener('click', () => {

moreMenu.classList.toggle('active')
  
})
