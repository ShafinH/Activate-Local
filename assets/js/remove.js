var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var rootRef = firebase.database().ref("events")
var ref = firebase.database().ref("events").val('event_date');

if (date == ref.val()) {

    firebase.collection("events").doc("").delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}