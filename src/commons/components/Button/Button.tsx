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

interface Props {
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

  /**
   * Internal Button component
   */
  children?: React.ReactNode,

  /**
   * Callback function
   */
  onClick?: () => void;
}

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ disabled, loading, shacking, small, children, onClick, icon,...props }) => {
  return (
    <button className={ cn(styles.button,
                           styles[props.styleType || 'secondary'],
                           {
                             [styles.small]: small,
                             [styles.shacking]: shacking,
                             [styles.disabled]: disabled,
                             [styles.loading]: loading
                           }
                           )} onClick={onClick}>
      { icon ?
        icon : ''
      }
      { children }
    </button>
  );
};

export default Button;


