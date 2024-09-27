(function () {
  // 设计稿宽度为750px的情况下
  const baseSize = 75; // 这里对应的就是你 postcss-pxtorem 里设置的 rootValue
  function setRem() {
    // 当前页面宽度相对于 750 宽的缩放比例，可以根据设计稿宽度调整
    const scale = document.documentElement.clientWidth / 750;
    // 设置页面根节点字体大小, 并限制最大缩放比例
    document.documentElement.style.fontSize =
      Math.min(baseSize * scale, 100) + "px";
  }
  // 初始化
  setRem();
  // 改变窗口大小时重新设置 rem
  window.onresize = setRem;
})();
