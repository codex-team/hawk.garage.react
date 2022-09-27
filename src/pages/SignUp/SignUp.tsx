import React from 'react';
import styles from '@/pages/SignUp/SignUp.module.css';
import { Base } from '@/commons/layouts/auth/base/Base';
import Button, { ButtonStyle } from '@/commons/components/Button/Button';
import { Fieldset } from '@/commons/components/Fieldset/Fieldset';

export const SignUp: React.FC = () => {
  const handleSubmitAction: React.FormEventHandler = async (e): Promise<void> => {
    e.preventDefault();

    console.log('Handle sign up form submit');
  };

  return (
    <Base>
      <form onSubmit={handleSubmitAction}>
        <Fieldset className={styles.fieldset} label={'Email address'} type={'email'} name={'email'} placeholder={'name@best-team.com'} autocomplete={'email'}/>
        <Button styleType={ButtonStyle.Submit} type="submit">
          Register
        </Button>
      </form>
    </Base>
  );
};
