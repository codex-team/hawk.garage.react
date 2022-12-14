import React from 'react';
import styles from '@/commons/components/Fieldset/Fieldset.module.css';
import { Label } from '@/commons/components/Label/Label';
import { Input } from '@/commons/components/Input/Input';
import cn from 'classnames';

interface Props {
  /**
   * Input placeholder
   */
  placeholder?: string;

  /**
   * Label for input
   */
  label: string;

  /**
   * Input type
   */
  type: string;

  /**
   * Input name
   */
  name: string;

  /**
   * Input autocomplete option
   */
  autocomplete?: string;

  /**
   * Is input required
   */
  required?: boolean;

  /**
   * Classname to style fieldset
   */
  className?: string;

  value?: string;

  onChange?: (newValue: string) => void;
}

export const Fieldset: React.FC<Props> = ({ placeholder, name, type, label, autocomplete, required, className, value, onChange }) => {
  return (
    <fieldset className={cn(styles.fieldset, className)}>
      <Label className={styles.label} htmlFor={name}>{ label }</Label>
      <Input
        type={type}
        autoComplete={autocomplete}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};
