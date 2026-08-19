// live clock in header
function tickClock(){
  const el = document.getElementById('clock');
  if(!el) return;
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes().toString().padStart(2,'0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; h = h ? h : 12;
  el.textContent = `${h}:${m} ${ampm}`;
}
tickClock();
setInterval(tickClock, 1000 * 15);

// mobile nav toggle
const menuBtn = document.querySelector('.menu-btn');
const primaryNav = document.querySelector('.primary-nav');
if(menuBtn && primaryNav){
  menuBtn.addEventListener('click', () => {
    const open = primaryNav.style.display === 'flex';
    primaryNav.style.display = open ? 'none' : 'flex';
    primaryNav.style.flexDirection = 'column';
    primaryNav.style.position = 'absolute';
    primaryNav.style.top = '64px';
    primaryNav.style.left = '0';
    primaryNav.style.right = '0';
    primaryNav.style.background = 'var(--paper)';
    primaryNav.style.padding = '20px 32px';
    primaryNav.style.borderBottom = '1px solid var(--line)';
    menuBtn.textContent = open ? 'MENU' : 'CLOSE';
  });
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
