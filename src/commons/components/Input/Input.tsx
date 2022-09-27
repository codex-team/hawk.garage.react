import React from 'react';
import styles from '@/commons/components/Input/Input.module.css';
import cn from 'classnames';

export interface InputProps {
    size?: 's' | 'm' | 'l';
    iconLeft?: React.ReactNode;
    className: string;
    containerClassName?: string;
}

type PropsWithHTMLInput = InputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: React.FC<PropsWithHTMLInput> = ({
    size = 'm',
    iconLeft,
    className,
    containerClassName,
    ...props
}) => {
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
                    className,
                )}
                {...props}
            />
        </span>
    )
}
