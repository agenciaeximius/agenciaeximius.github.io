let hero = document.querySelector('.hero');

function set() {
	hero.style.setProperty('--speed', window.innerHeight / 180);
}

set();
window.addEventListener('resize', () => set());
