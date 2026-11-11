
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AudioLines,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  BookOpen,
  Info,
  SlidersHorizontal,
} from 'lucide-react';

const GITHUB_REPO_URL =
  'https://github.com/Asish8239/TranscriptoBot';

const NAV_ITEMS = [
  { href: '/features', label: 'Features', icon: SlidersHorizontal },
  { href: '/how-it-works', label: 'How It Works', icon: Layers },
  { href: '/showcase', label: 'Product Showcase', icon: Sparkles },
  { href: '/architecture', label: 'Architecture', icon: Cpu },
  { href: '/about', label: 'About', icon: Info },
  { href: '/docs', label: 'Docs & FAQ', icon: BookOpen },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/[0.12] bg-[#101110]/95 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-white/[0.08] bg-[#101110]/85 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex h-[72px] items-center justify-between">

          {/* Brand */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
            aria-label="TranscriptoBot Home"
          >
            <div className="flex h-9 w-9 items-center justify-center bg-orange-500 text-black transition-colors group-hover:bg-orange-400">
              <AudioLines size={20} strokeWidth={2.2} />
            </div>

            <div className="flex flex-col">
              <span className="text-[17px] font-semibold tracking-tight text-white">
                Transcripto
                <span className="text-orange-500">Bot</span>
              </span>

              <span className="-mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                Speech intelligence
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative py-2 text-[12px] font-medium transition-colors ${
                    active
                      ? 'text-orange-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}

                  {active && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-orange-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-neutral-400 transition-colors hover:text-white"
              aria-label="View TranscriptoBot on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.58 10.58 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 bg-orange-500 px-4 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-orange-400"
            >
              Explore product
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.1] bg-[#101110] px-5 py-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-2">
            <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              Navigation
            </p>

            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-3 px-3 py-3 text-sm transition-colors ${
                    active
                      ? 'bg-orange-500/10 text-orange-400'
                      : 'text-neutral-400 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}

                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 bg-orange-500" />
                  )}
                </Link>
              );
            })}

            <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.1] pt-5">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-3 text-sm text-neutral-300 hover:text-white"
              >
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
                View GitHub repository
                <ArrowUpRight size={14} className="ml-auto" />
              </a>

              <Link
                href="/showcase"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
              >
                Explore product
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
