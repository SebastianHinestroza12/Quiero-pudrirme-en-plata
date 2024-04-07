import React, { Fragment } from "react";
import styles from "@/components/Auth/AuthNextGoogle/authGoogle.module.scss";
import { Icon } from "@iconify/react";
import { signIn, useSession } from "next-auth/react";

export const AuthNextGoogle = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Fragment>
      <div className={styles.container}>
        <button onClick={() => signIn()} className={styles.container_google}>
          <Icon icon="devicon:google" width="30" />
          <p>
            <b>Inicia sesión con Google</b>
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
