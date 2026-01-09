try {
	let hero = document.querySelector('.hero');

	function set() {
		hero.style.setProperty('--speed', window.innerHeight / 150);
	}
	hero && set();

	window.addEventListener('resize', () => set());
} catch (e) {
	console.error(e);
}
