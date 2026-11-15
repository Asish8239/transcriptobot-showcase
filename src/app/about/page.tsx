'use client';

import Link from 'next/link';
import { ArrowRight, Users, Target, BookOpen, Heart, Star, Zap, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

const GITHUB_REPO_URL = 'https://github.com/Asish8239/TranscriptoBot';

const TEAM_VALUES = [
  {
    icon: Target,
    title: 'Mission',
    description: 'Democratize access to high-quality speech intelligence for developers and businesses worldwide.'
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'Privacy-first, developer-centric, open-source driven, and community-focused approach.'
  },
  {
    icon: Star,
    title: 'Vision',
    description: 'Become the leading platform for audio-to-text transformation with AI-powered insights.'
  }
];

const ROADMAP = [
  {
    phase: 'Phase 1 - Current',
    title: 'Core Platform',
    description: 'Launch transcription, translation, and summarization capabilities with Whisper and MarianMT integration.',
    items: ['Whisper transcription', 'Multi-language support', 'Basic export formats', 'Web dashboard']
  },
  {
    phase: 'Phase 2 - In Progress',
    title: 'Enhanced Intelligence',
    description: 'Add advanced AI features for deeper content understanding and analytics.',
    items: ['Sentiment analysis', 'Topic modeling', 'Speaker diarization', 'Real-time streaming']
  },
  {
    phase: 'Phase 3 - Planned',
    title: 'Enterprise Ready',
    description: 'Scale for enterprise adoption with advanced security, compliance, and integration features.',
    items: ['SSO/SAML', 'Audit logs', 'API rate limits', 'Custom models']
  }
];

const STATS = [
  { value: '50+', label: 'Languages Supported' },
  { value: '95%+', label: 'Accuracy Rate' },
  { value: '< 60s', label: 'Avg Processing Time' },
  { value: 'Open Source', label: 'License' }
];

export default function AboutPage() {
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
                About TranscriptoBot
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Building the future of{' '}
                <span className="text-orange-500">speech intelligence</span>
              </h1>
              <p className="mb-8 text-lg text-neutral-400 leading-relaxed">
                We're on a mission to make advanced speech recognition and AI-powered
                audio processing accessible to everyone. Built by developers, for developers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                >
                  View on GitHub
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-neutral-400 transition-colors hover:border-white/40 hover:text-white"
                >
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-t border-white/[0.1] bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Our guiding principles
              </h2>
              <p className="max-w-[600px] mx-auto text-neutral-400">
                These values drive every decision we make, from product design to
                community engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
              {TEAM_VALUES.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mb-4 flex h-14 w-14 mx-auto items-center justify-center bg-orange-500/10 text-orange-500 transition-colors hover:bg-orange-500 hover:text-black">
                      <Icon size={28} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                      {value.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="border-t border-white/[0.1] bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Product roadmap
              </h2>
              <p className="max-w-[600px] mx-auto text-neutral-400">
                Our transparent roadmap shows where we're headed. Community feedback
                shapes our priorities.
              </p>
            </div>
            <div className="space-y-8">
              {ROADMAP.map((phase, index) => (
                <div
                  key={index}
                  className="border border-white/[0.1] bg-[#191c19] p-8 transition-all hover:border-orange-500/40 hover:bg-[#1b1e1b]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-orange-500 uppercase tracking-[0.18em]">
                      {phase.phase}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${
                        index === 0 ? 'bg-green-500' : index === 1 ? 'bg-orange-500' : 'bg-neutral-600'
                      }`} />
                      <span className="text-xs text-neutral-400 capitalize">
                        {index === 0 ? 'released' : index === 1 ? 'in progress' : 'planned'}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
                    {phase.title}
                  </h3>
                  <p className="mb-4 text-neutral-400 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                        <span className="h-1 w-1 bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-white/[0.1] bg-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Want to contribute?
            </h2>
            <p className="mb-8 max-w-[600px] mx-auto text-neutral-400">
              TranscriptoBot is open source and community-driven. We welcome contributions,
              feedback, and ideas from developers worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
              >
                Contribute on GitHub
                <ArrowRight size={16} />
              </a>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500/10"
              >
                Read contributing guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}