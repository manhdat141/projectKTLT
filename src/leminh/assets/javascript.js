

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.nav-label')

tabs.forEach((tab) => {
    tab.onclick = (e) => {
        $('.nav-label.text-orange').classList.remove('text-orange')
        tab.classList.add('text-orange');
        console.log(tab.href());
    }
})

const img = $('.img')
img.animate([
    { transform: 'rotate(360deg)'}
], {
    duration: 10000,
    iterations: Infinity
})