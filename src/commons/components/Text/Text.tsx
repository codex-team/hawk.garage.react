import React from "react";
import cn from 'classnames';
import styles from './Text.module.css';

interface Props<C extends React.ElementType> {
  children?: React.ReactNode,
  className?: string,

  weight?: 'regular' | 'medium' | 'bold',
  size?: 's' | 'm',

  as?: C,
}

type TextProps<E extends React.ElementType> = Props<E> & Omit<React.ComponentProps<E>, keyof Props<E>>;

export const Text = <C extends React.ElementType = 'span'>({
  children,
  className,
  weight = 'regular',
  size = 's',
  as,
  ...props
}: TextProps<C>) => {
  const Component = as || 'span';

  return (
    <Component
      className={cn(
        styles.default,
        styles[`weight-${weight}`],
        styles[`size-${size}`],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
