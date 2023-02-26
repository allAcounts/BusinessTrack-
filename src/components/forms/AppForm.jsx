import React from 'react';
import SubmitButton from '../buttons/SubmitButton';
import EmailInput from '../inputs/EmailInput';
import PasswordInput from '../inputs/PasswordInput';
import TextInput from '../inputs/TextInput';
import "./FormStyles.css";

const AppForm = ({ handleSubmitCb, inputConfig, classname, submitLabel }) => 
  <form className={classname} onSubmit={handleSubmitCb}>
    {inputConfig.map((config) => {
      if (config.type === 'text') {
        return <TextInput key={config.id} inputOptions={config} />
      } else if (config.type === 'password') {
        return <PasswordInput key={config.id} inputOptions={config} />
      } else if (config.type === 'email') {
        return <EmailInput key={config.id} inputOptions={config} />
      } else {
        return null
      }
    })}
    <SubmitButton btnLabel={submitLabel} />
  </form>

export default AppForm;
