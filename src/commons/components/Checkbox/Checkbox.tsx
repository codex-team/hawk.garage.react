import React, {useEffect} from 'react';
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
  const [checkedState, setChecked] = React.useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked])

  return (
    <input type={'checkbox'}
           className={styles.checkbox}
           onClick={() => {
             setChecked(!checkedState);
             onClick ? onClick(): null;
           }}
           checked={checkedState}
           disabled={disabled}>
    </input>
  );
};

export default Checkbox;
