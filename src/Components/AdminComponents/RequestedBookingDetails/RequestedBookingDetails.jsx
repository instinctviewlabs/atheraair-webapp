import React, { useEffect } from 'react';
import { db } from "../../../Lib/Firebase/firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

function RequestedBookingDetails() {

const unsubscribe = onSnapshot(
    collection(db, "pendingBookings"), 
    (snapshot) => {
        snapshot.docs.map((element, index) => {
            console.log(element.data())
        });
    },
    (error) => {
        console.log(error);
    });

    useEffect(() => {
        unsubscribe();
    }, [])
//   db.collection("pendingBookings");
    // .onSnapshot((doc) => {
    //     console.log("Current data: ", doc.data());
    // });

  return (
    <div>RequestedBookingDetails</div>
  )
}

export default RequestedBookingDetails