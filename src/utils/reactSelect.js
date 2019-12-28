/** @format */

import React from "react";

export const sort = (a, b) => {
    let comparison = 0;
    if (typeof a == "number" && typeof b == "number") {
        comparison = a - b;
    } else {
        // Use toUpperCase() to ignore character casing
        var itemA = a.toUpperCase();
        var itemB = b.toUpperCase();
        if (itemA >= itemB) {
            comparison = 1;
        } else if (itemA < itemB) {
            comparison = -1;
        }
    }

    return comparison;
};

export const makeSelectOptionsArray = optionsArray => {
    optionsArray.sort(sort);
    let newOptions = [];
    optionsArray.map((item, index) => {
        newOptions[index] = {
            label: item,
            value: item
        };
    });
    return newOptions;
};
