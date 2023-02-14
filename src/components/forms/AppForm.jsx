import React from 'react';
import SubmitButton from '../buttons/SubmitButton';

const AppForm = ({ handleSubmitCb, inputConfig }) => 
  <form onSubmit={handleSubmitCb}>
    {inputConfig.map((config) => {
      
    })}
    <SubmitButton btnLabel='submit' />
  </form>

export default AppForm;
