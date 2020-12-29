// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("start").style.display = "block";
  } else {
    document.getElementById("start").style.display = "none";
  }
}

// 点击按钮，返回顶部
function topFunction() {
  let time = setInterval(() => {
    document.body.scrollTop -= 30;
    document.documentElement.scrollTop -= 30;
    if (
      document.body.scrollTop <= 0 &&
      document.documentElement.scrollTop <= 0
    ) {
      clearInterval(time);
    }
  }, 10);
}

export default topFunction;
