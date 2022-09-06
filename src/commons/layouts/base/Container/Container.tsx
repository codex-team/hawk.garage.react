import React from "react";
import cn from "classnames";
import styles from './Container.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Container layout
 *
 * @param props - props of component
 */
const Container: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={ cn(styles.container)}>
      { props.children }
    </div>
  );
};

export default Container;
