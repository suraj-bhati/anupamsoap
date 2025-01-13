async function getUberRides(pickupLat, pickupLng, dropLat, dropLng) {
    // Uber API logic goes here
    const uberRides = [
        {
            company: "Uber",
            price: "₹200",
            type: "UberGO",
            eta: "5 mins",
            icon: "fa-car"
        }
    ];

    displayRideDetails(uberRides);
}
