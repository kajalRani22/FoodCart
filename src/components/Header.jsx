import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = () => {
    const {carts}= useSelector((state)=>state.allCart);
   
  return (
    <>
      <Navbar style={{ height: "60px", background: "maroon", color: "white" }}>
        <Container>
         <NavLink to="/" className="text-decoration-none text-light mx-2">
         <h1 className="text-light">TastyFood</h1>
         </NavLink>
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
          <div id="ex4">
            <span className="p1 fa-stack fa-2x has-badge" data-count={carts.length}>
              <i className=" fa fa-cart-shopping"></i>
            </span>
          </div>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
