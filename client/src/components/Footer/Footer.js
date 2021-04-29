
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://akshad.netlify.app/">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/akshadk7/">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://medium.com/@akshadkolhatkar">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made
           by{" "}
          <a
            href="https://github.com/AkshadK7"
            target="_blank"
          >
            Akshad
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
