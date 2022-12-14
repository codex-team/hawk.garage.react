import React from 'react';
import styles from '@/commons/layouts/auth/base/Base.module.css';
import { Text } from '@/commons/components/Text/Text';
import Delimiter from '@/commons/components/Delimiter/Delimiter';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props extends React.PropsWithChildren {}

export const Base: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Text weight="bold" size="m" className={styles.title}>Hawk</Text>
      <Text className={styles.caption}>Time for quality</Text>
      <div className={styles.formContainer}>
        <div className={styles.picture}/>
        <div className={styles.form}>
          <div className={styles.links}>
            <NavLink
              to={'/login'}
              className={({ isActive }) => {
                return cn(styles.navLink, { [styles.navLinkActive]: isActive });
              }}
            >Login</NavLink>
            <NavLink
              to={'/signup'}
              className={({ isActive }) => {
                return cn(styles.navLink, { [styles.navLinkActive]: isActive });
              }}
            >Sign up</NavLink>
          </div>
          <Delimiter className={styles.delimiter}/>
          { children }
        </div>
      </div>
    </div>
  );
};
