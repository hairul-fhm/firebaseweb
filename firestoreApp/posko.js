 firebase.initializeApp( {

  apiKey: "AIzaSyBb5KTc320P1A688RxDEKf3i3uWksbOBCs",
  authDomain: "firestoreapps-b3ed5.firebaseapp.com",
  projectId: "firestoreapps-b3ed5"
  });
var db = firebase.firestore();
// db.collection("terara").doc("kalianyar").set({
//     rt_rb: 0,
//     rt_rs: 0,
//     rt_rr: 0
// })
// .then(function(docRef) {
//     console.log("Document successfully written!",docRef.id);
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });

var sfDocRef = db.collection("terara").doc("jenggik");

// Uncomment to initialize the doc.
// sfDocRef.set({ population: 0 });

return db.runTransaction(function(transaction) {
    // This code may get re-run multiple times if there are conflicts.
    return transaction.get(sfDocRef).then(function(sfDoc) {
        if (!sfDoc.exists) {
            throw "Document does not exist!";
        }

        var newPopulation = sfDoc.data().population + 1;
        transaction.update(sfDocRef, { population: newPopulation });
    });
}).then(function() {
    console.log("Transaction successfully committed!");
}).catch(function(error) {
    console.log("Transaction failed: ", error);
});

