console.log('%c HI', 'color: firebrick');

// URLs for fetching data
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// Event listener to load data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
});

// Function to fetch and display images
function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message));
}

// Function to render images on the page
function renderImages(images) {
    const container = document.getElementById('dog-image-container');
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        container.appendChild(img);
    });
}

// Function to fetch and display dog breeds
function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json.message));
}

// Function to render breed list on the page
function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds');
    for (const breed in breeds) {
        const li = document.createElement('li');
        li.innerText = breed;
        ul.appendChild(li);

        // Add click event to change color on click
        li.addEventListener('click', function() {
            li.style.color = 'red';
        });
    }
}

// Dropdown filter to filter breeds by the first letter
const dropdown = document.getElementById('breed-dropdown');
dropdown.addEventListener('change', function(event) {
    const letter = event.target.value;
    const ul = document.getElementById('dog-breeds');
    const li = ul.getElementsByTagName('li');
    for (const breed of li) {
        if (breed.innerText.startsWith(letter)) {
            breed.style.display = '';
        } else {
            breed.style.display = 'none';
        }
    }
});
