import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Input,

} from 'reactstrap'

function Header(props) {
  return (

    <div>
      <Navbar
        color="dark"
        dark
        container
        expand
      >
        <NavbarBrand className="d-sm-block" href="/">
          Azapfy <span className="text-warning">Heroes</span>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar
          className="justify-content-end">
          <Nav
            navbar
          >
            <div className="d-flex">
              <p className="text-light m-0 px-3 ">Pesquisar</p>
              <Input
                bsSize="sm"
                type="search"
                className="justify-end m-0"
                onChange={props.onChange}
              />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;