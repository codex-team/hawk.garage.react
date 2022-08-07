import React from 'react';
import styles from './Button.module.pcss';

/**
 * Button sizes
 */
export enum ButtonSize {
  General = 'general',
  Small = 'small'
}

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
   * Button style
   */
  styleType?: ButtonStyle | ButtonStyle.Submit,

  /**
   * Button size
   */
  buttonSize?: ButtonSize | ButtonSize.General,

  /**
   * Is button disabled
   */
  isDisabled?: boolean,

  /**
   * Is button loading
   */
  isLoading?: boolean,

  /**
   * Is button rounded
   */
  isRounded?: boolean,

  /**
   * Is button shacking
   */
  isShacking?: boolean,

  /**
   * Icon path for button
   */
  icon?: string,
}

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <button className={ `${styles.button} ${props.styleType ? styles[props.styleType] : ''}
                         ${props.buttonSize ? styles[props.buttonSize] : ''}
                         ${props.isRounded ? styles.rounded : ''}
                         ${props.isShacking ? styles.shacking : ''}
                         ${props.isDisabled ? styles.disabled : ''} 
                         ${props.isLoading ? styles.isLoading : ''}` }>
      { props.icon ?
        <img src={props.icon} className={styles.icon}/> : null
      }
      <div className={styles.text}>
        { props.children }
      </div>
    </button>
  );
};

export default Button;


