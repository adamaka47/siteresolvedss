window.addEventListener('DOMContentLoaded', () => {
	let btn = document.getElementById('btn');
	let modal = document.querySelector('.modal');
	let close = document.querySelector('.modal-window__close');



	btn.addEventListener('click', function() {
		modal.classList.add('modal_active')
	})

	close.addEventListener('click', function() {
		modal.classList.remove('modal_active')
	})

})
