import React from 'react';
import styles from '@/commons/components/Checkbox/Checkbox.module.css';
import Tick from '@/assets/tick.svg?component';
import { noop } from 'lodash';
import cn from 'classnames';

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
  onChange?: ( state: boolean ) => void;

  /**
   * Classname for styling wrapper
   */
  className?: string;
}

/**
 * Checkbox component
 *
 * @param props - props of component
 */
const Checkbox: React.FC<Props> = ({ disabled, checked, onChange = noop, className, ...props }) => {
  const onClick = (): void => {
    onChange(!checked);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <input type={'checkbox'}
        className={styles.checkbox}
        checked={checked}
        onClick={onClick}
        disabled={disabled}
        {...props}/>
      <Tick className={styles.mark}/>
    </div>
  );
};

export default Checkbox;
