import React from 'react';
import SubmitButton from '../buttons/SubmitButton';
import TextInput from '../inputs/TextInput';

const AppForm = ({ handleSubmitCb, inputConfig }) => 
  <form onSubmit={handleSubmitCb}>
    {inputConfig.map((config) => {
      if (config.type === 'text') {
        return <TextInput inputOptions={config} />
      } else if (config.type === 'password') {
        return 
      }
    })}
    <SubmitButton btnLabel='submit' />
  </form>

export default AppForm;
