function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const letterTotal = getQueryParam('letter') || 5;
const letterFull = ['a', 'i', 'u', 'e', 'o', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const letterOriginal = [...letterFull].slice(0, letterTotal);
let letters = [...letterOriginal];
for (let i = 0; i < 30; i++) {
	if(i%letterOriginal.length === 0){
		letters = [...letterOriginal];
	}
	const randomIndex = Math.floor(Math.random() * letters.length);
	const span = document.createElement('span');
	if (i == 39) {
		span.classList.add('active');
	}
	span.textContent = letters[randomIndex];
	span.addEventListener('click', function () {
		const active = document.querySelector('.active');
		if (active) active.classList.remove('active');
		this.classList.add('active');
	});

	document.body.appendChild(span);
	letters.splice(randomIndex, 1);
}
