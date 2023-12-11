// Toggle navigation menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidenav = document.querySelector('.sidenav');
const element = document.getElementById("w3-container");
const filter = document.getElementById("btn-bar");

hamburgerMenu.addEventListener('click', () => {
    sidenav.classList.toggle('active');
    filter.classList.toggle('active');
  element.classList.toggle('active');
});

/*// Fetch image data from JSON file
fetch('https://raw.githubusercontent.com/thatvisualguy/json_files/main/images.json')
    .then(response => response.json())
    .then(data => {
        // Get the image grid element
        const imageGrid = document.querySelector('.image-grid');

        // Loop through each image data
        data.forEach((image, index) => {
            // Create a new image element
            const img = document.createElement('img');
            img.src = image.url;

            // Add the image element to the grid
            imageGrid.appendChild(img);
        });
    });*/

const fetchData = async () => {
    const response = await fetch('https://raw.githubusercontent.com/thatvisualguy/json_files/main/images.json');
    data = await response.json();
    return data;
};

const displayImages = (startIndex, endIndex, imageData = data) => {
    const imageGrid = document.getElementById('image-grid');
    imageGrid.innerHTML = '';
	
    const images = imageData.slice(startIndex, endIndex);

    images.forEach((image) => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const imgElement = document.createElement('img');
        imgElement.src = image.url; // Change 'source' to 'url'
        imgElement.alt = image.tag;
        imgElement.className = 'image';
        imageContainer.appendChild(imgElement);

        const downloadButton = document.createElement('input');
        downloadButton.type = 'image';
        downloadButton.src= "https://img.icons8.com/material-rounded/24/download--v1.png" ;
        downloadButton.className = 'download-button';
        downloadButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent image click event from triggering
            downloadImage(image.url); // Change 'source' to 'url'
        });
        imageContainer.appendChild(downloadButton);

        imageGrid.appendChild(imageContainer);
    });
};

document.addEventListener('DOMContentLoaded', async function () {
        const data = await fetchData();
        displayImages(0, 15, data);
});

const downloadImage = async (url) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = objectURL;
        link.download = 'image.jpg'; // You can customize the filename if needed
        link.target = '_blank'; // Open in a new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the object URL
        URL.revokeObjectURL(objectURL);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
};
