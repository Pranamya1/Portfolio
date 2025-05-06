//GSAP animation

// GSAP Animation for Navbar
// Show/hide navbars on scroll
if (window.innerWidth > 1024) {
    gsap.fromTo(".lap-fis-navbar",
      {
        opacity: 1,
        y: 0,
        pointerEvents: "auto"
      },
      {
        scrollTrigger: {
          trigger: ".home",
          scroller: "body",
          start: "top -5%",
          end: "top -10%",
          scrub: 2,
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: -100,
        pointerEvents: "none"
      }
    );
  
    gsap.fromTo(".lap-seco-navbar",
      {
        opacity: 0,
        y: -100,
        pointerEvents: "none"
      },
      {
        scrollTrigger: {
          trigger: ".home",
          scroller: "body",
          start: "top -5%",
          end: "top -10%",
          scrub: 2,
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        pointerEvents: "auto"
      }
    );
  }
  

// Slide bar toggle function
function mob_slidingNavbar() {
    const slidebar = document.getElementById("mobSlidebar");
    const body = document.body;
  
    // Toggle active class to show/hide slidebar
    slidebar.classList.toggle("active");
  
    // Toggle body blur effect
    body.classList.toggle("blur-background");
  }
  
  // Close the slidebar when the user scrolls
  window.addEventListener("scroll", function() {
    const slidebar = document.getElementById("mobSlidebar");
    const body = document.body;
  
    if (slidebar.classList.contains("active")) {
      // Remove the active class and blur effect when scrolling
      slidebar.classList.remove("active");
      body.classList.remove("blur-background");
    }
  });
  
  