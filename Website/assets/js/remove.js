var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var rootRef = firebase.database().ref("events")
var ref = firebase.database().ref("events").val('event_date');
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

if (date == ref.val()) {

    if (time == '11:59:59') {
        firebase.collection("events").doc("").delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }


}