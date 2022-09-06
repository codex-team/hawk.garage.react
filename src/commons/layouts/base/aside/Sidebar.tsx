import React from "react";
import styles from './Aside.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Sidebar layout
 *
 * @param props - props of component
 */
const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <div className={ styles.sidebar}>
      { children }
    </div>
);
};

export default Sidebar;
