import { gsap, Power4, Expo, Power0 } from "gsap";

export default class Animation {
  constructor() {
    this.container = document.querySelector(".contents-main");
    this.body_h = this.container.getBoundingClientRect().height;
    this.current = this.container.getBoundingClientRect().top;
    this.ease = 0.05;
    this.current = 0;
    this.bodyScroll = this.bodyScroll.bind(this);
    this.target = 0;
    this.bodyCurrent = 0;
    this.bodyTarget = 0;
    document.body.style.height = `${this.body_h}px`;
  }

  lerp(start, end, multiplier) {
    return (1 - multiplier) * start + multiplier * end;
  }

  bodyScroll() {
    this.bodyCurrent = parseFloat(this.lerp(this.bodyCurrent, this.bodyTarget, this.ease)).toFixed(2);
    this.bodyTarget = window.scrollY;
    this.container.style.top = `-${this.bodyCurrent}px`;
    requestAnimationFrame(this.bodyScroll);
  }

  init() {
    this.bodyScroll();
    window.addEventListener("scroll", () => {
      this.current = parseFloat(this.lerp(this.current, this.target, this.ease)).toFixed(2);
      this.target = window.scrollY;
    });
  }
}
