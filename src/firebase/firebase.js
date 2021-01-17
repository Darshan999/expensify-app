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
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// ref method is sort form of reference and this gives a reference to a specific part of our database.
// ref is the same as the table in SQL and collection in MongoDB.

// Fetch data for only once
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log('Error while fetching', e)
//     })

// Another way to fetch data. It'll reflect when data changed
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error', e)
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 2000);

// // Unsubscribe 
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 4000);

// Array Data in firebase

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 5000,
//     createdAt: 400000
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 500,
//     createdAt: 400000
// });

// database.ref('expenses').push({
//     description: 'Movie',
//     note: '',
//     amount: 100,
//     createdAt: 400000
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// // A subscriber listening on expenses for every single time a child is removed
// database.ref('expenses').on('child_remove', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// // A subscriber listening on expenses for every single time a child is updated
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// // A subscriber listening on expenses for every single time a child is added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// Add data
// database.ref().set({
//     name: 'Darshan Dhandhukiya',
//     age: 23,
//     isSingle: true,
//     location: {
//         city: 'Ahmedabad',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Date is saved');
// }).catch((error) => {
//     console.log('This falied', error)
// });

// database.ref().set('This will override the previously created object');

// database.ref('age').set(24); // It will only change the age to 24.
// database.ref('location/city').set('Shela'); // It will only change the city from Ahmedabad to Shela.

// database.ref('attributes').set({
//     height: 73,
//     weight: 89
// });

// Remove Data 1. method is set() and 2nd is remove() 

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('error', e);
//     })

// Update

// database.ref().update({
//     name: 'DD',
//     age: 23,
//     'location/city': 'Pune'
// })