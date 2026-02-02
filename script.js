gsap.from("#page1 .circle",{
  scale:0,
  rotate: -360,
  duration:2,
  transition:"ease-out"
})
gsap.from("#page2 .circle ",{
  scale:0,
  rotate: -360,
  transition:"ease-out",
  scrollTrigger:{
    trigger:"#page2",
    markers:true,
    scroller:"body",
    start:"top 30%",
    end:"top 0%",
    scrub:2
  }
})
gsap.to("#page3 img",{
  width:"100%",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    markers:true,
    start:"top 0",
    end:"top -100%",
    pin:true,
    scrub:3
  }
})
gsap.to("#page22 h1",{
  tranform:"translateX(-110%)",
  scrollTrigger:{
    trigger:"#page22",
    scroller:"body",
    markers:true,
    start:"top 0",
    end:"top -100%",
    scrub:3,
    pin:true
  }
})