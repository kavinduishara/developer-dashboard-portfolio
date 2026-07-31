"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { FadeIn } from "../motion/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | "idle"; message: string }>({ type: "idle", message: "" });

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in all fields before sending your message." });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      setStatus({ type: "success", message: "Thanks for reaching out. I will get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Unable to send message right now." });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <FadeIn className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Let’s build something meaningful together" description="Available for freelance work, internships, and collaborative product development." />
            <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <a href="mailto:kavinduishara2923@gmail.com" className="flex items-center gap-3 transition hover:text-cyan-600">
                <FiMail /> <span>kavinduishara2923@gmail.com</span>
              </a>
              <a href="tel:+94785198734" className="flex items-center gap-3 transition hover:text-cyan-600">
                <FiPhone /> <span>+94 785 198 734</span>
              </a>
              <a href="https://github.com/kavinduishara" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan-600">
                <FiGithub /> <span>github.com/kavinduishara</span>
              </a>
              <a href="https://www.linkedin.com/in/kavindu-rathnayaka-b1b201416/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan-600">
                <FiLinkedin /> <span>linkedin.com/in/kavindu-rathnayaka-b1b201416</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={(event) => handleChange("name", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={(event) => handleChange("email", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="message">Message</label>
              <textarea id="message" value={form.message} onChange={(event) => handleChange("message", event.target.value)} rows={5} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Tell me about your idea or project." />
            </div>
            <button type="submit" className="rounded-full bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500">
              Send Message
            </button>
            {status.type !== "idle" ? <p className={`text-sm ${status.type === "success" ? "text-emerald-600" : "text-rose-600"}`}>{status.message}</p> : null}
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
