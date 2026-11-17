import Socials from "./ui/Socials";
import { links } from "../data/navbar";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 pt-16 dark:border-white/10">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              MELVEN<span className="text-cyan-500">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-slate-500 dark:text-slate-400">
              Full-stack developer &amp; web designer building fast, modern websites.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`/#${id}`}
                    className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Socials />
        </div>

        <div className="mt-12 space-y-3 border-t border-slate-200 py-8 text-xs leading-relaxed text-slate-500 dark:border-white/10 dark:text-slate-500">
          <p>
            <span className="font-semibold">EN:</span> This website was developed by Melven Bagolaque. It cannot and
            should not be reproduced in any forms or by any means without the consent from him.
          </p>
          <p>
            <span className="font-semibold">FIL:</span> Ang website na ito ay ginawa ni Melven Bagolaque. Ito ay
            hindi maaaring at hindi dapat kopyahin sa anumang paraan o sa anumang anyo nang walang pahintulot mula sa
            kaniya.
          </p>
          <p className="pt-2">© {new Date().getFullYear()} Melven Bagolaque. All rights reserved.</p>
        </div>
      </div>

      {/* Giant outlined wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] select-none text-center font-display text-[22vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(100,116,139,0.25)]"
      >
        MELVEN
      </p>
    </footer>
  );
}
