import React from 'react';
import {
  Navbar,
  NavbarBrand,
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
        className="d-block"
      >
        <div className="w-100 d-md-flex text-center">
        <NavbarBrand className="mx-auto" href="/">
          Azapfy <span className="text-warning">Heroes</span>
        </NavbarBrand>
        <Collapse navbar
          className="d-block justify-content-center justify-content-md-end">
          <Nav
            navbar
          >
            <div className="d-flex align-items-center">
              <p className="text-light m-0 px-3 ">Pesquisar</p>
              <Input
                bsSize="sm"
                type="search"
                className="my-2"
                onChange={props.onChange}
              />
            </div>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;