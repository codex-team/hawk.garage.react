import React from "react";
import styles from './Fieldset.module.css';
import {Label} from "../Label/Label";
import {Input} from "../Input/Input";
import cn from "classnames";

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
}

export const Fieldset: React.FC<Props> = ({placeholder, name, type, label, autocomplete, required, className}) => {
  return (
    <fieldset className={cn(styles.fieldset, className)}>
      <Label className={styles.label} for={name}>{ label }</Label>
      <Input type={type} autoComplete={autocomplete} name={name} className={styles.input} placeholder={placeholder} required={required}/>
    </fieldset>
  );
}
