var db = firebase.firestore();

db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


// var docData = {
//     stringExample: "Hello world!",
//     booleanExample: true,
//     numberExample: 3.14159265,
//     dateExample: new Date("December 10, 1815"),
//     arrayExample: [5, true, "hello"],
//     nullExample: null,
//     objectExample: {
//         a: 5,
//         b: {
//             nested: "foo"
//         }
//     }
// };

// db.collection("wilayah").doc("satu").set(docData).then(function(){
// 	console.log("Berhasil");
})
var table=document.getElementById('table');
db.collection('cities').OnSnapshot((querySnapshot) => {
    table.innerHTML='';
    querySnapshot.foreach((doc) => {
        console.log('${doc.id) => ${doc.data().first}');
        // table.innerHTML += `
        // <tr>
        // <th scope="row">${doc.id}</th>
        // <td>${doc.data().first}

        // `
    })
})