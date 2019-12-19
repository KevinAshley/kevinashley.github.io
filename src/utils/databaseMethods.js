import React from "react";

export const getCollectionDocs = (database, collectionName) => {
    let docs = {};
    database.collection(collectionName)
        .get()
        .then(
            (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                docs[doc.id] = doc.data();
            });
        });
    return docs;
};
