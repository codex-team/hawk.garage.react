import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

export interface InputProps {
    size?: 's' | 'm' | 'l';
    iconLeft?: React.ReactNode;
    className: string;
    containerClassName?: string;
}

export const Input: React.FC<InputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
    size = 'm',
    iconLeft,
    className,
    containerClassName,
    ...props
}) => {
    console.log(styles);
    return (
        <span className={cn(styles.container, containerClassName)}>
            <span className={styles.iconLeft}>
                {Boolean(iconLeft) && iconLeft}
            </span>
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