(function () {
  'use strict';

  var header = document.querySelector('.header');
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var currentLabel = document.getElementById('current-section');

  /* 1. 메뉴 클릭 → 해당 영역으로 부드럽게 이동 */
  function scrollToSection(id) {
    var target = document.getElementById(id);
    if (!target) return;
    var offset = header ? header.offsetHeight : 0;
    var top = id === 'home' ? 0 : target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
    history.replaceState(null, '', '#' + id);
  }

  document.querySelectorAll('a[data-nav]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href');
      if (!hash || hash.charAt(0) !== '#') return;
      e.preventDefault();
      scrollToSection(hash.slice(1));
    });
  });

  // 스크롤 위치에 따라 현재 메뉴 강조
  function setActive(id) {
    navLinks.forEach(function (link) {
      var active = link.getAttribute('data-section') === id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (currentLabel) {
      currentLabel.textContent = id.charAt(0).toUpperCase() + id.slice(1);
    }
  }

  function updateActive() {
    var offset = (header ? header.offsetHeight : 0) + window.innerHeight * 0.3;
    var current = sections[0].id;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top + window.pageYOffset - offset <= window.pageYOffset) {
        current = section.id;
      }
    });
    // 페이지 끝에 도달하면 마지막 섹션 활성화
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1].id;
    }
    setActive(current);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActive();
      ticking = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();

  // 주소에 #about 등이 있으면 해당 위치로 이동
  if (location.hash.length > 1) {
    window.addEventListener('load', function () { scrollToSection(location.hash.slice(1)); });
  }

  /* 2. 프로젝트 카드 클릭 → 관련 링크로 이동 (새 탭) */
  function openProject(card) {
    var url = card.getAttribute('data-href');
    if (url) window.open(url, '_blank', 'noopener');
  }

  document.querySelectorAll('.project[data-href]').forEach(function (card) {
    card.addEventListener('click', function () { openProject(card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProject(card);
      }
    });
  });

  /* 3. 이메일 클릭 → 메일 작성창 (mailto 링크) + 복사 버튼 */
  var toast = document.getElementById('toast');
  var toastMsg = document.getElementById('toast-message');
  var toastTimer;

  function showToast(msg) {
    if (!toast) return;
    toastMsg.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2400);
  }

  var copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email)
          .then(function () { showToast('이메일 주소가 복사되었습니다!'); })
          .catch(function () { fallbackCopy(email); });
      } else {
        fallbackCopy(email);
      }
    });
  }

  // file:// 로 열었을 때 등 Clipboard API를 쓸 수 없는 환경 대비
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    showToast(ok ? '이메일 주소가 복사되었습니다!' : text);
  }

  var emailLink = document.getElementById('email-link');
  if (emailLink) {
    emailLink.addEventListener('click', function () {
      showToast('메일 작성창을 여는 중입니다…');
    });
  }

  /* 기타: 푸터 연도 */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
