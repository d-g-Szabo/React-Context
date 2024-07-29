import React, { useContext } from "react";
import { UserContext, UserProvider } from "@/context/UserContext";
import UserPage from "@/components/UserPage";

export default function UserPagePage() {
  return (
    <>
      <UserPage />
    </>
  );
}
