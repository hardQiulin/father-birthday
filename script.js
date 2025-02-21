// 初始化 AOS 
AOS.init({ duration: 1000, once: true, offset: 100 }); 
// 初始化 Swiper 
const swiper = new Swiper('.memories-slider', { 
    slidesPerView: 1, spaceBetween: 30, loop: true, centeredSlides: true, 
    autoplay: { delay: 3000, disableOnInteraction: false, }, 
    pagination: { el: '.swiper-pagination', clickable: true, }, 
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, 
    breakpoints: { 640: { slidesPerView: 2, }, 968: { slidesPerView: 3, } } 
}); 
// 漂浮爱心效果 
function createHeart() { 
    const heart = document.createElement('i'); 
    heart.className = 'fas fa-heart heart'; 
    heart.style.left = Math.random() * 100 + 'vw'; 
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; 
    document.querySelector('.floating-hearts').appendChild(heart); setTimeout(() => { heart.remove(); }, 5000); 
} 
setInterval(createHeart, 300); 
// 背景音乐控制 

// 背景音乐控制
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = true; // 默认为播放状态

// 页面加载完成后自动播放音乐
window.addEventListener('load', () => {
    // 由于浏览器政策，需要用户交互才能自动播放
    // 我们可以显示一个提示，让用户点击页面任意位置开始播放
    document.body.addEventListener('click', function initAudio() {
        bgMusic.play().then(() => {
            musicBtn.classList.add('playing');
            document.body.removeEventListener('click', initAudio);
        }).catch(err => {
            console.log("无法自动播放:", err);
        });
    }, { once: true });
});

// 音乐控制按钮点击事件
musicBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 防止触发body的点击事件
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
    } else {
        bgMusic.play();
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// 页面滚动时的视差效果 
window.addEventListener('scroll', () => { 
    const scrolled = window.pageYOffset; 
    const parallaxElements = document.querySelectorAll('.memory-card'); 
    parallaxElements.forEach(element => { const speed = 0.5; 
        element.style.transform = `translateY(${scrolled * speed}px)`; }); 
}); 
// 为每个wish-card添加hover效果时的微动画 
document.querySelectorAll('.wish-card').forEach(card => { 
    card.addEventListener('mousemove', (e) => { 
        const rect = card.getBoundingClientRect(); 
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 
        card.style.transform = ` perspective(1000px) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${-(x - rect.width / 2) / 20}deg) translateZ(10px) `; 
    }); 
    card.addEventListener('mouseleave', () => { card.style.transform = 'none'; }); 
});