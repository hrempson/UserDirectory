import React from "react";
import useLocationSort from "../../utils/hooks/useLocationSort";
import {Table} from "react-bootstrap";

function UserTable(props){

    const filterBySearch = user => {
        const fullName = `${user.name.first} ${user.name.last}`;
    
        return !props.search || fullName.toLowerCase().includes(props.search.toLowerCase() );
    }

    const sortByLocation = useLocationSort (props.sort);

    return  (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope= "col">First name</th>
                    <th scope= "col">Last name</th>
                    <th scope= "col">Email</th>
                    <th scope= "col">Phone #</th>
                    <th scope= "col">
                        Location
                        <button onClick={() => props.updateSort("asc")}>Asc</button>
                        <button onClick={() => props.updateSort("desc")}>Desc</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.users.filter(filterBySearch).sort(sortByLocation).map(user => {
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