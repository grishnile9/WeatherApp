// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import "../../Style/Header.css"
// import { Link } from 'react-router-dom';

// export default function Header() {

    
//       const handleWishlist = () => {
//         // Add logic for wishlist 
//         alert('Please login to perform this action.');
//       };
    
//   return (
//     <div className='header-container'>
//        <Navbar bg="dark" data-bs-theme="dark">
//       <Container fluid>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            
//             <Link to = "/home">
//             <Nav.Link>Home</Nav.Link>
//             </Link>
//             <Link to="/wishlist">
//             <Nav.Link href="#" onClick={handleWishlist}>Wishlist</Nav.Link>
//             </Link>
//             </Nav>
//             <Link to="/register">
//           <Button className="rounded-pill" variant="success me-2">Register</Button>
//           </Link>
//           <Link to="/login">
//           <Button className="rounded-pill" variant="success me-2">Login</Button>
//           </Link>
//           {/* <Link to="/home">
//           <Button className="rounded-pill" variant="success me-3">Logout</Button>
//           </Link> */}
//           </Navbar.Collapse>
//           </Container>
//           </Navbar>
//         </div>
//   )
// }
