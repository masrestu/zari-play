const letterOriginal = ['a', 'i', 'u', 'e', 'o'];
let letters = [...letterOriginal];
for (let i = 0; i < 30; i++) {
	if(i%letters.length === 0){
		letters = [...letterOriginal];
	}
	const randomIndex = Math.floor(Math.random() * letters.length);
	const span = document.createElement('span');
	if (i == 3) {
		span.classList.add('active');
	}
	span.textContent = letters[randomIndex];
	document.body.appendChild(span);
	letters.splice(randomIndex, 1);
}
