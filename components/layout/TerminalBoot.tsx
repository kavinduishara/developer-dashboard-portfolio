"use client";

import { useEffect, useMemo, useState } from "react";

interface TerminalBootProps {
  children: React.ReactNode;
}

const command = "npm run open-portfolio";

const startupLines = [
  "initializing developer dashboard...",
  "loading projects, research, and experience...",
  "connecting interface modules...",
  "portfolio ready.",
];

export function TerminalBoot({ children }: TerminalBootProps) {
  const [typedCommand, setTypedCommand] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const progress = useMemo(() => {
    if (typedCommand !== command) {
      return 0;
    }

    const lineRatio = visibleLines / startupLines.length;

    return Math.min(100, Math.round(lineRatio * 100));
  }, [typedCommand, visibleLines]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTypedCommand(command);
      setVisibleLines(startupLines.length);
      setReady(true);
      const reducedTimer = window.setTimeout(() => setDismissed(true), 250);

      return () => window.clearTimeout(reducedTimer);
    }

    const timers: number[] = [];

    for (let index = 0; index <= command.length; index += 1) {
      timers.push(window.setTimeout(() => setTypedCommand(command.slice(0, index)), 180 + index * 54));
    }

    startupLines.forEach((_, index) => {
      timers.push(window.setTimeout(() => setVisibleLines(index + 1), 1750 + index * 460));
    });

    timers.push(window.setTimeout(() => setReady(true), 3900));
    timers.push(window.setTimeout(() => setDismissed(true), 4500));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <>
      <div
        className={[
          "transition-opacity duration-700",
          ready ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        {children}
      </div>

      {!dismissed ? (
        <div
          aria-live="polite"
          className={[
            "fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 px-6 text-slate-100 transition-opacity duration-700",
            ready ? "pointer-events-none opacity-0" : "opacity-100",
          ].join(" ")}
        >
          <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl shadow-cyan-950/30">
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-xs text-slate-500">portfolio.boot</span>
            </div>

            <div className="space-y-5 p-5 font-mono text-sm sm:p-7">
              <div>
                <p className="text-slate-500">kavindu@portfolio:~$</p>
                <p className="mt-2 min-h-6 text-cyan-300">
                  {typedCommand}
                  <span className="ml-1 inline-block h-5 w-2 translate-y-1 bg-cyan-300 animate-pulse" />
                </p>
              </div>

              <div className="min-h-28 space-y-2 text-slate-400">
                {startupLines.slice(0, visibleLines).map((line) => (
                  <p key={line}>
                    <span className="text-emerald-400">ok</span> {line}
                  </p>
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-600">
                  <span>boot progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-900">
                  <div className="h-full rounded-full bg-cyan-300 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
