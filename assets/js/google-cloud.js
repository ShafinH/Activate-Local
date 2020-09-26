function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {

        center: saratoga,
        zoom: 12,
        mapTypeId: "roadmap"
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        markers = [];
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach(place => {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });



    // fire base

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA_kSIzvJS4B5pR9E4bQNA-Le5YX8Io3tQ",
        authDomain: "activate-local.firebaseapp.com",
        databaseURL: "https://activate-local.firebaseio.com",
        projectId: "activate-local",
        storageBucket: "activate-local.appspot.com",
        messagingSenderId: "857626482321",
        appId: "1:857626482321:web:d358f82699bcf3aa8ed130"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);