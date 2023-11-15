"use client";

import { useEffect } from "react";

export default function FocusVisible() {
  useEffect(() => {
    // @ts-ignore
    import("focus-visible");
  }, []);

  return null;
}
