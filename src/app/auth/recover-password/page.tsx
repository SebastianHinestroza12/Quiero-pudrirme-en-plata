import React, { Fragment } from "react";
import { RecoverPassword } from "@/components/RecoverPassword";
import { StyledEngineProvider } from "@mui/material/styles";

const RouteRecoverPassword = () => {
  return (
    <Fragment>
      <StyledEngineProvider injectFirst>
        <RecoverPassword />
      </StyledEngineProvider>
    </Fragment>
  );
};

export default RouteRecoverPassword;
