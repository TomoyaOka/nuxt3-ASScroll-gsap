<script setup lang="ts">
const { $gsap, $ease } = useNuxtApp();

onMounted(() => {
  const fadeEl = document.querySelectorAll(".js-fade");
  fadeEl.forEach((el) => {
    $gsap.to(el, {
      opacity: 1,
      y: 0,
      ease: $ease.easeOut,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  });
});
/*----------------
* meta
------------------*/
useHead({
  title: "ASScroll - GSAP.ScrollTrigger",
});
</script>

<template>
  <div class="asscroll">
    <div class="asscroll-main">
      <p class="contents-text js-fade">Nuxt3 TypeScript</p>
      <p class="contents-text js-fade">ASScroll</p>
      <p class="contents-text js-fade">Scroll Jack</p>
      <p class="contents-text js-fade">GSAP ScrollTrigger</p>
      <p class="contents-text js-fade">Sample(Demo)</p>
      <p class="contents-text js-fade">FinalText</p>
    </div>
  </div>
</template>

<style lang="scss">
.contents-main {
  position: relative;
  width: 100%;
  height: 100%;
}

.asscroll-main {
  width: 95%;
  margin: auto;
  padding-top: 10rem;
}

.contents-text {
  width: fit-content;
  background-color: #222;
  font-size: 6vw;
  color: #fff;
  margin-bottom: 20rem;
  padding: 0.1em;
  position: relative;
  transform: translateY(3rem);
  opacity: 0;
  &:nth-of-type(2n) {
    text-align: right;
    margin-left: auto;
  }
}

.asscrollbar > div {
  width: 5px;
  visibility: visible;
  transition: all 0.3s ease;
}

.asscrollbar > div > div {
  opacity: 1;
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  .contents-text {
    font-size: 10vw;
    margin-bottom: 14rem;
  }
  .asscrollbar > div {
    visibility: hidden;
  }
}
</style>
