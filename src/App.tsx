
import React, { ReactElement } from 'react';
import styles from './App.module.css';
import {Link, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Logout} from "./pages/Logout";

/**
 * Application root component
 */
function App(): ReactElement {
  return (
    <div className={styles.app}>
      <nav>
        <Link to="/login">Login page</Link>
        <Link to="/logout">Logout page</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <div>Click on the link</div>
        } />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
