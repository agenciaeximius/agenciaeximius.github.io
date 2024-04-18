let hero = document.querySelector('.hero');

function set() {
	hero.style.setProperty('--speed', window.innerHeight / 209);
}

set();
window.addEventListener('resize', () => set());
