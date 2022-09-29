import React from 'react';
import styles from './Delimiter.module.css';
import cn from "classnames";

interface Props {
  /**
   * Classname for styling delimiter
   */
  className?: string;
}

/**
 * Delimiter component
 *
 * @param props - props of component
 */
const Delimiter: React.FC<Props> = ({ className}) => {

  return (
    <hr className={cn(styles.delimiter, className)}/>
  );
};

export default Delimiter;
