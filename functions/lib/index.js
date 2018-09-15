"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    console.log(user.email);
    console.log(user.uid);
});
exports.createProfile = functions.auth.user().onCreate((userRecord, context) => {
    return admin.database().ref(`/userProfile/${userRecord.uid}`).set({
        email: userRecord.email,
        name: userRecord.displayName,
        phone: userRecord.phoneNumber
    });
});
exports.funk1 = functions.https.onCall((data, context) => {
    console.log(data);
    const var1 = data.email;
    const var2 = data.password;
    functions.database.ref('users/{var1}/{var2}');
    const rahul = {
        var1: var1, var2: var2
    };
    console.log(rahul);
    return rahul;
});
//# sourceMappingURL=index.js.map