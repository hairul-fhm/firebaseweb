 firebase.initializeApp( {

  apiKey: "AIzaSyBb5KTc320P1A688RxDEKf3i3uWksbOBCs",
  authDomain: "firestoreapps-b3ed5.firebaseapp.com",
  projectId: "firestoreapps-b3ed5"
  });
 var db = firebase.firestore();

// simpan data
 function klik()
 {

    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var born = document.getElementById('born').value;
    db.collection("users").add({
    first: first,
    last: last,
    born: born
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('first').value='';
        document.getElementById('last').value='';
        document.getElementById('born').value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
 }
 // tampil data
var table = document.getElementById('table');
 db.collection("users").onSnapshot((querySnapshot) => {
    table.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        table.innerHTML += `
        <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().first}</td>
          <td>${doc.data().last}</td>
          <td>${doc.data().born}</td>
          <td><button class="btn btn btn-warning" id="ubah" onclick="hapus('${doc.id}')">Hapus</td>
          <td><button class="btn btn btn-danger" id="hapus" onclick="ubah('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Ubah</td>
        </tr> `
    });
});
 // delete data
 function hapus(id)
 {

  db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
 
 // ubah data
 function ubah(id,first,last,born)
 {
    document.getElementById('first').value=first;
    document.getElementById('last').value=last;
    document.getElementById('born').value=born;
    var btn=document.getElementById('btn');
    btn.innerHTML= "Simpan Ubah";
    btn.onclick=function(){
      var userRef = db.collection("users").doc(id);
      var f = document.getElementById('first').value;
      var l = document.getElementById('last').value;
      var b = document.getElementById('born').value;

  // Set the "capital" field of the city 'DC'
  return userRef.update({
     first: f,
      last: l,
      born: b
      })
        .then(function() {
            console.log("Document successfully updated!");
            btn.innerHTML="Simpan";
            document.getElementById('first').value='';
          document.getElementById('last').value='';
          document.getElementById('born').value='';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
  
  
 }