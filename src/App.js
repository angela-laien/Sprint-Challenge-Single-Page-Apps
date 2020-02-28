import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} /> 
      <Route path ='/Search' component={SearchForm}/>
      <Route path='/Characters' component={CharacterList}/>
    </main>
  );
}
