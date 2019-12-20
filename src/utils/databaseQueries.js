import React from "react";

export const getCollectionDocs = (
    databaseOrDocRef,
    collectionName,
    returnData
) => {
    let docs = [];
    var subcollectionNames = [];
    databaseOrDocRef
        .collection(collectionName)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots

                var docData = doc.data();

                if (collectionName == "accounts") {
                    subcollectionNames = ["products", "stores"];
                }
                if (collectionName == "users") {
                    subcollectionNames = [];
                }
                if (collectionName == "products") {
                    subcollectionNames = ["inventory"];
                }
                if (collectionName == "stores") {
                    subcollectionNames = ["contacts"];
                }

                subcollectionNames.map((subcollectionName, index) => {
                    const returnFunction = data => {
                        docData[subcollectionName] = data;
                    };

                    var subDocRef = databaseOrDocRef
                        .collection(collectionName)
                        .doc(doc.id);

                    getCollectionDocs(
                        subDocRef,
                        subcollectionName,
                        returnFunction
                    );
                });

                docs.push(docData);
            });
            returnData(docs);
        });
};
