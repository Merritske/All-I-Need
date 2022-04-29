// Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCdA-lwasFmQlvPYGRa3jLWsVGCM1J20ZE",
  authDomain: "mytodolist-59b8a.firebaseapp.com",
  projectId: "mytodolist-59b8a",
  storageBucket: "mytodolist-59b8a.appspot.com",
  messagingSenderId: "863281685464",
  appId: "1:863281685464:web:62f71046406ed5574c08ad"
          };
          firebase.initializeApp(firebaseConfig);
        
        firebase.analytics();
          var db = firebase.firestore();
