import React, { useState, useContext } from "react";
import HomePageContent from "../components/home-page-content/HomePageContent";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AuthContext from "../utils/contexts/AuthContext";
import './home.css';

const Home = () => {
  const context = useContext(AuthContext);
  const user = context?.user;
  const [shouldRenderLogin, setShouldRenderLogin] = useState(false);
  const [shouldRenderRegister, setShouldRenderRegister] = useState(false);
  
  console.log('user ', user);
  return (
    <section id='home-content'>
      {shouldRenderLogin ?
        <Login setShouldRenderLogin={setShouldRenderLogin} />
      : shouldRenderRegister ?
        <Register setShouldRenderRegister={setShouldRenderRegister} />
      :
        <HomePageContent setShouldRenderRegister={setShouldRenderRegister} setShouldRenderLogin={setShouldRenderLogin}  />
      }
    </section>
  )
}

export default Home;
