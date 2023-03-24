import * as ASScroll from "@ashthornton/asscroll";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/*----------------------
* ASScroll_Setting
------------------------*/
const asscrollContainer = document.querySelector(".asscroll-container");
const asscrollScroll = document.querySelector(".asscroll");

const option = {
  containerElement: asscrollContainer,
  scrollElements: asscrollScroll,
  touchScrollType: "scrollTop",
  ease: 0.07,
  disableRaf: true,
  customScrollbar: true,
};

const asscroll = new ASScroll(option);

/*----------------------
* GSAP_ScrollTrigger
------------------------*/
gsap.ticker.add(asscroll.update);
ScrollTrigger.defaults({
  scroller: asscroll.containerElement,
});
ScrollTrigger.scrollerProxy(asscroll.containerElement, {
  scrollTop(value) {
    return arguments.length ? (asscroll.currentPos = value) : asscroll.currentPos;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
});
asscroll.on("update", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", asscroll.resize);

/*----------------------
* export myPlugins
------------------------*/
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      asscroll: asscroll,
      gsap: gsap,
      ease: Power4,
      ScrollTrigger: ScrollTrigger,
    },
  };
});
