
import Link from 'next/link';
import {
  AudioLines,
  ShieldCheck,
  Cpu,
  Layers,
  SlidersHorizontal,
  Sparkles,
  Info,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';

const GITHUB_REPO_URL =
  'https://github.com/Asish8239/TranscriptoBot';

const TECH_STACK = [
  'Python 3.11',
  'Flask',
  'Flask-SocketIO',
  'Whisper',
  'faster-whisper',
  'MarianMT',
  'NLLB-200',
  'FFmpeg',
  'yt-dlp',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
];

const NAVIGATION_LINKS = [
  { href: '/', label: 'Home', icon: null },
  {
    href: '/features',
    label: 'Product Features',
    icon: SlidersHorizontal,
  },
  {
    href: '/how-it-works',
    label: 'How It Works',
    icon: Layers,
  },
  {
    href: '/showcase',
    label: 'Product Showcase',
    icon: Sparkles,
  },
];

const TECHNICAL_LINKS = [
  {
    href: '/architecture',
    label: 'System Architecture',
    icon: Cpu,
  },
  {
    href: '/about',
    label: 'About & Roadmap',
    icon: Info,
  },
  {
    href: '/docs',
    label: 'Documentation & FAQ',
    icon: BookOpen,
  },
  {
    href: '/docs#privacy',
    label: 'Privacy & Specifications',
    icon: ShieldCheck,
  },
];

function GitHubMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.58 10.58 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function FooterLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }> | null;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2.5 text-xs text-neutral-400 transition-colors hover:text-orange-400"
      >
        {Icon && (
          <Icon className="h-3.5 w-3.5 text-neutral-600 transition-colors group-hover:text-orange-500" />
        )}
        <span>{label}</span>
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.1] bg-[#101110] text-neutral-400">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-orange-500 text-black">
                <AudioLines size={19} />
              </div>

              <span className="text-xl font-semibold tracking-tight text-white">
                Transcripto
                <span className="text-orange-500">Bot</span>
              </span>
            </Link>

            <p className="max-w-sm text-xs leading-7 text-neutral-400 sm:text-sm">
              TranscriptoBot transforms audio and video conversations
              into text through speech recognition, language processing
              and media tools.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 text-[10px] font-medium text-neutral-300">
                <span className="h-1.5 w-1.5 bg-orange-500" />
                Project showcase
              </span>

              <span className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 text-[10px] text-neutral-400">
                <ShieldCheck size={12} className="text-neutral-500" />
                Standalone website
              </span>
            </div>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TranscriptoBot GitHub repository"
              className="inline-flex items-center gap-2 pt-2 text-xs text-neutral-300 transition-colors hover:text-orange-400"
            >
              <GitHubMark />
              View source on GitHub
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Navigation
            </h3>

            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((item) => (
                <FooterLink key={item.href} {...item} />
              ))}
            </ul>
          </div>

          {/* Technical documentation */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Project
            </h3>

            <ul className="space-y-4">
              {TECHNICAL_LINKS.map((item) => (
                <FooterLink key={item.href} {...item} />
              ))}
            </ul>
          </div>

          {/* Technology stack */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Technology
            </h3>

            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/[0.1] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-neutral-400 transition-colors hover:border-orange-500/40 hover:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.1] pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-neutral-500">
            © 2026 TranscriptoBot Showcase.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <span className="text-neutral-600">
              Speech recognition · Language processing
            </span>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-orange-400"
            >
              <GitHubMark />
              Repository
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
