"use client";
import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export default function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  return (
    <>
      {" "}
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        Change username to spongebob
      </button>
    </>
  );
}
