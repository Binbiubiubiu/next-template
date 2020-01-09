import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <Link href="/">asdf</Link>
      about page
    </div>
  );
}
