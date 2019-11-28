var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("blockquote", .5, {x:200, opacity: 0});
tl.from("#office", 1, {x:-200, opacity: 0});
tl.from("#building", 1, {x:200, opacity:0});

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})

.setPin(".sticky")
.setTween(tl)
.addTo(controller);

function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    //console.log(tl.progress());
  }