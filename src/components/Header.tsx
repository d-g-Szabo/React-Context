"use client";

import Button from "@/components/Button";
import { useContext } from "react";
import { CookieContext } from "@/context/CookieContext";

export default function Header() {
  const { cookies } = useContext(CookieContext);

  return (
    <header>
      <h1>Cookies are fun</h1>
      <p>You have {cookies} cookies</p>
    </header>
  );
}
