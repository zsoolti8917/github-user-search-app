gsap.from(".text-2xl", { duration: 1, y: -30, opacity: 0 });
gsap.from("#theme-toggle", { duration: 1.5, rotate: 360, opacity: 0 });
gsap.from("#form", { duration: 1, y: 30, opacity: 0, delay: 0.5 });
gsap.from(".user-info-item", {
  duration: 1,
  x: -50,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
});
gsap.from(".flex.justify-around > div, .grid-item", {
  duration: 1,
  x: 50,
  opacity: 0,
  stagger: 0.2,
  delay: 1.5,
});
export function animateUserInfo() {
  gsap.from(".user-info-item", {
    duration: 0.5,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2,
  });
}

export function animateFlexAndGridItems() {
  gsap.from(".flex.justify-around > div, .grid-item", {
    duration: 0.5,
    x: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
  });
}
