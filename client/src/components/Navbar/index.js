import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Nav from 'react-bootstrap/Nav';



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
<Nav fill variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link to="/">Directory</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/search" search>
      Search
    </Nav.Link>
  </Nav.Item>
</Nav>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     Employee Directory
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
          
    //       <li className="nav-item">
    //         <Link
    //           to="/directory"
    //           className={window.location.pathname === "/directory" ? "nav-link active" : "nav-link"}
    //         >
    //           Directory
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/search"
    //           className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
    //         >
    //           Search
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
