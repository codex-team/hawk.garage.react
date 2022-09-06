import React from "react";
import styles from './Container.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Container layout
 *
 * @param props - props of component
 */
const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className={ styles.container}>
      { children }
    </div>
  );
};

export default Container;
