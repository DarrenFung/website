"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";

// Must match the hidden skeleton form in public/__forms.html, which is what
// Netlify Forms registers at deploy time (it cannot see JS-rendered forms).
const FORM_NAME = "contact";

type Status = "idle" | "submitting" | "success" | "error";
type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("name") ?? "").trim()) errors.name = "Please add your name.";
  const email = String(data.get("email") ?? "").trim();
  if (!email) errors.email = "Please add your email so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "That email doesn't look right.";
  if (String(data.get("message") ?? "").trim().length < 10)
    errors.message = "A sentence or two about the problem helps me reply usefully.";
  return errors;
}

const inputClass =
  "w-full border border-line bg-bg px-4 py-3 text-base text-fg transition-colors placeholder:text-muted hover:border-muted focus:border-accent focus:outline-none aria-[invalid=true]:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      // Netlify Forms only accepts URL-encoded bodies posted to a static file.
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-surface p-8 md:p-10">
        <CheckCircle size={32} weight="light" className="text-accent" aria-hidden />
        <p className="mt-6 text-2xl font-semibold tracking-tight">Thanks, your message is on its way.</p>
        <p className="mt-3 leading-relaxed text-muted">I&rsquo;ll reply to the email you gave within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-accent underline underline-offset-4 hover:text-fg"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-sm text-accent">
        {errors[field]}
      </p>
    ) : null;

  const describedBy = (field: Field, hint?: string) =>
    [hint, errors[field] ? `${field}-error` : null].filter(Boolean).join(" ") || undefined;

  return (
    <form name={FORM_NAME} method="POST" noValidate onSubmit={handleSubmit} className="grid gap-6">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="subject" value="New enquiry from darrenfung.ca" />
      {/* Honeypot: hidden from people, bots that fill it are rejected by Netlify. */}
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
          />
          {fieldError("name")}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" className={inputClass} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          What are you working on?
        </label>
        <p id="message-hint" className="text-sm text-muted">
          The problem you&rsquo;re facing, then what you want to achieve.
        </p>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={`${inputClass} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message", "message-hint")}
        />
        {fieldError("message")}
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 text-sm text-accent">
          <WarningCircle size={18} weight="bold" className="mt-px shrink-0" aria-hidden />
          Something went wrong sending your message. Please try again in a moment.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-11 items-center justify-center gap-2 bg-accent px-6 text-sm font-medium whitespace-nowrap text-accent-fg transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-fg hover:text-bg active:translate-y-px active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          {status !== "submitting" && <ArrowRight size={16} weight="bold" aria-hidden />}
        </button>
      </div>
    </form>
  );
}
