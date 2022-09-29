import React from 'react';
import cn from 'classnames';
import styles from '@/commons/components/Sidebar/Sidebar.module.css';

interface Props extends React.PropsWithChildren{
  /**
   * Class name for providing styles to the component
   */
  className?: string,
}

/**
 * Base for sidebar component
 *
 * @param props - props of sidebar component
 */
const Sidebar: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={ cn(styles.sidebar, className) }>
      { children }
    </div>
  );
};

export default Sidebar;
