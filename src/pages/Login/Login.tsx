import React from 'react';
import styles from '@/pages/Login/Login.module.css';
import { Base } from '@/commons/layouts/auth/base/Base';
import Button, { ButtonStyle } from '@/commons/components/Button/Button';
import { Fieldset } from '@/commons/components/Fieldset/Fieldset';

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailFieldChange = (newValue: string): void => {
    setEmail(newValue);
  };

  const handlePasswordFieldChange = (newValue: string): void => {
    setPassword(newValue);
  };

  const handleSubmitAction: React.FormEventHandler = async (e): Promise<void> => {
    e.preventDefault();

    console.log('Handle login form submit', email, password);
  };

  return (
    <Base>
      <form onSubmit={handleSubmitAction}>
        <Fieldset
          className={styles.fieldset}
          label={'email address'}
          type={'email'}
          name={'email'}
          placeholder={'name@best-team.com'}
          autocomplete={'email'}
          value={email}
          onChange={handleEmailFieldChange}
        />
        <Fieldset
          className={styles.fieldset}
          label={'password'}
          type={'password'}
          name={'password'}
          placeholder={'********'}
          value={password}
          onChange={handlePasswordFieldChange}
        />
        <div className={styles.action}>
          <Button styleType={ButtonStyle.Submit} type="submit">
            Log in
          </Button>
          <a href={'/recover'}>Recover password</a>
        </div>
      </form>
    </Base>
  );
};
