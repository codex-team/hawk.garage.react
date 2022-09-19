import React from 'react';
import styles from './Checkbox.module.css';
import Tick from '../../../assets/tick.svg?component'
import { noop } from "lodash";

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

  const onClick =  () => {
    onChange(!checked);
  }

  return (
    <div className={styles.wrapper}>
    <input type={'checkbox'}
           className={styles.checkbox}
           onClick={onClick}
           checked={checked}
           disabled={disabled}
           id={'cb'}
           {...props}/>
      <label htmlFor={'cb'}>
        <div className={styles.mark}>
          <Tick/>
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
