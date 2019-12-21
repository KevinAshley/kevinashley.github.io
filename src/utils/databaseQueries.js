import React from "react";

export const getCollectionDocs = (
    databaseOrDocRef,
    collectionName,
    docs,
    updateState
) => {
    databaseOrDocRef
        .collection(collectionName)
        .get()
        .then(querySnapshot => {
            var i = 0;
            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                docs.push(doc.data());

                updateState();

                var subcollectionNames = [];
                if (collectionName == "accounts") {
                    subcollectionNames = ["products"];
                }
                if (collectionName == "users") {
                    subcollectionNames = [];
                }
                if (collectionName == "products") {
                    subcollectionNames = ["inventory"];
                }
                if (collectionName == "stores") {
                    subcollectionNames = [];
                }

                if (
                    subcollectionNames.length &&
                    subcollectionNames.length > 0
                ) {
                    subcollectionNames.map((subcollectionName, index) => {
                        docs[i][subcollectionName] = [];

                        var subDocRef = databaseOrDocRef
                            .collection(collectionName)
                            .doc(doc.id);

                        getCollectionDocs(
                            subDocRef,
                            subcollectionName,
                            docs[i][subcollectionName],
                            updateState
                        );
                    });
                }

                i += 1;
            });
        });
};
