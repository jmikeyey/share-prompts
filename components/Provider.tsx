"use client";
import { SessionProvider } from "next-auth/react";

const Provider = (props: any) => {
  const { children, session } = props;
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
