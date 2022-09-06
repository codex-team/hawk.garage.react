import React from "react";
import cn from "classnames";
import styles from './Aside.module.css'

interface Props extends React.PropsWithChildren{
}

/**
 * Aside layout
 *
 * @param props - props of component
 */
const Aside: React.FC<Props> = ({ ...props }) => {
  return (
    <aside className={ cn(styles.aside)}>
      { props.children }
    </aside>
  );
};

export default Aside;
