import React from "react";
import Button from "../buttons/Button";
import AppImage from "../images/AppImage";

const HomePageContent = ({ setShouldRenderLogin, setShouldRenderRegister }) =>
  <>
    <AppImage imgSrc={'../../../src/assets/images/placeholder.webp'} imgAlt={'placeholder'} imgClass={'page-content'} />
    <div className="col">
      <h1>Asign tasks to your mantees and never miss another deadline</h1>
      <h2>Tracker is an easy to use deadline app that allows you set up custom reminders for youself and people you manage</h2>
      <div className='buttons-container'>
        <Button btnLabel={'sign up'} btnCallback={() => setShouldRenderRegister(true)} btnClass='primary' />
        <Button btnLabel={'log in'} btnCallback={() => setShouldRenderLogin(true)} btnClass='secondary' />
      </div>
    </div>
  </>

export default HomePageContent;
