import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  //return <span>todo: character</span>;
  console.log(props);
  
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
  return (
    <Card>
      <Photo>
        <img alt="character" src={props.image} />
      </Photo>
      <Info>
        <h2>{props.name}</h2><br/>
        <h3>{props.species}</h3><br/>
        <h3>{props.gender}</h3><br/>
        <h3>{props.birthday}</h3>
      </Info>
    </Card>
  )
}
