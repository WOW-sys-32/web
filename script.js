/*
 * TASTY CREAMERY NAVIGATION SCRIPT
 * Handles smooth scrolling for menu tabs and auto-hiding of buttons on scroll.
 */

// --- 1. NAVIGATION TAB CLICK HANDLER ---
const handleTabClick = function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get the target section ID from the href (e.g., href="#reviews")
    const targetId = this.getAttribute('href');

    // Remove 'active' class from all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to clicked link
    this.classList.add('active');

    // Scroll to the target section
    // We subtract 80px so the top of the section doesn't get hidden behind the nav
    const section = document.querySelector(targetId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth"
        });
    }
};

// --- 2. AUTO-HIDE MENU TABS ---
let lastScrollY = window.scrollY;
const navHeight = document.querySelector('.nav-bar')?.offsetHeight || 0;
const tabNav = document.getElementById('page-tabs');

if (tabNav) {
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        // Toggle display based on scroll position
        if (currentScrollY > navHeight) {
            tabNav.style.opacity = "0";
            tabNav.style.pointerEvents = "none";
            tabNav.style.transform = "translateY(-100%)";
        } else {
            tabNav.style.opacity = "1";
            tabNav.style.pointerEvents = "auto";
            tabNav.style.transform = "translateY(0)";
        }

        lastScrollY = currentScrollY;
    });
}
