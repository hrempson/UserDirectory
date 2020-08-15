import React from "react";
import {Table} from "react-bootstrap";

function UserTable(props){

    const filterBySearch = user => {
        const fullName = `${user.name.first} ${user.name.last}`;

        return !props.search || fullName.toLowerCase().includes(props.search.toLowerCase() );
    }
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
                {props.users.filter(filterBySearch).map(user => {
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