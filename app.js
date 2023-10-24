
let toggleBtn = document.querySelector('.nav-toggle');

let linksContainer = document.querySelector('.links-container');

function navbar () {
	toggleBtn.classList.toggle('active');
	linksContainer.classList.toggle('active');
}
// faq

let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq => {
	let ques = faq.querySelector('.question-box');

	ques.addEventListener('click', () => {
		faq.classList.toggle('active');
	})
})

AOS.init();