import React, { ReactElement } from 'react';
import styles from '@/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/Login/Login';
import cn from 'classnames';
import { SignUp } from '@/pages/SignUp/SignUp';

/**
 * Application root component
 */
function App(): ReactElement {
  return (
    <div className={cn('hds-root', 'hds-root-colors-dark', styles.app)}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
