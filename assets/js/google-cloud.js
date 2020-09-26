// gmaps setup

var saratoga = { lat: 37.2664, lng: -122.0296 };

var votereg_SJ = { lat: 37.374989, lng: -121.896820 };
// var votereg_saratoga = { lat: 37.268349, lng: -122.014053 };
var votereg_Campbell = { lat: 37.266150, lng: -121.953850 };
var votereg_Sunnyvale = { lat: 37.371050, lng: -122.037610 };

var city_council = { lat: 37.268349, lng: -122.014053 }

var saratoga_post = { lat: 37.266361, lng: -122.015022 }

var drive = { lat: 37.935820, lng: -122.355190 };

var contentString1 = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Voter Registration San Jose </h1>' +
    '<div id="bodyContent">' +
    '<p><b>Event Type:</b> Venue' +
    '<p><b>Event Description:</b> Register to vote in San Jose' +
    '<p><b>Event Website:</b> <a href="https://registertovote.ca.gov" target="_blank">website</a>  ' +
    '<p><b>Event Location:</b> 1555 Berger Dr, San Jose, CA 95112' +
    '</div>' +
    '</div>';

var contentString2 = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Post Office of Saratoga </h1>' +
    '<div id="bodyContent">' +
    '<p><b>Event Type:</b> Venue' +
    '<p><b>Event Description:</b> Post Office for mail-in voting in Saratoga.' +
    '<p><b>Event Website:</b> <a href="https://www.usps.com" target="_blank">website</a>  ' +
    '<p><b>Event Location:</b> 19630 Allendale Ave, Saratoga, CA 95070' +
    '</div>' +
    '</div>';

var contentString3 = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Voter Registration Campbell </h1>' +
    '<div id="bodyContent">' +
    '<p><b>Event Type:</b> Venue' +
    '<p><b>Event Description:</b> Register to vote in Campbell' +
    '<p><b>Event Website:</b> <a href="https://registertovote.ca.gov" target="_blank">website</a>  ' +
    '<p><b>Event Location:</b> 1370 Dell Ave, Campbell, CA 95008' +
    '</div>' +
    '</div>';

var contentString4 = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Voter Registration Sunnyvale </h1>' +
    '<div id="bodyContent">' +
    '<p><b>Event Type:</b> Venue' +
    '<p><b>Event Description:</b> Register to vote in Sunnyvale' +
    '<p><b>Event Website:</b> <a href="https://registertovote.ca.gov" target="_blank">website</a> ' +
    '<p><b>Event Location:</b> 456 W Olive Ave, Sunnyvale, CA 94087 ' +
    '</div>' +
    '</div>';

var contentString5 = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Curbside Voter Registration</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Event Type:</b> Event' +
    '<p><b>Event Description:</b> Elva Nelson Hayes, CEO of ENH Productions, is hosting in collaborationg with CoBiz Richmond a Drive-up Voter Registration Drive in Downtown Richmond to help our community rock the vote while also giving away of mask to help mitigate the health challenges of Covid-19.' +
    '<p><b>Event Website:</b><a href="https://www.saratoga.ca.us/241/City-Council"> website</a> ' +
    '<p><b>Event Location:</b> CoBiz Richmond, Inc. 1503 Macdonald Avenue Suite A Richmond, CA 94804' +
    '<p><b>Event Date:</b> 9/26/20' +
    '</div>' +
    '</div>';

var contentString6 = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Saratoga City Council Meeting</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Event Type:</b> Venue' +
    '<p><b>Event Description:</b>City council meeting for Saratoga. Find our agenda from our website. Every 1st and 3rd wednesday of the month. Feel free to attend.' +
    '<p><b>Event Website:</b> <a href="https://www.saratoga.ca.us/241/City-Council" target="_blank">website</a>  ' +
    '<p><b>Event Location:</b> 13777 Fruitvale Avenue Saratoga, CA 95070' +
    '<p><b>Event Date:</b> 10/07/20' +
    '</div>' +
    '</div>';


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

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    var marker1 = new google.maps.Marker({
        position: votereg_SJ,
        map: map,

    });

    marker1.addListener('click', function () {
        infowindow1.open(map, marker1);
    });

    // -------------------------------

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    var marker2 = new google.maps.Marker({
        position: saratoga_post,
        map: map,

    });

    marker2.addListener('click', function () {
        infowindow2.open(map, marker2);
    });

    // -------------------------------

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });

    var marker3 = new google.maps.Marker({
        position: votereg_Campbell,
        map: map,

    });

    marker3.addListener('click', function () {
        infowindow3.open(map, marker3);
    });

    // -------------------------------    
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });

    var marker4 = new google.maps.Marker({
        position: votereg_Sunnyvale,
        map: map,

    });

    marker4.addListener('click', function () {
        infowindow4.open(map, marker4);
    });
    // -------------------------------
    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5
    });

    var marker5 = new google.maps.Marker({
        position: drive,
        map: map,

    });

    marker5.addListener('click', function () {
        infowindow5.open(map, marker5);
    });
    // -------------------------------
    var infowindow6 = new google.maps.InfoWindow({
        content: contentString6
    });

    var marker6 = new google.maps.Marker({
        position: city_council,
        map: map,

    });

    marker6.addListener('click', function () {
        infowindow6.open(map, marker6);
    });



}


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
