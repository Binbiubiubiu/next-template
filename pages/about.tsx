import React from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/?counter=10", "/about", { shadow: true });
        }}
      >
        test
      </button>
      about page
    </div>
  );
}
