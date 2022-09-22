import React from "react";
import styles from './Base.module.css';
import {Text} from "../../../components/Text/Text";

interface Props extends React.PropsWithChildren {}

export const Base: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.container}>
      <Text weight={"bold"} size={"m"} className={styles.title}>Hawk</Text>
      <Text className={styles.caption}>Time for quality</Text>
      <div className={styles.login}>
        <div className={styles.picture}/>
        <div className={styles.form}>
          { children }
        </div>
      </div>
    </div>
  );
}
