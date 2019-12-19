import React from "react";

export const getCollectionDocs = (databaseOrDocRef, collectionName) => {
    let docs = {};
    databaseOrDocRef.collection(collectionName)
        .get()
        .then(
            (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                docs[doc.id] = doc.data();
                // docs[doc.id]['inventory'];
                var subcollectionName = "";
                if (collectionName == 'products') {
                    subcollectionName = 'inventory';
                }

                if (subcollectionName) {
                    var subDocRef = databaseOrDocRef.collection(collectionName).doc(doc.id);
                    docs[doc.id][subcollectionName] = getCollectionDocs(subDocRef, subcollectionName);
                }

            });
        });
    return docs;
};
