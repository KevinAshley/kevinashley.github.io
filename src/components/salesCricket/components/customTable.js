/** @format */

import React, { Component } from "react";

import { Table } from "reactstrap";

class CustomTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("custom table props - ", this.props);
        return (
            <Table bordered responsive>
                <thead className="bg-dark text-light">
                    <tr>
                        {this.props.tableCols.map((item, index) => {
                            return (
                                <th key={index}>
                                    <span className="text-nowrap">
                                        {item.label}
                                    </span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody></tbody>
                {this.props.tableData.map((item, itemIndex) => {
                    return (
                        <tr key={itemIndex}>
                            {this.props.tableCols.map((col, colIndex) => {
                                return (
                                    <td key={colIndex}>{item[col.value]}</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </Table>
        );
    }
}

export default CustomTable;
