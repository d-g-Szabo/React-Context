"use client";
import { useContext, useState } from "react";
import { CookieContext } from "@/context/CookieContext";

export default function Button() {
  const { cookies, incrementCookies } = useContext(CookieContext);
  return (
    <button onClick={incrementCookies}>Give moar cookies: {cookies}</button>
  );
}
