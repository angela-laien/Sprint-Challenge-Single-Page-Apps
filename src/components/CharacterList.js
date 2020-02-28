import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/1,183')
    .then(response => {
      console.log(response.data);
      setData(response.data)
    })
    .catch(error => {
      console.error('error', error);
    })
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {data.map(character => (
        <CharacterCard 
          key={character.id} 
          image={character.image}
          name={character.name}
          species={character.species}
          gender={character.gender}
          birthday={character.created}
        />
      ))}
    </section>
  );
}
