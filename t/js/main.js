// main.js - Main application logic for Cab Laao

/**
 * Initiates the search for rides by converting addresses to latitude and longitude
 * and then fetching ride estimates from Ola API.
 */
function searchRides() {
    const pickupLocation = document.getElementById("pickup").value;
    const dropLocation = document.getElementById("drop").value;

    if (!pickupLocation || !dropLocation) {
        alert("Please enter both pickup and drop-off locations.");
        return;
    }

    convertAddressToLatLng(pickupLocation, (pickupLat, pickupLng) => {
        convertAddressToLatLng(dropLocation, (dropLat, dropLng) => {
            fetchOlaRideDetails(pickupLat, pickupLng, dropLat, dropLng); // Call updated function
        });
    });
}

/**
 * Converts an address to latitude and longitude coordinates.
 * 
 * @param {string} address - The address to geocode.
 * @param {function} callback - Callback function to handle the latitude and longitude.
 */
function convertAddressToLatLng(address, callback) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
            const location = results[0].geometry.location;
            callback(location.lat(), location.lng());
        } else {
            console.error("Geocode was not successful for the following reason:", status);
            alert("Failed to get location. Please enter a valid address.");
        }
    });
}
