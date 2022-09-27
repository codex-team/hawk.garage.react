import React from 'react';
import styles from '@/pages/Login/Login.module.css';
import { Base } from '@/commons/layouts/auth/base/Base';
import Button, { ButtonStyle } from '@/commons/components/Button/Button';
import { Fieldset } from '@/commons/components/Fieldset/Fieldset';

export const Login: React.FC = () => {
  const handleSubmitAction: React.FormEventHandler = async (e): Promise<void> => {
    e.preventDefault();

    console.log('Handle login form submit');
  };

  return (
    <Base>
      <form onSubmit={handleSubmitAction}>
        <Fieldset className={styles.fieldset} label={'email address'} type={'email'} name={'email'} placeholder={'name@best-team.com'} autocomplete={'email'}/>
        <Fieldset className={styles.fieldset} label={'password'} type={'password'} name={'password'} placeholder={'********'}/>
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
