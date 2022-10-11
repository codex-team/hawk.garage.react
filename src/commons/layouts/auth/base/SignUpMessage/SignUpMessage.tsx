import React from 'react';
import styles from '@/commons/layouts/auth/base/SignUpMessage/SignUpMessage.module.css';

interface Props {}

export const SignUpMessage: React.FC<Props> = () => {
  return (
    <div className={styles.signUpMessage}>
      <span className={styles.icon}>💌</span>
      The password is sent to your email
    </div>
  );
};
