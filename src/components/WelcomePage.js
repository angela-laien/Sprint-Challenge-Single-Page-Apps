import React from "react";
import styled from "styled-components";

export default function WelcomePage() {

  const Picture = styled.div`
    margin: 0% 35%;
  `
  return (

    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Picture>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Picture>
      </header>
    </section>
  );
}
