"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const ProviderSession = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
