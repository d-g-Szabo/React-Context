"use client";
import { createContext, useState } from "react";

// Create a new variable called cookie context
export const CookieContext = createContext<any>(null);

// Create our provider
export function CookieProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookies, setCookies] = useState(0);

  function incrementCookies() {
    setCookies(cookies + 1);
  }
  function decrementCookies() {
    setCookies(cookies - 1);
  }
  return (
    <CookieContext.Provider
      value={{ cookies, incrementCookies, decrementCookies }}
    >
      {children}
    </CookieContext.Provider>
  );
}
