import React from "react";
import {Table} from "react-bootstrap";

function UserTable(props){

    // props.users.filter();

    return  (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope= "col">First name</th>
                    <th scope= "col">Last name</th>
                    <th scope= "col">Email</th>
                    <th scope= "col">Phone #</th>
                    <th scope= "col">Address</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => {
                    return (
                        <tr key ={user.id.value}>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.location.city}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
export default UserTable;