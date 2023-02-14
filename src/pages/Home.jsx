import React from "react";
import Button from "../components/buttons/Button";
import './home.css';

const Home = () => {
  const btnFn = () => console.log('clicked');
  return (
    <section id='home-content'>
      <h1>Asign Task to your mantees and never miss another deadline</h1>
      <h2>Tracker is an easy to use deadline app that allows you set up custom reminders for youself and people you manage</h2>
      <div className='buttons-container'>
        <Button btnLabel={'login'} btnCallback={btnFn} btnClass='home-page-btn' />
        <Button btnLabel={'register'} btnCallback={btnFn} btnClass='home-page-btn' />
      </div>
      <div className='image-container'>
        <img href="/" alt='img coming soon'/>
      </div>
    </section>
  )
}

export default Home;
