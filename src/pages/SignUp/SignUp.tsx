import React from "react";
import styles from "@/pages/SignUp/SignUp.module.css";
import {Base} from "@/commons/layouts/auth/base/Base";
import Button, { ButtonStyle } from "@/commons/components/Button/Button";
import {Fieldset} from "@/commons/components/Fieldset/Fieldset";

export const SignUp: React.FC = () => {
  return (
    <Base>
      <Fieldset className={styles.fieldset} label={'Email address'} type={'email'} name={'email'} placeholder={'name@best-team.com'} autocomplete={'email'}/>
      <Button styleType={ButtonStyle.Submit}>
        Register
      </Button>
    </Base>
  );
}
