import React from "react";
import styles from "./Login.module.css"
import {Base} from "../../commons/layouts/auth/base/Base";
import Button, { ButtonStyle } from "../../commons/components/Button/Button";
import {Fieldset} from "../../commons/components/Fieldset/Fieldset";

export const Login: React.FC = () => {
  return (
      <Base>
        <Fieldset className={styles.fieldset} label={'email address'} type={'email'} name={'email'} placeholder={'name@best-team.com'} autocomplete={'email'}/>
        <Fieldset className={styles.fieldset} label={'password'} type={'password'} name={'password'} placeholder={'********'}/>
        <div className={styles.action}>
          <Button styleType={ButtonStyle.Submit}>
            Log in
          </Button>
          <a href={"/recover"}>Recover password</a>
        </div>
      </Base>
  );
}
