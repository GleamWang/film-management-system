<template>
  <div class="shell">
    <video
      loop
      autoplay
      src="81909048-c89a-4106-880c-175d52c70140.mp4"
      class="video"
      style="height: 100%; transform: translate(36px, -8px)"
    ></video>
  </div>
</template>

<script>
export default {};
const shell = document.querySelector(".shell");
const video = document.querySelector(".video");
shell.addEventListener("mouseenter", function (e) {
  this.x = e.clientX;
  video.style.transition = "none";
});
shell.addEventListener("mousemove", function (e) {
  this._x = e.clientX;
  const disx = this._x - this.x;
  const move = 36 - disx / -20;
  video.style.transform = `translate(${move}px,-8px)`;
});
shell.addEventListener("mouseleave", function (e) {
  video.style.transition = 0.3 + "s";
  video.style.transform = "translate(36px,-8px)";
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.shell {
  width: 100%;
  height: 162px;
  display: flex;
  justify-content: center;
}
</style>