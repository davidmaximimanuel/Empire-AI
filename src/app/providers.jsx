"use client";
import { LogtoProvider } from "@logto/react";

export function Providers({ children }) {
  return (
    <LogtoProvider
      config={{
        endpoint: process.env.NEXT_PUBLIC_LOGTO_ENDPOINT,
        appId: process.env.NEXT_PUBLIC_LOGTO_APP_ID,
      }}
    >
      {children}
    </LogtoProvider>
  );
}