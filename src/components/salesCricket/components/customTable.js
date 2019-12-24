/** @format */

import React, { Component } from "react";

import { Table, Button } from "reactstrap";

class CustomTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                column: "name",
                descending: true
            }
        };
        this.sort = this.sort.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }

    changeSort(column) {
        // console.log(column);
        if (column == this.state.sort.column) {
            this.setState({
                sort: Object.assign({}, this.state.sort, {
                    descending: !this.state.sort.descending
                })
            });
        } else {
            this.setState({
                sort: Object.assign({}, this.state.sort, {
                    column: column,
                    descending: true
                })
            });
        }
    }

    sort(a, b) {
        let comparison = 0;
        if (
            typeof a[this.state.sort.column] == "number" &&
            typeof b[this.state.sort.column] == "number"
        ) {
            comparison = a[this.state.sort.column] - b[this.state.sort.column];
        } else {
            // Use toUpperCase() to ignore character casing
            var itemA = a[this.state.sort.column].toUpperCase();
            var itemB = b[this.state.sort.column].toUpperCase();
            if (itemA >= itemB) {
                comparison = 1;
            } else if (itemA < itemB) {
                comparison = -1;
            }
        }
        if (!this.state.sort.descending) {
            comparison = comparison * -1;
        }
        return comparison;
    }

    render() {
        // console.log("custom table props - ", this.props);

        const sortedData = Array.from(this.props.tableData);
        sortedData.sort(this.sort);

        return (
            <Table bordered striped responsive>
                <thead className="bg-dark text-light">
                    <tr>
                        {this.props.tableCols.map((item, index) => {
                            return (
                                <th key={index}>
                                    <Button
                                        color="link"
                                        className="text-light p-0"
                                        onClick={() =>
                                            this.changeSort(item.value)
                                        }
                                    >
                                        <span className="text-nowrap">
                                            {item.label}
                                            {this.state.sort.column ==
                                            item.value ? (
                                                <React.Fragment>
                                                    {this.state.sort
                                                        .descending == true ? (
                                                        <i className="fas fa-sort-down ml-2"></i>
                                                    ) : (
                                                        <i className="fas fa-sort-up ml-2"></i>
                                                    )}
                                                </React.Fragment>
                                            ) : (
                                                <i className="fas fa-sort ml-2"></i>
                                            )}
                                        </span>
                                    </Button>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, itemIndex) => {
                        return (
                            <tr key={itemIndex}>
                                {this.props.tableCols.map((col, colIndex) => {
                                    return (
                                        <td key={colIndex}>
                                            {item[col.value]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

export default CustomTable;
