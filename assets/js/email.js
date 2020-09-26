const { getMaxListeners } = require("process");

var username = "shafin1025@gmail.com";
var password = "*********"
var to = firebase.database().ref("emails").val;
var from = 'shafin1025@gmail.com';
var subject = "A new event has been created in your area!"
var body = firebase.database().ref("events").val;



function sendEmail(host, username, password, to, from, subject, body) {






    Email.send({
        Host: host,
        Username: username,
        Password: password,
        To: to,
        From: from,
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );







}
