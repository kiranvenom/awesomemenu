const openMenu = document.querySelector('.openMenu');
const mobNav = document.querySelector('.mobNav');
const closeMenu = document.querySelector('.closeMenu');
const lis = document.querySelectorAll('.links li');

// openMenu.addEventListener('click', () => {
// 	mobNav.style.top = '0%';
// 	gsap.from('.links li ,.mail', {
// 		opacity: 0,
// 		y: 100,
// 		delay: 0.3,
// 		stagger: 0.2,
// 	});
// });

// closeMenu.addEventListener('click', () => {
// 	gsap.to('.links li ,.mail', {
// 		y: 100,
// 		delay: 0.3,
// 		stagger: 0.2,
// 		opacity: 0,
// 		onComplete: () => {
// 			mobNav.style.top = '-100%';

// 			gsap.set('.links li ,.mail', { y: 0 });
// 		},
// 	});
// });

openMenu.addEventListener('click', () => {
	mobNav.style.top = '0%';

	// Set the initial state before the animation
	gsap.set('.links li ,.mail', { opacity: 1, y: 0 });

	gsap.from('.links li ,.mail', {
		opacity: 0,
		y: 100,
		delay: 0.3,
		stagger: 0.2,
	});
});

closeMenu.addEventListener('click', () => {
	gsap.to('.links li ,.mail', {
		y: 100,
		delay: 0.3,
		stagger: 0.2,
		opacity: 0,
		onComplete: () => {
			mobNav.style.top = '-100%';
			gsap.set('.links li ,.mail', { y: 0 });
		},
	});
});

window.addEventListener('DOMContentLoaded', () => {
	gsap.from('.heading h1', {
		stagger: 0.2,
		y: 400,
		duration: 2,
	});
});
