<script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
             apiKey: "AIzaSyDVTUp-0zmV-0vdywqt0iCbHCCnuEsVadM",
              authDomain: "ninjapay-24b2f.firebaseapp.com",
              projectId: "ninjapay-24b2f",
              storageBucket: "ninjapay-24b2f.appspot.com",
              messagingSenderId: "223863695725",
              appId: "1:223863695725:web:1f43a117b579e07d9e1264",
              measurementId: "G-KN1L1LNKN7"

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const messaging = getMessaging(app);

        navigator.serviceWorker.register('/flutter_service_worker.js').then(registration => {
            getToken(messaging, {
                serviceWorkerRegistration: registration,
                vapidKey: 'BB5-T3jpaxFGs2ED2lvfl5hJtBynVQEiVMa4sI9S4YJf-BKwY2TUZvt6yDxhPs_nGACnIM5R3pw7A5uB7vdmoSI' }).then((currentToken) => {
                if (currentToken) {
                    console.log("Token is: "+currentToken);
                    // Send the token to your server and update the UI if necessary
                    // ...
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        });



    </script>