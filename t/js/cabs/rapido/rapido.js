async function getRapidoRides(pickupLat, pickupLng, dropLat, dropLng) {
    // Rapido API logic goes here
    const rapidoRides = [
        {
            company: "Rapido",
            price: "₹50",
            type: "Bike",
            eta: "3 mins",
            icon: "fa-motorcycle"
        }
    ];

    displayRideDetails(rapidoRides);
}
