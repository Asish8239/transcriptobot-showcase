'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Play, Download, Code2, ShieldCheck, Settings, Cpu } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

const GITHUB_REPO_URL = 'https://github.com/Asish8239/TranscriptoBot';

const STEPS = [
  {
    number: '01',
    title: 'Upload Your Media',
    description:
      'Upload audio or video files, paste YouTube URLs, or connect your existing media library.',
    icon: Play,
    features: ['MP3, MP4, WAV support', 'YouTube & URL input', 'Drag & drop interface']
  },
  {
    number: '02',
    title: 'Choose Processing Options',
    description:
      'Select transcription models, language settings, and export preferences tailored to your needs.',
    icon: Settings,
    features: ['Whisper model options', 'Language selection', 'Speaker identification']
  },
  {
    number: '03',
    title: 'AI Processing',
    description:
      'Advanced AI models process your media with high accuracy, generating accurate transcripts.',
    icon: Cpu,
    features: ['GPU-accelerated', 'Parallel processing', 'Real-time updates']
  },
  {
    number: '04',
    title: 'Review & Export',
    description:
      'Review the transcript with timestamps, apply translations, and export in your preferred format.',
    icon: Download,
    features: ['Synced segments', 'Translation support', 'SRT, TXT, DOCX export']
  }
];

const HOW_IT_WORKS_SUMMARY = [
  {
    icon: CheckCircle2,
    title: 'Fast Processing',
    description: 'Get results in minutes, not hours. GPU-accelerated workflows deliver rapid results.'
  },
  {
    icon: Code2,
    title: 'Developer-Friendly',
    description: 'Clean APIs and SDKs for seamless integration into your existing applications.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    description: 'Enterprise-grade Security ensures your data remains protected throughout.'
  }
];

export default function HowItWorksPage() {
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
                How It Works
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Transform audio to text in <span className="text-orange-500">4 simple steps</span>
              </h1>
              <p className="mb-8 text-lg text-neutral-400 leading-relaxed">
                Get accurate, timestamped transcripts with AI-powered translation and
                summarization. From upload to export in minutes.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                >
                  See it in action
                  <ArrowRight size={16} />
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

        {/* Steps Section */}
        <section className="bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="space-y-12">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative grid grid-cols-1 gap-8 md:grid-cols-5"
                  >
                    {/* Step Number */}
                    <div className="md:col-span-1">
                      <div className="flex items-center justify-center md:justify-start">
                        <div className="relative">
                          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-black">
                            {step.number}
                          </div>
                          {index < STEPS.length - 1 && (
                            <div className="absolute top-16 left-1/2 hidden -translate-x-1/2 lg:flex h-12 w-[2px] bg-orange-500" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="md:col-span-4">
                      <div className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                        <Icon size={24} />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mb-4 text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                            <CheckCircle2 size={14} className="text-orange-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="border-t border-white/[0.1] bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
              {HOW_IT_WORKS_SUMMARY.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#191c19] text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}