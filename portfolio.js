// variabels
let selectedContent = "";
let aboutTab;
let projectsTab;
let workTab;
let certTab;
let contactTab;
let containers;
let aboutMe;
let personalProjects;
let workExperiences;
let certificates;
let contentTitle;
let content;
let nav;
let hamburgerContainer;
let fullPage;
let currScrollY;
let allImages;
let videoBtns;

// called when the page loads
const init = () => {
    // elements clikced on to show the according container
    aboutTab = document.getElementById("about-tab");
    projectsTab = document.getElementById("projects-tab");
    workTab = document.getElementById("work-tab");
    certTab = document.getElementById("cert-tab");
    contactTab = document.getElementById("footer-tab");
    containers = document.querySelectorAll(".container");
    fullPage = document.querySelector('#fullpage');

    nav = document.querySelector("nav");
    content = document.querySelector("#content");

    allImages = document.querySelectorAll(".content-item-img");

    // buttons
    videoBtns = document.querySelectorAll(".video-btn");

    // all individual containers
    aboutMe = document.querySelector(".about-container");
    personalProjects = document.querySelector(".project-container");
    workExperiences = document.querySelector(".work-container");
    certificates = document.querySelector(".cert-container");

    contentTitle = document.querySelector("h2");
    hamburgerContainer = document.querySelector('.hamburger-container');

    selectedContent = aboutMe;

    // add event listeners
    window.addEventListener('resize', function(e) {
        // if it's mobile size, add 'inactive' so that the menu won't show 
        if (mobile()) {
            // make sure it doesn't have 'inactive' already before toggling
            if(!nav.classList.contains('inactive')){
                toggleInactive(nav);
            }
        }
        // otherwise, show the menu
        else{
            // make sure it has 'inactive' already before toggling
            if(nav.classList.contains('inactive')){
                toggleInactive(nav);
            }
        }
    });

    //  event for the project images
    allImages.forEach(i => {
        let btn = i.querySelector("button");

        i.addEventListener("mouseover", () => {
            if (btn.classList.contains("inactive")) {
                btn.classList.remove("inactive");
            }
        })

        i.addEventListener("mouseout", () => {
            if (!btn.classList.contains("inactive")) {
                btn.classList.add("inactive");
            }
        })
    })

    // about tab click event
    aboutTab.addEventListener("click", () => {
        console.log("aboutTab onclick");
        if (mobile()) {
            closeNav();
        }

        setLightGrayBg();

        if (selectedContent != "") {
            toggleInactive(selectedContent);
        }
        selectedContent = aboutMe;
        if (aboutMe.classList.contains("inactive")) {
            toggleInactive(aboutMe);
        }
        contentTitle.innerHTML = "About Me";
    })

    // personal projects tab click event
    projectsTab.addEventListener("click", () => {
        console.log("projectsTab onclick");
        if (mobile()) {
            closeNav();
        }

        setGrayBg();

        if (selectedContent != "") {
            toggleInactive(selectedContent);
        }
        selectedContent = personalProjects;
        toggleInactive(personalProjects);
        contentTitle.innerHTML = "Personal Projects";
    })

    // work experience tab click event
    workTab.addEventListener("click", () => {
        console.log("workTab onclick");
        if (mobile()) {
            closeNav();
        }

        setGrayBg();

        if (selectedContent != "") {
            toggleInactive(selectedContent);
        }
        selectedContent = workExperiences;
        toggleInactive(workExperiences);
        contentTitle.innerHTML = "Work Experience";
    })

    // certificate tab click event
    certTab.addEventListener("click", () => {
        console.log("certTab onclick");
        if (mobile()) {
            closeNav();
        }

        setGrayBg();

        if (selectedContent != "") {
            toggleInactive(selectedContent);
        }
        selectedContent = certificates;
        toggleInactive(certificates);
        contentTitle.innerHTML = "Certificates";
    })


    // contact tab click event
    contactTab.addEventListener("click", () => {
        console.log("contactTab onclick");
        if (mobile()) {
            closeNav();
        }

        setGrayBg();
    })

    // if the screen size is mobile, add 'inactive' to nav's classlist
    if (mobile()) {
        if(!nav.classList.contains('inactive')){
            toggleInactive(nav);
        }
    }
}

// check if the device screen size is mobile
function mobile() {
    if (window.innerWidth <= 800) {
        return true;
    }
    return false;
}

// add or remove 'inactive' from the classlist of the passed in element
const toggleInactive = (content) => {
    content.classList.toggle("inactive");
}

// switch between hamburger and the x
function hamburgerEffect(x) {
    x.classList.toggle("change");
    toggleInactive(nav);
}

// close up the nav bar once a selection is made or when the x is clicked
function closeNav() {
    hamburgerContainer.classList.toggle("change");
    toggleInactive(nav);
}

// zoom in on the image clicked 
function zoomIn(img) {
    // store the original position where you clicked on the image
    currScrollY = window.scrollY;

    // assign the img src to the fullpage background image to display it
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';

    // scroll to the top of the page because the fullpage div is at the top of the page
    window.scrollTo(0, 0);
}


// exit full page view when clicked on it again
function exitFullPage() {
    // remove the full screen image from display
    fullPage.style.display = 'none';

    // scroll to the original position where you clicked on the image
    window.scrollTo(0, currScrollY);
}

function setGrayBg() {
    content.style.backgroundImage = 'url("media/grayBg3.jpg")';
    // content.style.opacity = 0.5;
}

function setLightGrayBg() {
    content.style.backgroundImage = 'url("media/grayBg2.jpg")';
    // content.style.opacity = 0.7;
}

window.onload = init;