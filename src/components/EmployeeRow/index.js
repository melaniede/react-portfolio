import React from "react";

function EmployeeRow (props) {
    return (
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row"><img src={props.image}/></th>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default EmployeeRow;

<table class="table">
<thead>
    <tr>
        <th scope="col">Employee</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
    </tr>
</thead>
</table>