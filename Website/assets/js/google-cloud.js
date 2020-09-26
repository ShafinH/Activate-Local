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

    /* create marker sample code
        var latlng = new google.maps.LatLng(37.256500, -122.027150);
        var myMarkerOptions = {
            position: latlng,
            map: map
        }
        var myMarker = new google.maps.Marker(myMarkerOptions);
    */

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

// email collection
var emailRef = firebase.database().ref('email');

document.getElementById('notif').addEventListener('submit', notifFunc);

// submit email

function notifFunc(e) {
    e.preventDefault();

    var notif_email = getInputVal('notif_email');
    // save email 
    saveEmail(notif_email);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // reset
    document.getElementById('notif').reset();
}
// get value of input
function getInputVal(id) {
    return document.getElementById(id).value;
}

// save email to firebase
function saveEmail(notif_email) {
    var newEmailRef = emailRef.push();
    newEmailRef.set({
        email: notif_email
    });
}





// geocode address to lat long

// Call Geocode
//geocode();

// Get location form
var locationForm = document.getElementById('setup_event');


// Listen for submiot
locationForm.addEventListener('submit', geocode);

function geocode(e) {
    // Prevent actual submit
    e.preventDefault();

    var location = document.getElementById('location').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: location,
            key: 'AIzaSyCeH5_9OoOdD05Ud1aq_XwCC7x-T4W-At0'
        }
    })
        .then(function (response) {
            // Log full response
            console.log(response);

            // Formatted Address
            var formattedAddress = response.data.results[0].formatted_address;
            var formattedAddressOutput = `
            <ul class="list-group">
              <li class="list-group-item">${formattedAddress}</li>
            </ul>
          `;

            // Address Components
            var addressComponents = response.data.results[0].address_components;
            var addressComponentsOutput = '<ul class="list-group">';
            for (var i = 0; i < addressComponents.length; i++) {
                addressComponentsOutput += `
              <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
            `;
            }
            addressComponentsOutput += '</ul>';

            // Geometry
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var geometryOutput = `
            <ul class="list-group">
              <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
              <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
            </ul>
          `;

            // Output to app
            document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
            document.getElementById('address-components').innerHTML = addressComponentsOutput;
            document.getElementById('geometry').innerHTML = geometryOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}


// create event 

var eventsRef = firebase.database().ref('events');

// setup event 


document.getElementById('setup_event').addEventListener('submit', eventFunc);

function eventFunc(e) {



    e.preventDefault();

    var event_name = getInputVal('event_name');
    var event_type = getInputVal('even_type');
    var event_description = getInputVal('description');
    var event_website = getInputVal('website');
    var event_location = getInputVal('location');
    var event_date = getInputVal('event_date');

    // save Event
    saveEvent(event_name, event_type, event_description, event_website, event_location, event_date);

    //show alert
    document.querySelector('.event_alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.event_alert').style.display = 'none';
    }, 3000);



    // reset

    document.getElementById('setup_event').reset();
}




// get value of input
function getInputVal(id) {
    return document.getElementById(id).value;
}







// save email to firebase
function saveEvent(event_name, event_type, description, website, location, event_date) {
    var newEventsRef = eventsRef.push();
    newEventsRef.set({
        event_name: event_name,
        event_type: event_type,
        event_description: description,
        event_website: website,
        event_location: location,
        event_date: event_date

    });




}





var ref = firebase.database().ref("events");



/* 
var keys = Object.keys(firebase.database().ref("events"));


ref.on("value", function (snapshot) {
    console.log(snapshot.val());
}, function (error) {
    console.log("Error: " + error.code);
});



for (var i = 0; i < keys.length; i++) {
    console.log(firebase.database().ref("event_description"))
}

*/


for (var i = 0; i < ref.length; i++) {

    // accces all datapoints and replace it in here
    // access ref[i] for everything


    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">event_name </h1>' +
        '<div id="bodyContent">' +
        '<p><b>Event Type:</b> Venue' +
        '<p><b>Event Description:</b> description' +
        '<p><b>Event Website:</b> website' +
        '<p><b>Event Location:</b> location' +
        '<p><b>Event Date:</b> event_date'
    '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: test, // geocode event_location and then access it here
        map: map,
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });


}
