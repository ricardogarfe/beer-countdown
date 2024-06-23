// Initial configuration
let savedValue = localStorage.getItem('beerCount');
let beerCount;

if (savedValue !== null && !isNaN(parseInt(savedValue, 10))) {
    beerCount = parseInt(savedValue, 10);
} else {
    beerCount = 450; // Default value if nothing in localStorage or if it's not a number
}

const title = document.getElementById('title');
const counter = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');

counter.textContent = beerCount; // Make sure to update the counter text when the page loads

function drinkBeer() {
    if (beerCount > 0) {
        beerCount--;
        counter.textContent = beerCount;
        counter.classList.add('animated-counter');
        localStorage.setItem('beerCount', beerCount.toString());
        setTimeout(() => {
            counter.classList.remove('animated-counter');
        }, 500); // 500 ms = duration of the animation
    } else {
        showNoMoreBeersMessage();
    }
}

decreaseButton.addEventListener('click', drinkBeer);

function configureTitle(newTitle) {
    title.textContent = newTitle + ' 🍺';
}

configureTitle('Contador de Cervezas');

function showNoMoreBeersMessage() {
    const messageContainer = document.getElementById('message');
    // Clear previous content of the message container
    messageContainer.innerHTML = '';
    // Create a new image element
    const noMoreBeersImg = document.createElement('img');
    // Set the source of the image
    noMoreBeersImg.src = 'https://i.pinimg.com/originals/9d/27/9c/9d279c442f584b89c701a58a66c52e4f.gif';
    // Optional: Set additional styles if needed
    noMoreBeersImg.style.maxWidth = '100%';
    noMoreBeersImg.style.height = 'auto';
    // Add the image to the message container
    messageContainer.appendChild(noMoreBeersImg);
    // Make the message container visible
    messageContainer.style.visibility = 'visible';
    messageContainer.style.opacity = 1;
}