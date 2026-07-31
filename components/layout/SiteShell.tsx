import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}