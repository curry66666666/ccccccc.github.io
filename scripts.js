// 轮播图自动播放和切换功能
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// 初始化轮播图，设置第一张图片为活动状态
function initializeCarousel() {
  images.forEach((img, index) => {
    if (index === 0) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

// 设置轮播图的自动播放
function autoRotateImages() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}

// 设置轮播图的自动播放时间间隔为3秒
setInterval(autoRotateImages, 3000);

// 手动切换轮播图图片
function switchImage(index) {
  images[currentIndex].classList.remove('active');
  currentIndex = index;
  images[currentIndex].classList.add('active');
}

// 为轮播图添加点击事件监听，以便手动切换图片
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    switchImage(index);
  });
});

// 在页面加载完成后初始化轮播图
document.addEventListener('DOMContentLoaded', initializeCarousel);
document.querySelectorAll('.hot-news-link').forEach(link => {
    link.addEventListener('click', () => {
      console.log('热点资讯链接被点击');
      // 可以在这里添加更多的逻辑
    });
  });
  