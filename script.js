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
// 设置当前年份 
document.querySelector('.year').textContent = new Date().getFullYear() + '年'; 
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
const musicBtn = document.getElementById('musicBtn'); 
const bgMusic = document.getElementById('bgMusic'); 
let isPlaying = false;
musicBtn.addEventListener('click', () => { 
    if (isPlaying) { 
        bgMusic.pause(); musicBtn.classList.remove('playing'); 
    }else { 
        bgMusic.play(); musicBtn.classList.add('playing'); 
    } isPlaying = !isPlaying; }); 
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