'use client';

import Link from 'next/link';
import {
  Cpu,
  Box,
  Database,
  Globe,
  Settings,
  Code2,
  Layers,
  Server,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

const GITHUB_REPO_URL = 'https://github.com/Asish8239/TranscriptoBot';

const ARCHITECTURE_LEVELS = [
  {
    icon: Cpu,
    title: 'Application Layer',
    description: 'Next.js-based web interface with client-side processing and API communication.',
    components: ['Dashboard', 'File Upload', 'Transcript Viewer', 'Export Options']
  },
  {
    icon: Box,
    title: 'Backend Layer',
    description: 'Flask Python application handling request routing and business logic.',
    components: ['API Gateway', 'AuthService', 'Queue Manager', 'Metrics Collector']
  },
  {
    icon: Database,
    title: 'ML Models Layer',
    description: 'AI models for transcription, translation, and summarization tasks.',
    components: ['Whisper (Transcription)', 'MarianMT (Translation)', 'Summarization Model']
  },
  {
    icon: Globe,
    title: 'Infrastructure Layer',
    description: 'Cloud-native infrastructure ensuring scalability and reliability.',
    components: ['GPU Instances', 'Object Storage', 'CDN', 'Load Balancer']
  }
];

const KEY_TECH = [
  { name: 'Next.js 14', type: 'Framework' },
  { name: 'TypeScript', type: 'Language' },
  { name: 'Flask', type: 'Python Backend' },
  { name: 'Whisper', type: 'AI Model' },
  { name: 'MarianMT', type: 'Translation Ops' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'Redis', type: 'Cache' },
  { name: 'Docker', type: 'Containerization' }
];

export default function ArchitecturePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-white/[0.1] bg-gradient-to-b from-[#101110] to-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="mx-auto max-w-[800px]">
              <p className="mb-4 flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-orange-500">
                <span className="h-1.5 w-1.5 bg-orange-500" />
                System Architecture
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Scalable, modern{' '}
                <span className="text-orange-500">AI-powered</span> infrastructure
              </h1>
              <p className="mb-8 text-lg text-neutral-400 leading-relaxed">
                Built with microservices architecture and cutting-edge AI models. From
                frontend to ML inference, every component is designed for performance
                and scalability.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-neutral-400 transition-colors hover:border-white/40 hover:text-white"
                >
                  View technical docs
                  <Code2 size={16} />
                </Link>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.58 10.58 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Layers */}
        <section className="bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {ARCHITECTURE_LEVELS.map((level) => {
                const Icon = level.icon;
                return (
                  <div
                    key={level.title}
                    className="border border-white/[0.1] bg-[#191c19] p-8 transition-all hover:border-orange-500/40 hover:bg-[#1b1e1b]"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center bg-orange-500/10 text-orange-500 transition-colors hover:bg-orange-500 hover:text-black">
                      <Icon size={28} />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
                      {level.title}
                    </h3>
                    <p className="mb-4 text-sm text-neutral-400 leading-relaxed">
                      {level.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {level.components.map((component, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-neutral-500"
                        >
                          <span className="h-1 w-1 bg-orange-500" />
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-t border-white/[0.1] bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Technology stack
              </h2>
              <p className="max-w-[600px] mx-auto text-neutral-400">
                A carefully chosen tech stack to ensure performance, scalability,
                and maintainability.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {KEY_TECH.map((tech) => (
                <div
                  key={tech.name}
                  className="border border-white/[0.1] bg-[#191c19] px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/40 hover:text-white"
                >
                  {tech.name} <span className="text-xs text-neutral-600">({tech.type})</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}