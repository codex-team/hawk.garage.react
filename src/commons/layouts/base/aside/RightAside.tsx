import React from "react";
import cn from "classnames";
import styles from './Aside.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Right aside layout
 *
 * @param props - props of component
 */
const RightAside: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={ cn(styles.right)}>
      { props.children }
    </div>
  );
};

export default RightAside;
