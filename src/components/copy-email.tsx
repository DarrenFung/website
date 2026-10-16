"use client";

import { useState } from "react";
import { Check, Copy, WarningCircle } from "@phosphor-icons/react";

type Status = "idle" | "copied" | "error";

const labels: Record<Status, string> = {
  idle: "Copy address",
  copied: "Copied",
  error: "Copy failed",
};

/** Copies the email to the clipboard with visible success and failure states. */
export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch (error) {
      // Clipboard can be blocked (permissions, insecure context); the mailto link still works.
      console.error("Clipboard write failed", error);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 2000);
  }

  const Icon = status === "copied" ? Check : status === "error" ? WarningCircle : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 border border-line px-5 text-sm font-medium transition-[transform,border-color] duration-300 hover:border-fg active:translate-y-px active:scale-[0.98]"
    >
      <Icon size={16} weight="bold" aria-hidden />
      <span aria-live="polite">{labels[status]}</span>
    </button>
  );
}
