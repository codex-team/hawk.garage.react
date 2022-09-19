import React from 'react';
import styles from './Checkbox.module.css';
import Tick from '../../../assets/tick.svg?component'
import { noop } from "lodash";
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
}

/**
 * Checkbox component
 *
 * @param props - props of component
 */
const Checkbox: React.FC<Props> = ({ disabled, checked, onChange = noop, ...props }) => {

  const onClick = () => {
    if (disabled) {
      return;
    }
    onChange(!checked);
  }

  return (
    <div className={cn(styles.checkbox,
                      {
                        [styles.disabled]: disabled,
                      })}
         onClick={onClick}>
      <input type={'checkbox'}
             checked={checked}
             onClick={onClick}
             {...props}/>
      <Tick className={styles.icon}/>
    </div>
  );
};

export default Checkbox;
