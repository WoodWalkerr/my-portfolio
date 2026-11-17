import { useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Reveal from "../components/ui/Reveal";
import Socials from "../components/ui/Socials";
import { FiAlertCircle, FiCheck, FiSend } from "../components/ui/icons";

const SERVICE_ID = "service_hv6vsm6";
const TEMPLATE_ID = "template_pyd2l1k";
const PUBLIC_KEY = "475dUTU2teTf8fxII";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // EmailJS is only downloaded when someone actually sends a message
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      form.current.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="card relative overflow-hidden p-6 sm:p-12">
          <div aria-hidden="true" className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.25),transparent)]" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent)]" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
                  <span className="text-slate-400 dark:text-slate-500">08</span>
                  <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
                  Contact
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                  Let&apos;s work <span className="text-gradient accent">together.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Have a project in mind, need a website refresh, or just want to say hi? Send me a message and
                  I&apos;ll get back to you.
                </p>
              </Reveal>
              <Reveal delay={0.24} className="mt-8">
                <Socials />
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
                    <input name="user_name" required autoComplete="name" placeholder="Jane Doe" className="input" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                    <input
                      type="email"
                      name="user_email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="input"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                    className="input resize-none"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-70">
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message <FiSend />
                      </>
                    )}
                  </button>
                  <AnimatePresence>
                    {(status === "sent" || status === "error") && (
                      <m.p
                        role="status"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className={`flex items-center gap-2 text-sm font-medium ${
                          status === "sent" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                        }`}
                      >
                        {status === "sent" ? <FiCheck /> : <FiAlertCircle />}
                        {status === "sent"
                          ? "Message sent — thank you!"
                          : "Something went wrong. Please try again."}
                      </m.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
