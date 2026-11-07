import { ArrowUp, ArrowUpRight, Play } from "lucide-react";
import { ClarityMark } from "@/components/clarity-mark";
import { Logo } from "@/components/logo";
import { navItems, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer nav:pl-[var(--rail-width)]">
      <div className="footer-orbit" aria-hidden="true">
        <svg viewBox="0 0 600 600" className="h-full w-full" fill="none">
          <circle
            cx="300"
            cy="300"
            r="298"
            stroke="#07212E"
            strokeOpacity="0.12"
            strokeWidth="0.8"
          />
          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="#0B709D"
            strokeOpacity="0.2"
            strokeWidth="0.8"
          />
          <circle
            cx="300"
            cy="300"
            r="204"
            stroke="#07212E"
            strokeOpacity="0.1"
            strokeWidth="0.7"
            strokeDasharray="1 8"
          />
          <circle
            cx="300"
            cy="300"
            r="120"
            stroke="#9A5700"
            strokeOpacity="0.22"
            strokeWidth="0.8"
          />
          <circle cx="300" cy="52" r="4" fill="#F4940E" />
        </svg>
      </div>

      <div className="shell relative z-10">
        <div className="footer-top">
          <a
            href="#home"
            className="footer-logo"
            aria-label="The Forensic Neuroscientist — back to top"
          >
            <Logo sizes="280px" className="h-auto w-full" />
          </a>
          <p className="footer-mark">
            <ClarityMark size={16} />
            Signal / Clarity
          </p>
        </div>

        <p className="footer-statement">
          The intersection of science, evidence &amp;{" "}
          <em>human understanding.</em>
        </p>

        <div className="footer-grid">
          <div>
            <p className="footer-col-title">Explore</p>
            <nav className="footer-nav" aria-label="Footer navigation">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer-col-title">Connect</p>
            <div className="footer-connect">
              <a
                href={site.youtube.channelUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Play size={11} strokeWidth={1.8} aria-hidden="true" />
                YouTube channel
                <ArrowUpRight size={12} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a href="#contact">
                Get in touch
                <ArrowUpRight size={12} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a href="#education">
                Education &amp; training
              </a>
              <a href="#consultation">Consultation</a>
            </div>
          </div>

          <div>
            <p className="footer-col-title">The practice</p>
            <p className="footer-note">
              An education, training and consultation practice making complex
              neuroscience accessible, relevant and useful.
            </p>
            <a href="#home" className="footer-back">
              <ArrowUp size={12} strokeWidth={1.8} aria-hidden="true" />
              Back to top
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="shell footer-bar__inner">
          <p>
            © {new Date().getFullYear()} The Forensic Neuroscientist. All rights
            reserved.
          </p>
          <p className="footer-bar__mark">
            Neuroscience / Forensic science / Human understanding
          </p>
        </div>
      </div>
    </footer>
  );
}
