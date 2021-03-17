const views = document.querySelector('.component__views')
const price = document.querySelector('.component__price')
const month = document.querySelector('.component__month')
const slider = document.querySelector('.component__slider')
const toggle = document.querySelector('.component__input')

const prices = [
    ['$8.00','$12.00','$16.00','$24.00','$36.00'],
    ['$72.00','$108.00','$144.00','$216.00','$324.00']
]

const viewsNumbers = ['10K pageviews', '50K pageviews', '100K pageviews', '500K pageviews', '1M pageviews'];

const gradient = [
    'linear-gradient(to right, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)',
    'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%) 25%, hsl(224, 65%, 95%) 100%)',
    'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%, hsl(224, 65%, 95%) 100%)',
    'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%) 75%, hsl(224, 65%, 95%) 100%)',
    'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 100%)'
];

function updateSlider() {
    price.innerText = prices[toggle.checked ? 1 : 0][slider.value - 1]
    slider.style.background = gradient[slider.value - 1]
    views.innerText = viewsNumbers[slider.value - 1]
}

function resetAnimationPrice() {
    price.innerText = prices[toggle.checked ? 1 : 0][slider.value - 1]
    price.style.animation = 'none';
    price.offsetHeight;
    price.style.animation = null;
    price.style.animation = 'changecolor-prices 1s ease-in-out';
}

function resetAnimationBoth() {
    views.style.animation = 'none';
    price.offsetHeight;
    views.style.animation = null;
    views.style.animation = 'changecolor 1s ease-in-out';

    price.style.animation = 'none';
    price.offsetHeight;
    price.style.animation = null;
    price.style.animation = 'changecolor-prices 1s ease-in-out';
}

toggle.addEventListener('change', (e) => {
    month.innerText = toggle.checked ? '/year' : '/month'
    price.innerText = prices[toggle.checked ? 1 : 0][slider.value - 1]

    resetAnimationPrice()
})

slider.addEventListener('change', (e) => {
    prices.innerText = prices[toggle.checked ? 1 : 0][slider.value - 1]
    resetAnimationBoth()
})

slider.addEventListener('mousemove', updateSlider)
slider.addEventListener('click', updateSlider)