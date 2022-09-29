import React from 'react';
import cn from 'classnames';
import styles from '@/commons/components/Text/Text.module.css';

interface Props<AsElement extends React.ElementType> {
  /**
   * Displaying value in the Text component
   */
  children?: React.ReactNode,

  /**
   * Class name for providing styles to the component
   */
  className?: string,

  /**
   * Font weight value
   */
  weight?: 'regular' | 'medium' | 'bold',

  /**
   * Font size value
   * Also changing line height for provided size
   */
  size?: 's' | 'm',

  /**
   * 'As' prop helps to use a semantic right tag in the Text component
   */
  as?: AsElement,

  /**
   * Type of typography to display
   */
  typography?: 'label',
}

type TextProps<AsElement extends React.ElementType> = Props<AsElement> & Omit<React.ComponentProps<AsElement>, keyof Props<AsElement>>;

export const Text = <AsElement extends React.ElementType = 'span'>({
  children,
  className,
  weight = 'regular',
  size = 's',
  as,
  typography,
  ...props
}: TextProps<AsElement>): React.ReactElement => {
  const Component = as || 'span';

  return (
    <Component
      className={cn(
        styles.default,
        styles[`weight-${weight}`],
        styles[`size-${size}`],
        {
          [styles[`typography-${typography}`]]: typography !== undefined,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
