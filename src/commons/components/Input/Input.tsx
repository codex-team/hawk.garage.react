import React from 'react';
import styles from '@/commons/components/Input/Input.module.css';
import cn from 'classnames';
import { noop } from 'lodash';

export interface InputProps {
    size?: 's' | 'm' | 'l';
    iconLeft?: React.ReactNode;
    className: string;
    containerClassName?: string;
    onChange?: (newValue: string) => void;
}

type PropsWithHTMLInput = InputProps & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'>;

export const Input: React.FC<PropsWithHTMLInput> = ({
  size = 'm',
  iconLeft,
  className,
  containerClassName,
  onChange = noop,
  ...props
}) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <span className={cn(styles.container, containerClassName)}>
      {Boolean(iconLeft) &&
              <span className={styles.iconLeft}>
                {iconLeft}
              </span>
      }
      <input
        className={cn(
          styles.input,
          styles[`size-${size}`],
          {
            [styles.inputWithIconLeft]: Boolean(iconLeft),
          },
          className
        )}
        onChange={changeHandler}
        {...props}
      />
    </span>
  );
};
