import React from 'react';
import styles from '@/pages/SignUp/SignUp.module.css';
import { Base } from '@/commons/layouts/auth/base/Base';
import Button, { ButtonStyle } from '@/commons/components/Button/Button';
import { Fieldset } from '@/commons/components/Fieldset/Fieldset';
import { useAuth } from '@/providers/AuthProvider';

export const SignUp: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { signup } = useAuth();

  const handleEmailFieldChange = (newValue: string): void => {
    setEmail(newValue);
  };

  const handleSubmitAction: React.FormEventHandler = async (e): Promise<void> => {
    e.preventDefault();

    setLoading(true);
    await signup(email);
    setLoading(false);
  };

  return (
    <Base>
      <form onSubmit={handleSubmitAction}>
        <Fieldset
          className={styles.fieldset}
          label={'Email address'}
          type={'email'}
          name={'email'}
          placeholder={'name@best-team.com'}
          autocomplete={'email'}
          value={email}
          onChange={handleEmailFieldChange}
        />
        <Button
          styleType={ButtonStyle.Submit}
          type="submit"
          loading={loading}
        >
          Register
        </Button>
      </form>
    </Base>
  );
};
