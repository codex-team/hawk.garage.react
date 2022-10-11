import React from 'react';
import { Text } from '@/commons/components/Text/Text';

interface LabelProps {
  /**
   * Displaying value in the Label component
   */
  children?: React.ReactNode,

  /**
   * Class name for providing styles to the component
   */
  className?: string,

  /**
   * Id of an element in a form that will be focused after click on this label
   */
  htmlFor?: string,
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <Text
      as="label"
      typography="label"
      {...props}
    >
      {children}
    </Text>
  );
};
