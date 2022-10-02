import React, { ReactElement } from 'react';
import styles from '@/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/Login/Login';
import cn from 'classnames';
import { SignUp } from '@/pages/SignUp/SignUp';
import { AuthProvider, authProviderValue } from '@/providers/AuthProvider';

/**
 * Application root component
 */
function App(): ReactElement {
  return (
    <AuthProvider value={authProviderValue}>
      <div className={cn('hds-root', 'hds-root-colors-dark', styles.app)}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
