let banner = document.querySelector('.banner');
let model_overlay = document.querySelector('.model-overlay')

let open_button = document.querySelector('.model-btn');
let close_button = document.querySelector('.close-btn');

open_button.addEventListener('click', function() {
    model_overlay.classList.add('open-overlay');
})

close_button.addEventListener('click', function() {
    model_overlay.classList.remove('open-overlay')
})