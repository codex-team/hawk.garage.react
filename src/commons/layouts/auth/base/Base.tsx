import React from "react";
import styles from './Base.module.css';
import {Text} from "../../../components/Text/Text";
import Delimiter from "../../../components/Delimiter/Delimiter";

interface Props extends React.PropsWithChildren {}

export const Base: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.container}>
      <Text weight={"bold"} size={"m"} className={styles.title}>Hawk</Text>
      <Text className={styles.caption}>Time for quality</Text>
      <div className={styles.login}>
        <div className={styles.picture}/>
        <div className={styles.form}>
          <div className={styles.links}>
            <a href={"/login"}>Login</a>
            <a href={"/sign-up"}>Sing up</a>
          </div>
          <Delimiter className={styles.delimiter}/>
          { children }
        </div>
      </div>
    </div>
  );
}
