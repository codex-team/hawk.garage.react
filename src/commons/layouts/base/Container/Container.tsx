import React from "react";
import styles from './Container.module.css'

interface Props{
  /**
   * Array of column components for layout
   */
  columns: React.ReactNode[],
}

/**
 * Base layout for drawing components in columns
 *
 * @param columns - array of components to draw in columns
 */
const Container: React.FC<Props> = ({ columns }) => {
  return (
  <div className={styles.container}>
    { columns }
  </div>
  );
};

export default Container;
