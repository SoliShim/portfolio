// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    
        // 네비게이션 링크 클릭 시 메뉴 닫기
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 스크롤 시 헤더 배경 변경
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
    });
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, observerOptions);
    
    // 애니메이션을 적용할 요소들 관찰
    document.querySelectorAll('.activity-card, .project-card, .course-item, .semester-block').forEach(el => {
        observer.observe(el);
    });
    
    // 폼 제출 처리
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('메시지가 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.\nMessage sent! I will reply as soon as possible.');
            this.reset();
        });
    }
    
    // 학기 블록 확장/축소 (선택사항)
    const semesterHeaders = document.querySelectorAll('.semester-header');
    semesterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const block = this.parentElement;
            if (block.classList.contains('collapsed')) {
                block.classList.remove('collapsed');
            }
        });
    });
});

// 페이지 로드 시 스크롤 위치를 맨 위로
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// 동적 타이핑 효과 (선택사항)
// function typeWriter(element, text, speed = 100) {
//     if (element) {
//         element.innerHTML = '';
//         let i = 0;
//         function typing() {
//             if (i < text.length) {
//                 element.innerHTML += text.charAt(i);
//                 i++;
//                 setTimeout(typing, speed);
//             }
//         }
//         typing();
//     }
// }

// 페이지 로드 후 타이핑 효과 실행 (선택사항)
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero-text h1');
//     if (heroTitle) {
//         const originalText = heroTitle.innerHTML;
//         setTimeout(() => {
//             typeWriter(heroTitle, originalText, 50);
//         }, 1000);
//     }
// });
