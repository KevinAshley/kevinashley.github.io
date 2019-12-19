import React from "react";

export const getCollectionDocs = (databaseOrDocRef, collectionName) => {
    let docs = [];
    databaseOrDocRef.collection(collectionName)
        .get()
        .then(
            (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                var docData = doc.data();

                var subcollectionName = "";
                if (collectionName == 'products') {
                    subcollectionName = 'inventory';
                }
                if (subcollectionName) {
                    var subDocRef = databaseOrDocRef.collection(collectionName).doc(doc.id);
                    docData[subcollectionName] = getCollectionDocs(subDocRef, subcollectionName);
                }
                docs.push(docData);
            });
        });
    return docs;
};
