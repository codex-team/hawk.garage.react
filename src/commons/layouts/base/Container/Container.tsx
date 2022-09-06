import React from "react";
import styles from './Container.module.css'

interface Props{
  /**
   * Array of column components for layout
   */
  columns: Array<React.ReactNode>,
}

/**
 * Container layout
 *
 * @param props - props of component
 */
const Container: React.FC<Props> = ({ columns }) => {
  return (
  <div className={styles.container}>
    { columns }
  </div>
  );
};

export default Container;
