// ola.js - Ola API Integration

/**
 * Fetches Ola ride availability details for given pickup and drop locations.
 * 
 * @param {number} pickupLat - Latitude of the pickup location.
 * @param {number} pickupLng - Longitude of the pickup location.
 * @param {number} dropLat - Latitude of the drop-off location.
 * @param {number} dropLng - Longitude of the drop-off location.
 */
function fetchOlaRideDetails(pickupLat, pickupLng, dropLat, dropLng) {
    const url = `https://book.olacabs.com/data-api/category-availability/p2p?pickupLat=${pickupLat}&pickupLng=${pickupLng}&pickupMode=NOW&leadSource=desktop_website&dropLat=${dropLat}&dropLng=${dropLng}&silent=true`;

    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "user-agent": "Mozilla/5.0"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error fetching data from Ola API:', data.error);
        } else {
            displayRideDetails(data.data.p2p.categories);
        }
    })
    .catch(error => {
        console.error('Failed to fetch Ola ride details:', error);
    });
}

/**
 * Displays ride details for each category retrieved from Ola API.
 * 
 * @param {Array} categories - List of available cab categories from Ola.
 */
function displayRideDetails(categories) {
    const container = document.getElementById("ride-details");
    container.innerHTML = ""; // Clear any previous data

    categories.forEach(category => {
        const element = document.createElement("div");
        element.className = "ride-option ola";
        element.innerHTML = `
            <h3>${category.displayName}</h3>
            <p>Can ride now: ${category.canRideNow ? 'Yes' : 'No'}</p>
            <p>ETA: ${category.eta.value === -1 ? 'Unavailable' : `${category.eta.value} ${category.eta.unit}`}</p>`;
        container.appendChild(element);
    });

    document.getElementById("result").style.display = 'block'; // Show the results section
}
