import React from 'react';
import cn from 'classnames';
import styles from './Checkbox.module.css';

interface Props {

  /**
   * Is checkbox checked
   */
  checked?: boolean;

  /**
   * Is checkbox disabled
   */
  disabled?: boolean,

  /**
   * Callback function for checked checkbox
   */
  onClick?: () => void;
}

/**
 * Checkbox component
 *
 * @param props - props of component
 */
const Checkbox: React.FC<Props> = ({ disabled, checked, onClick,...props }) => {
  return (
    <input type={'checkbox'} className={ cn(styles.checkbox,
      {
        [styles.disabled]: disabled,
      }
    )} onClick={onClick} checked={checked} disabled={disabled}>
    </input>
  );
};

export default Checkbox;
