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
 * Base for sidebar component
 *
 * @param children - internal component to show
 * @param className - class name for sidebar
 */
const Sidebar: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={ cn(styles.sidebar, className) }>
      { children }
    </div>
);
};

export default Sidebar;
