import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
display: flex;
justify-content: space-evenly;
`
const Button = styled.button`
color: hotpink;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
      <Link to='/'><Button>Home</Button></Link>
      <Link to='/Characters'><Button>Characters</Button></Link>
      <Link to='/Search'><Button>Search</Button></Link>
      </Nav>
    </header>
  );
}
