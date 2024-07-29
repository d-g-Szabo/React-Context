"use client";
import { useContext } from "react";
import { CookieContext } from "@/context/CookieContext";

export default function StealCookies() {
  const { decrementCookies } = useContext(CookieContext);
  return <button onClick={decrementCookies}>Steal cookies</button>;
}
