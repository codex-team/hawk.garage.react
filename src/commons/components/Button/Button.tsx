import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

/**
 * Button styles
 */
export enum ButtonStyle {
  Submit = 'submit',
  Warning = 'warning',
  Secondary = 'secondary',
}

interface Props extends React.ButtonHTMLAttributes<React.PropsWithChildren>{
  /**
   * Button type
   */
  styleType?: ButtonStyle,

  /**
   * Is button small
   */
  small?: boolean;

  /**
   * Is button disabled
   */
  disabled?: boolean,

  /**
   * Is button loading
   */
  loading?: boolean,

  /**
   * Is button shacking
   */
  shacking?: boolean,

  /**
   * Icon component for button
   */
  icon?: React.ReactNode,
}

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ disabled, loading, shacking, small, ...props }) => {
  return (
    <button className={ cn(styles.button, styles[props.styleType || 'secondary'],
                         small ? styles.small : '',
                         shacking ? styles.shacking : '',
                         disabled ? styles.disabled : '',
                         loading ? styles.loading : '')}>
      { props.icon ?
        props.icon : ''
      }
      { props.children }
    </button>
  );
};

export default Button;


