import React from 'react';
import cn from 'classnames';
import styles from '@/commons/components/Button/Button.module.css';

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

  /**
   * Type of action of the button
   */
  type?: 'submit' | 'reset' | 'button' | undefined;
}

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ disabled, loading, shacking, small, children, onClick, icon, styleType, ...props }) => {
  return (
    <button
      className={
        cn(styles.button,
          styles[styleType || 'secondary'],
          {
            [styles.small]: small,
            [styles.shacking]: shacking,
            [styles.disabled]: disabled,
            [styles.loading]: loading,
          }
        )}
      onClick={onClick}
      {...props}
    >
      { icon ?
        icon : ''
      }
      { children }
    </button>
  );
};

export default Button;


