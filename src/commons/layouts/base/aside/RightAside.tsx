import React from "react";
import styles from './Aside.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Right aside layout
 *
 * @param props - props of component
 */
const RightAside: React.FC<Props> = ({ children }) => {
  return (
    <div className={ styles.right}>
      { children }
    </div>
  );
};

export default RightAside;
