"use client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export default function Error({ reset }) {
  return (
    <div>
      <h2>Something went wrong! Try logging in!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Click here to go back.
      </button>
    </div>
  );
}
