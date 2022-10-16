import React, { ReactElement } from 'react';
import styles from '@/App.module.css';
import { RouterProvider } from 'react-router-dom';
import cn from 'classnames';
import { AuthProvider, authProviderValue } from '@/providers/AuthProvider';
import { router } from '@/router';

/**
 * Application root component
 */
function App(): ReactElement {
  return (
    <AuthProvider value={authProviderValue}>
      <div className={cn('hds-root', 'hds-root-colors-dark', styles.app)}>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
