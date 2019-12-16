import React from "react";

export const makeSelectOptionsArray = optionsArray => {
    let newOptions = [];
    optionsArray.map((item, index) => {
        newOptions[index] = {
            label: item,
            value: item
        };
    });
    return newOptions;
};
