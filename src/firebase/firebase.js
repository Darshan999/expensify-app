import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrDBJ3fsLMi4tny6XHooCbr6r5kme48_M",
    authDomain: "expensify-3587f.firebaseapp.com",
    databaseURL: "https://expensify-3587f.firebaseio.com",
    projectId: "expensify-3587f",
    storageBucket: "expensify-3587f.appspot.com",
    messagingSenderId: "1066919798336",
    appId: "1:1066919798336:web:3ee7baec0abb7d1dbb21a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
// ref method is sort form of reference and this gives a reference to a specific part of our database.
// ref is the same as the table in SQL and collection in MongoDB.
database.ref().set({
    name: 'Darshan Dhandhukiya',
    age: 23,
    isSingle: true,
    location: {
        city: 'Ahmedabad',
        country: 'India'
    }
});

// database.ref().set('This will override the previously created object');

database.ref('age').set(24); // It will only change the age to 24.
database.ref('location/city').set('Shela'); // It will only change the city from Ahmedabad to Shela.

database.ref('attributes').set({
    height: 73,
    weight: 89
});