"use client";
import { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export function UserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [username, setUsername] = useState("bob");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
