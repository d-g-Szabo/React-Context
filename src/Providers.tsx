import React from "react";
import { CookieProvider } from "@/context/CookieContext";
import { UserProvider } from "@/context/UserContext";

// This is a wrapper component that will include all the providers from the useContext hooks and in the layout.tsx file I only need to include this Providers component

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <CookieProvider>
      <UserProvider>{children}</UserProvider>
    </CookieProvider>
  );
}

export default Providers;
