import React from "react";
import styles from './Content.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Content layout
 *
 * @param props - props of component
 */
const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className={ styles.content}>
      { children }
    </div>
  );
};

export default Content;
