/** @format */

import React from "react";

export const productsTableData = (products, tableCols) => {
    let tableData = [];

    if (products) {
        products.map(product => {
            if (product.inventory) {
                product.inventory.map((unit, unitIndex) => {
                    var thisUnit = {};
                    if (unit.options) {
                        thisUnit[tableCols[0].value] =
                            product[tableCols[0].value];
                        thisUnit[tableCols[1].value] =
                            unit.options[tableCols[1].value];
                        thisUnit[tableCols[2].value] =
                            unit.options[tableCols[2].value];
                        thisUnit[tableCols[3].value] = unit[tableCols[3].value];
                        thisUnit[tableCols[4].value] = unit[tableCols[4].value];
                    }
                    tableData.push(thisUnit);
                });
            }
        });
    }

    return tableData;
};

export const filteredTableData = (data, tableCols) => {
    let filteredData = [];
    data.map(item => {
        var includeThisRow = true;
        tableCols.map(tableCol => {
            if (tableCol.exclude.includes(item[tableCol.value])) {
                includeThisRow = false;
            }
        });
        if (includeThisRow) {
            filteredData.push(item);
        }
    });
    return filteredData;
};
