import React from "react";
import cn from 'classnames';
import styles from './Text.module.css';

interface Props<AsElement extends React.ElementType> {
  children?: React.ReactNode,
  className?: string,

  weight?: 'regular' | 'medium' | 'bold',
  size?: 's' | 'm',

  as?: AsElement,
}

type TextProps<AsElement extends React.ElementType> = Props<AsElement> & Omit<React.ComponentProps<AsElement>, keyof Props<AsElement>>;

export const Text = <AsElement extends React.ElementType = 'span'>({
  children,
  className,
  weight = 'regular',
  size = 's',
  as,
  ...props
}: TextProps<AsElement>) => {
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
