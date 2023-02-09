import React from "react";
import Button from "../components/buttons/Button";

const Home = () => {
  const btnFn = () => console.log('clicked');
  return (
    <section id='home-content'>
      <div className='buttons-container'>
        <Button btnLabel={'login'} btnCallback={btnFn} btnClass='home-page-btn' />
        <Button btnLabel={'register'} btnCallback={btnFn} btnClass='home-page-btn' />
      </div>
      <div className='image-container'>

      </div>
    </section>
  )
}

export default Home;
