import React from 'react';
import styles from '@/commons/components/Content/Content.module.css';

interface Props extends React.PropsWithChildren{
}

/**
 * Base for content component, to show project information
 *
 * @param children - internal component to show
 */
const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className={ styles.content}>
      { children }
    </div>
  );
};

export default Content;
