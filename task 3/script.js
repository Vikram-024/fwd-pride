// script.js

// Function to handle city button clicks
function handleCityClick(event) {
    const cityName = event.target.textContent;
    alert(`You clicked on ${cityName}`);
}

// Add event listeners to city buttons
document.addEventListener('DOMContentLoaded', () => {
    const cityButtons = document.querySelectorAll('.city-button');
    cityButtons.forEach(button => {
        button.addEventListener('click', handleCityClick);
    });
});