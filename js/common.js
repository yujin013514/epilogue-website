// 공통 헤더/푸터 로드 및 활성 페이지 설정
document.addEventListener('DOMContentLoaded', function() {
    
    // 헤더 HTML 직접 삽입
    const headerHTML = `
        <header>
            <div class="logo">epilogue</div>
            <nav>
                <a href="index.html" class="nav-item">회사 소개</a>
                <a href="services.html" class="nav-item">서비스 안내</a>
                <a href="sample-report.html" class="nav-item">샘플 리포트</a>
                <a href="contact.html" class="nav-item">도입 문의하기</a>
            </nav>
        </header>
    `;
    
    // 푸터 HTML 직접 삽입
    const footerHTML = `
        <footer>
            <div class="footer-background-text">epilogue</div>
            <div class="footer-line"></div>
            <div class="footer-content">
                <div class="company-info">
                    <div class="company-name">에필로그</div>
                    <div class="company-details">대표자: 강서현, 심유진, 이수나, 장하리, 조은비, 한수예</div>
                    <div class="company-details">이메일: epilogue.global@gmail.com</div>
                    <div class="company-details">주소: 57 St Joseph St, Toronto, Ontario, M5S 0C5</div>
                </div>
                <div class="policy-links">
                    <a href="#" class="policy-link">개인정보처리방침</a>
                    <a href="#" class="policy-link">서비스이용약관</a>
                </div>
                <div class="social-links">
                    <a href="mailto:epilogue.global@gmail.com" class="social-link">
                        <img src="images/footer/imageMail.png" alt="메일" class="social-icon">
                    </a>
                    <a href="https://www.instagram.com/epilogueglobal/" target="_blank" class="social-link">
                        <img src="images/footer/imageInsta.png" alt="인스타그램" class="social-icon">
                    </a>
                    <a href="https://www.linkedin.com/company/epiloguetoglobal" target="_blank" class="social-link">
                        <img src="images/footer/imageLinkedin.png" alt="링크드인" class="social-icon">
                    </a>
                </div>
                <div class="copyright">Copyright © 2025 Epilogue. All rights reserved.</div>
            </div>
        </footer>
    `;

    // 헤더 삽입
    const headerPlaceholder = document.querySelector('#header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        setActiveNavigation();
    }

    // 푸터 삽입
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
        initializeFooterEvents();
    }

    // 현재 페이지에 따른 네비게이션 활성화
    function setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.style.color = '#FFFFFF'; // 기본 색상으로 리셋
            
            const href = item.getAttribute('href');
            
            // 현재 페이지와 링크가 일치하는지 확인
            if (href === currentPage || 
                (currentPage === 'contact.html' && href === 'contact.html') ||
                (currentPage === 'services.html' && href === 'services.html') ||
                (currentPage === 'sample-report.html' && href === 'sample-report.html') ||
                (currentPage === 'index.html' && href === 'index.html') ||
                (currentPage === '' && href === 'index.html')) {
                item.style.color = '#DB4827'; // 활성 페이지 색상
            }
        });
    }

    // 푸터 이벤트 초기화
    function initializeFooterEvents() {
        // 소셜 링크는 이제 직접 연결되므로 별도 처리 불필요
    }

    // 이메일 폼 처리 (공통)
    function initializeEmailForm() {
        const emailForms = document.querySelectorAll('.email-form, .hero-email-form');
        emailForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value;
                
                if (email && email.includes('@')) {
                    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
                    emailInput.value = '';
                    this.classList.add('submitted');
                    setTimeout(() => {
                        this.classList.remove('submitted');
                    }, 3000);
                } else {
                    alert('올바른 이메일을 입력해주세요.');
                    this.classList.add('error');
                    setTimeout(() => {
                        this.classList.remove('error');
                    }, 3000);
                }
            });
        });
    }

    // CTA 버튼 처리 (공통)
    function initializeCTAButtons() {
        const ctaButtons = document.querySelectorAll('.cta-button, .hero-cta-button, .final-cta-button, .demo-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.tagName === 'BUTTON') {
                    e.preventDefault();
                }
                alert('전문가 상담 페이지로 이동합니다.');
            });
        });
    }

    // 공통 기능 초기화
    setTimeout(() => {
        initializeEmailForm();
        initializeCTAButtons();
    }, 100); // 헤더/푸터 로드 후 실행
});