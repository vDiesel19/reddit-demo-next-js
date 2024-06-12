'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <div>From client: user is signed as {session.user?.email}</div>
  }

  return <div>From client: user is NOT signed in</div>
}