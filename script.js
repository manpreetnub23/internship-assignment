let tl = gsap.timeline();
tl.from('#container #heading , #container #content p', {
    x: -800,
    duration: 0.8,
    stagger: 1,
    delay: 0.4
})
tl.from('#container #content #buttons', {
    delay: 0.5,
    opacity: 0,
    y: 30,
    stagger: 1
})
tl.from('#container #mobileImage img', {
    opacity: 0,
    duration: 2,
    delay: 0.5
})