import { UserAgent } from "./UserAgent";
import { Suspense } from "react";

async function FormPage({ data }: any) {
  return (
    <>
      <div>{data}</div>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Submit Form</h1>
        <form method="POST" action="/">
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Name
              <br />
              <input name="name" type="text" required defaultValue={"hello"} />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Email
              <br />
              <input name="email" type="email" required defaultValue={"h@h"} />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Message
              <br />
              <textarea name="message" rows={4} defaultValue={"msg"} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}

export default async function Page() {
  let stuff = (
    <Suspense>
      <UserAgent />
    </Suspense>
  );
  return (
    <div>
      <h1>Hello, Next.js!</h1>

      <FormPage data={stuff} />
    </div>
  );
}
