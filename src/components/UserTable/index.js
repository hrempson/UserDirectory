import React from "react";
import {Table} from "react-bootstrap";

function UserTable(props){

    return  (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <td scope= "col">First name</td>
                    <td scope= "col">Last name</td>
                    <td scope= "col">Email</td>
                    <td scope= "col">Phone #</td>
                    <td scope= "col">Address</td>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => {
                    return (
                        <tr key ={user.id.value}>
                            <td scope= "col">{user.name.first}</td>
                            <td scope= "col">{user.name.last}</td>
                            <td scope= "col">{user.email}</td>
                            <td scope= "col">{user.phone}</td>
                            <td scope= "col">{user.location.city}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
export default UserTable;