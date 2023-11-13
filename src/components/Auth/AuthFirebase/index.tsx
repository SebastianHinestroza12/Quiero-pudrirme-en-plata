import React, { Fragment } from "react";
import styles from "@/components/Auth/AuthFirebase/authFirebase.module.scss";
import { Icon } from "@iconify/react";
export const AuthFirebase = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <button className={styles.container_google}>
          <Icon icon="devicon:google" width="30" />
          <p>
            <b>Inicia sesión con Google</b>
          </p>
        </button>
        <button className={styles.container_facebook}>
          <Icon icon="logos:facebook" width="30" />
          <p>
            <b>Inicia sesión con Facebook</b>
          </p>
        </button>
        <button className={styles.container_gues}>
          <p>
            <b>Ingresar como Invitado</b>
          </p>
        </button>
      </div>
    </Fragment>
  );
};
