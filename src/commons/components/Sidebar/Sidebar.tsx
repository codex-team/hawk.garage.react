import React from "react";
import cn from "classnames";
import styles from './Sidebar.module.css'

interface Props extends React.PropsWithChildren{
  /**
   * Class name for providing styles to the component
   */
  className?: string,
}

/**
 * Sidebar component
 *
 * @param props - props of component
 */
const Sidebar: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={ cn(styles.sidebar, className || styles.workspace) }>
      { children }
    </div>
);
};

export default Sidebar;
