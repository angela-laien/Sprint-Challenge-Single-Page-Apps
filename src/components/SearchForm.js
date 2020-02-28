import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SearchForm() {
  
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/1,183')
    .then(response => {
      console.log(response);
      const characters = response.data.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase()));
        setData(characters);
    })
  },[query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

    const Frame = styled.div`
      margin: 2% 45%;
    `
  return (
    <div className="search-form">
     {/* Add a search form here */}
     <Frame>
        <form className="search">
        <input
        type="text"
        onChange={handleInputChange}
        value={query}
        name="name"
        tabIndex="0"
        className="prompt search-name"
        placeholder="search by name"
        autoComplete="off"
        />
        </form>
     </Frame>

     <div className="info-display">
      {data.map((character =>{

        const Card = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 5%;
        border: 2px solid pink;
        `
        const Photo = styled.div`
        margin: 5%;
        `
        const Info = styled.div`
        margin: 5%;
        `
        return(
          <Card className="character-list" key={character.id}>
            <Photo>
              <img alt="character" src={character.image} /><br/>
            </Photo>
            <Info>
              <h2>Name: {character.name}</h2><br/>
              <h3>Species: {character.species}</h3><br/>
              <h3>Gender: {character.gender}</h3><br/>
              <h3>Birthday: {character.created}</h3><br/>
            </Info>
          </Card>
        )
      }))}
     </div>
    </div>
  );
}
