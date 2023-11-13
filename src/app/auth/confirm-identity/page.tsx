import React, { Fragment } from "react";
import { SendCodeToEmail } from "@/components/Auth/SendEmail";

const ConfirmIdentity = () => {
  return (
    <Fragment>
      <SendCodeToEmail />
    </Fragment>
  );
};

export default ConfirmIdentity;
