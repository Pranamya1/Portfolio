//GSAP animation

// GSAP Animation for Navbar
gsap.to(".lap-first-navbar", {
    scrollTrigger: {
        trigger: ".home",
        scroller: "body",
        start: "top 0%",
        end: "top -10%",
        toggleActions: "play none none reverse",
        scrub: 2,
        onEnter: () => {
            gsap.set(".lap-fis-navbar", { opacity: 1, x: 0, y: 0, pointerEvents: "auto" });
        },
        onLeaveBack: () => {
            gsap.to(".lap-fis-navbar", {
                opacity: 0,
                y: -100,
                pointerEvents: "none",
            });
        }
    },
    opacity: 0,
    y: -100,
    pointerEvents: "none"
});

gsap.fromTo(".lap-seco-navbar",
    {
        opacity: 0,
        zIndex: 0,
        cursor: "default",
        pointerEvents: "none",
        y: -100,
    },
    {
        scrollTrigger: {
            trigger: ".home",
            scroller: "body",
            start: "top 0%",
            end: "top -10%",
            toggleActions: "play none none reverse",
            scrub: 2
        },
        y: 0,
        opacity: 1,
        zIndex: 0,
        pointerEvents: "auto"
    }
);

  // slide bar
  function mob_slidingNavbar() {
    const slidebar = document.getElementById("mobSlidebar");
    slidebar.classList.toggle("active");
  }

