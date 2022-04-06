import React, {useState} from "react";
import './App.css';
import Navigation from "./components/Navigation";
import Greetings from "./components/Greetings";
import data from './data/data.json';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Design from "./components/design/Design";
import Login from "./components/Login";
import Cart from "./components/Cart";
import UserDesigns from "./components/design/UserDesigns";
import {AuthContextProvider} from "./components/state/AuthContext";

const DESIGNS = [
    {
        id: "1",
        name: "some name",
        ingredients: [
            {
                id: "DOUG",
                name: "Some dough"
            },
            {
                id: "DOUG",
                name: "Some dough2"
            },
            {
                id: "PRTN",
                name: "Some protein"
            },
        ]
    },
    {
        id: "2",
        name: "some name2",
        ingredients: [
            {
                id: "DOUG",
                name: "Some dough"
            },
            {
                id: "DOUG",
                name: "Some dough2"
            },
        ]
    },
];

function App() {

    const [designs, setDesigns] = useState(DESIGNS);
    const addDesignHandler = (design) => {
        setDesigns(prevDesigns => {
            return [design, ...prevDesigns];
        })
    };

  return (
      <BrowserRouter>
              <div className="App">
                  <Navigation
                      design = {data.map(post => post.navigation_design)}
                      cart = {data.map(post => post.navigation_cart)}
                      home = {data.map(post => post.navigation_home)}
                      login = {data.map(post => post.navigation_login)}
                      logout = {data.map(post => post.navigation_logout)}/>
                  <Routes>
                      <Route path="/" element={<Navigate replace to="/home" />} />
                      <Route path="/home" element=
                          {<Greetings
                              message = {data.map(post => post.greetings_text)}
                              name= {data.map(post => post.greetings_name)}/>
                          }/>
                      <Route path="/design" element={<Design onSaveDesign={addDesignHandler}/>}/>
                      <Route path="/recent" element={<UserDesigns designs = {designs}/>}/>
                      <Route path="/cart" element={<Cart/>}/>
                      <Route path="/login" element={<Login/>}/>
                  </Routes>
              </div>
      </BrowserRouter>
  );
}

export default App;
