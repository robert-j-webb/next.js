import * as neHead from "next/headers";
import { Suspense } from "react";

async function HeaderStuff() {
  const dd = await neHead.headers();
  return <p> {dd}</p>;
}

export function UserAgent() {
  return (
    <Suspense>
      <HeaderStuff />
    </Suspense>
  );
}
