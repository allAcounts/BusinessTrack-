import React, { useState } from "react";
import HomePageContent from "../components/home-page-content/HomePageContent";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import './home.css';

const Home = () => {
  const [shouldRenderLogin, setShouldRenderLogin] = useState(false);
  const [shouldRenderRegister, setShouldRenderRegister] = useState(false);
  
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
