import React from "react";
import cn from "classnames";
import styles from './Aside.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Sidebar layout
 *
 * @param props - props of component
 */
const Sidebar: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={ cn(styles.sidebar)}>
      { props.children }
    </div>
);
};

export default Sidebar;
