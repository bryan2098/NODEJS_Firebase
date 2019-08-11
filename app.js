const admin = require('firebase-admin');

let serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let col_type_bedroom = db.collection('type_bedroom');

// add data

let json_add = [
  {
    name: "Nguyen Tri",
    age: 20
  },
  {
    name: "Tran Thanh",
    age: 20
  },
  {
    name: "Tran Hien",
    age: 21
  },
  {
    name: "Van Han",
    age: 15
  },
  {
    name: "Tran Cong Minh",
    age: 28
  },
  {
    name: "Lo Cuc Ti",
    age: 53
  },
  {
    name: "Tran An",
    age: 28
  },
]

// json_add.forEach(data => {
//   col_type_bedroom.add(data)
//   .then(ref => {
//       console.log('Added document with ID: ', ref.id)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// })




// update
// let update_type_room = col_type_bedroom.doc('koohsKR3yQAbumrVzUwQ')
//                       .update({name: "Dành cho người trong nước"})
//                       .then(ref => {
//                         console.log(ref.id + " được update");
//                       })


//delete
// col_type_bedroom.doc("koohsKR3yQAbumrVzUwQ").delete();



// use Where 
col_type_bedroom.where("age", ">=", 25).limit(2).orderBy("age", "desc").get()
.then(snapshot => {
  snapshot.forEach(data => {
    console.log(`ID: ${data.id} - Name: ${data.data().name}`);
  })
})
.catch(err => {
  console.log(err);
})
