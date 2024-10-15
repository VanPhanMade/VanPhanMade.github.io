// variables
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

// Carousel variables
let currentIndex = 0;
let videos;

// called when the page loads
const init = () => {
    // elements clicked on to show the according container
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

    // Carousel setup
    videos = document.querySelectorAll('.carousel-video');

    // all individual containers
    aboutMe = document.querySelector(".about-container");
    personalProjects = document.querySelector(".project-container");
    workExperiences = document.querySelector(".work-container");
    certificates = document.querySelector(".cert-container");

    contentTitle = document.querySelector("h2");
    hamburgerContainer = document.querySelector('.hamburger-container');

    selectedContent = aboutMe;

    // Carousel event listeners
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = videos.length - 1;
        }
        updateCarousel();
    });

    document.querySelector('.carousel-next').addEventListener('click', () => {
        if (currentIndex < videos.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Add event listeners
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

    // Event for the project images
    allImages.forEach(i => {
        let btn = i.querySelector("button");

        i.addEventListener("mouseover", () => {
            if (btn.classList.contains("inactive")) {
                btn.classList.remove("inactive");
            }
        });

        i.addEventListener("mouseout", () => {
            if (!btn.classList.contains("inactive")) {
                btn.classList.add("inactive");
            }
        });
    });

    // About tab click event
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
    });

    // Personal projects tab click event
    // projectsTab.addEventListener("click", () => {
    //     console.log("projectsTab onclick");
    //     if (mobile()) {
    //         closeNav();
    //     }

    //     setGrayBg();

    //     if (selectedContent != "") {
    //         toggleInactive(selectedContent);
    //     }
    //     selectedContent = personalProjects;
    //     toggleInactive(personalProjects);
    //     contentTitle.innerHTML = "Personal Projects";
    // });

    // // Work experience tab click event
    // workTab.addEventListener("click", () => {
    //     console.log("workTab onclick");
    //     if (mobile()) {
    //         closeNav();
    //     }

    //     setGrayBg();

    //     if (selectedContent != "") {
    //         toggleInactive(selectedContent);
    //     }
    //     selectedContent = workExperiences;
    //     toggleInactive(workExperiences);
    //     contentTitle.innerHTML = "Work Experience";
    // });

    // Certificate tab click event
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
    });

    // Contact tab click event
    contactTab.addEventListener("click", () => {
        console.log("contactTab onclick");
        if (mobile()) {
            closeNav();
        }

        setGrayBg();
    });

    // If the screen size is mobile, add 'inactive' to nav's classlist
    if (mobile()) {
        if(!nav.classList.contains('inactive')){
            toggleInactive(nav);
        }
    }
}

// Check if the device screen size is mobile
function mobile() {
    return window.innerWidth <= 800;
}

// Add or remove 'inactive' from the classlist of the passed in element
const toggleInactive = (content) => {
    content.classList.toggle("inactive");
}

// Update the carousel display
function updateCarousel() {
    const offset = -currentIndex * 100;
    videos.forEach(video => {
        video.style.transform = `translateX(${offset}%)`;
    });
}

// Switch between hamburger and the x
function hamburgerEffect(x) {
    x.classList.toggle("change");
    toggleInactive(nav);
}

// Close the nav bar once a selection is made or when the x is clicked
function closeNav() {
    hamburgerContainer.classList.toggle("change");
    toggleInactive(nav);
}

// Zoom in on the image clicked 
function zoomIn(img) {
    // Store the original position where you clicked on the image
    currScrollY = window.scrollY;

    // Assign the img src to the fullpage background image to display it
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';

    // Scroll to the top of the page because the fullpage div is at the top of the page
    window.scrollTo(0, 0);
}

// Exit full page view when clicked on it again
function exitFullPage() {
    // Remove the full screen image from display
    fullPage.style.display = 'none';

    // Scroll to the original position where you clicked on the image
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