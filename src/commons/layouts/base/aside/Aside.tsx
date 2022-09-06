import React from "react";
import styles from './Aside.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Aside layout
 *
 * @param props - props of component
 */
const Aside: React.FC<Props> = ({ children }) => {
  return (
    <aside className={ styles.aside}>
      { children }
    </aside>
  );
};

export default Aside;
