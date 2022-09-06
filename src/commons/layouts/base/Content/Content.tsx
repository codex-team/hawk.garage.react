import React from "react";
import cn from "classnames";
import styles from './Content.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Content layout
 *
 * @param props - props of component
 */
const Content: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={ cn(styles.content)}>
      { props.children }
    </div>
  );
};

export default Content;
