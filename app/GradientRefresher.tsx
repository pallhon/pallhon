"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function GradientRefresher() {
  const router = useRouter();

  useEffect(() => {
    function scheduleRefresh() {
      const expiry = Number(document.body.dataset.gradientExpiry);
      const delay = Math.max(expiry - Date.now(), 0);
      return setTimeout(() => router.refresh(), delay);
    }

    let timer = scheduleRefresh();

    function onVisibilityChange() {
      if (document.visibilityState === "visible") {
        clearTimeout(timer);
        const expiry = Number(document.body.dataset.gradientExpiry);
        if (Date.now() >= expiry) {
          router.refresh();
        } else {
          timer = scheduleRefresh();
        }
      }
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [router]);

  return null;
}
