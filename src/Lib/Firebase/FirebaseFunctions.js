const functions = require("firebase-functions");
var Amadeus = require('amadeus');
require("dotenv").config();

let amadeus = new Amadeus({ clientId: process.env.AMADEUS_CLIENT_ID, clientSecret: process.env.AMADEUS_CLIENT_SECRET });

const admin = require('firebase-admin');
admin.initializeApp();


exports.airports = functions.https.onRequest((request, response) => {  //Get method
  amadeus.referenceData.locations.get({
    keyword: request.query.keyword,
    subType: Amadeus.location.any
  }).then(function (res) {
    response.send(res.data);
  }).catch(function (responseError) {
    console.log(responseError);
    throw (responseError)
  });
});

exports.oneway = functions.https.onRequest((request, response) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: request.query.origin,
    destinationLocationCode: request.query.destination,
    departureDate: request.query.departureDate,
    adults: request.query.adults,
    children: request.query.children,
    infants: request.query.infants
  }).then(function (res) {
    response.send(res.data);
    }).catch(function (responseError) {

    console.log(responseError);
    throw (responseError)
  });
});

exports.twoway = functions.https.onRequest((request, response) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: request.query.origin,
    destinationLocationCode: request.query.destination,
    departureDate: request.query.departureDate,
    returnDate: request.query.returnDate,
    adults: request.query.adults,
    children: request.query.children,
    infants: request.query.infants
  }).then(function (res) {
    response.send(res.data);
  }).catch(function (responseError) {

    console.log(responseError);
    throw (responseError)
  });
});


exports.createUser = functions.https
  .onRequest((request, response) => {
    var userObject = {
      name: `${request.body.name}`,
      email: `${request.body.email}`,
      type: "user",
      masterList: []
    };

    return admin.firestore().doc(`users/${request.body.userId}`).set(userObject).then(
      response.send("Success")
    );
  });


exports.updateNumber = functions.https
  .onRequest((request, response) => {
    var userObject = {
      number: `${request.body.number ?? ''}`,
    };

    return admin.firestore().doc(`users/${request.body.userId}`).update(userObject).then(
      response.send("Success")
    );
  });


exports.editAccount = functions.https
  .onRequest((request, response) => {
    var userObject = {
      name: `${request.body.name ?? ''}`,
      dob: `${request.body.dob ?? ''}`,
      number: `${request.body.number ?? ''}`,
      gender: `${request.body.gender ?? ''}`,
      email: `${request.body.email ?? ''}`,
      nationality: `${request.body.nationality ?? ''}`,
      passportNumber: `${request.body.passportNumber ?? ''}`,
      expiryDate: `${request.body.expiryDate ?? ''}`,
      issuingCountry: `${request.body.issuingCountry ?? ''}`,
    };

    return admin.firestore().doc(`users/${request.body.userId}`).update(userObject).then(
      response.send("Success")
    );
  });

exports.helloWorld = functions.https
  .onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send(`Hello from Firebase! ${request.body.name}`);
  });


exports.getUser = functions.https
  .onRequest((request, response) => {

    return admin.firestore().doc(`users/${request.body.userId}`).get().then(
      data=> {
        response.send(data.data());
      }
    )
    
  });



  exports.addTraveller = functions.https
  .onRequest((request, response) => {
    var userObject = {
      name: `${request.body.name ?? ''}`,
      dob: `${request.body.dob ?? ''}`,
      gender: `${request.body.gender ?? ''}`,
      email: `${request.body.email ?? ''}`,
      nationality: `${request.body.nationality ?? ''}`,
      passportNumber: `${request.body.passportNumber ?? ''}`,
      expiryDate: `${request.body.expiryDate ?? ''}`,
      issuingCountry: `${request.body.issuingCountry ?? ''}`,
    };

    return admin.firestore().doc(`users/${request.body.userId}`).update(
      {masterList:admin.firestore.FieldValue.arrayUnion(userObject)
      }
      ).then(
      response.send("Success")
    );
  });


  exports.removeTraveller = functions.https
  .onRequest((request, response) => {
    var userObject = {
      name: `${request.body.name ?? ''}`,
      dob: `${request.body.dob ?? ''}`,
      gender: `${request.body.gender ?? ''}`,
      email: `${request.body.email ?? ''}`,
      nationality: `${request.body.nationality ?? ''}`,
      passportNumber: `${request.body.passportNumber ?? ''}`,
      expiryDate: `${request.body.expiryDate ?? ''}`,
      issuingCountry: `${request.body.issuingCountry ?? ''}`,
    };

    return admin.firestore().doc(`users/${request.body.userId}`).update(
      {masterList:admin.firestore.FieldValue.arrayRemove(userObject)
      }
      ).then(
      response.send("Success")
    );
  });