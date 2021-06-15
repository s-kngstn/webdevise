
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });


// INTRO ANIMATION
tl2.to(".text", { y: "0%", duration: 3, stagger: .7 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1});
tl.fromTo(".header-content", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


function bgChanger(){
  if(this.scrollY > 3000) {
    document.body.classList.add('bg-active');
  } else {
    document.body.classList.remove('bg-active');
  }
}

window.addEventListener('scroll', bgChanger);