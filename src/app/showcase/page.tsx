'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileAudio, Languages, Subtitles, Save, Brain, CheckCircle2, Zap, Globe, FileText, Volume2, ShieldCheck, Cpu } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

const GITHUB_REPO_URL = 'https://github.com/Asish8239/TranscriptoBot';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
} as const;

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
} as const;

interface ShowcaseItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  details: string[];
  color: string;
  hoverColor: string;
  bgColor: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    icon: FileAudio,
    title: 'Audio Transcription',
    description: 'Upload any audio or video file and get accurate, timestamped transcripts.',
    details: ['Whisper integration', 'Multiple language support', 'Speaker identification'],
    color: 'text-blue-400',
    hoverColor: 'hover:bg-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Languages,
    title: 'Translation Pipeline',
    description: 'Translate transcripts into multiple languages with high quality.',
    details: ['MarianMT models', 'NLLB-200 support', 'Context-aware translation'],
    color: 'text-green-400',
    hoverColor: 'hover:bg-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Subtitles,
    title: 'Subtitle Generation',
    description: 'Generate perfect subtitles for videos with exact timing sync.',
    details: ['SRT format', 'Automatic line breaks', 'Custom styling'],
    color: 'text-purple-400',
    hoverColor: 'hover:bg-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Sparkles,
    title: 'AI Summaries',
    description: 'Transform long conversations into concise, actionable summaries.',
    details: ['Key points extraction', 'Action items detection', 'Theme analysis'],
    color: 'text-orange-400',
    hoverColor: 'hover:bg-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Save,
    title: 'Export Options',
    description: 'Download your transcripts in multiple formats for compatibility.',
    details: ['TXT, DOCX, SRT', 'JSON API support', 'Bulk export'],
    color: 'text-cyan-400',
    hoverColor: 'hover:bg-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: Brain,
    title: 'Smart Indexing',
    description: 'Searchable transcripts with powerful keyword and phrase matching.',
    details: ['Text indexing', 'Speaker search', 'Time-based navigation'],
    color: 'text-pink-400',
    hoverColor: 'hover:bg-pink-500',
    bgColor: 'bg-pink-500/10',
  },
];

const STATS = [
  { value: '99.2%', label: 'Transcription Accuracy', icon: CheckCircle2, color: 'text-green-400' },
  { value: '100+', label: 'Languages Supported', icon: Globe, color: 'text-blue-400' },
  { value: '< 30s', label: 'Avg Processing Time', icon: Zap, color: 'text-orange-400' },
  { value: '5+', label: 'Export Formats', icon: FileText, color: 'text-purple-400' },
];

const TECH_STACK = [
  { name: 'faster-whisper', category: 'ASR Engine', icon: Cpu },
  { name: 'MarianMT', category: 'Translation', icon: Languages },
  { name: 'NLLB-200', category: 'Multilingual', icon: Globe },
  { name: 'FFmpeg', category: 'Media Processing', icon: Volume2 },
  { name: 'yt-dlp', category: 'URL Ingestion', icon: Globe },
  { name: 'Silero VAD', category: 'Voice Activity', icon: Volume2 },
  { name: 'PyAnnote', category: 'Diarization', icon: ShieldCheck },
  { name: 'Transformers', category: 'NLP Pipeline', icon: Brain },
];

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'intelligence' | 'io'>('all');

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'core', label: 'Core Features' },
    { id: 'intelligence', label: 'AI Intelligence' },
    { id: 'io', label: 'Input/Output' },
  ];

  const filteredItems = SHOWCASE_ITEMS.filter((_, index) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'core') return index < 3;
    if (activeCategory === 'intelligence') return index >= 3 && index < 5;
    if (activeCategory === 'io') return index >= 5;
    return true;
  });

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
                Product Showcase
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Powerful features powered by{' '}
                <span className="text-orange-500">advanced AI</span>
              </h1>
              <p className="mb-8 text-lg text-neutral-400 leading-relaxed">
                A complete suite of tools for audio transcription, translation, and
                summarization. Built by developers, for developers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                >
                  Start transcribing
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-neutral-400 transition-colors hover:border-white/40 hover:text-white"
                >
                  View documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#151715] py-16">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <motion.div
              className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={index} variants={itemVariants} className="text-center">
                    <div className="mb-2 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="mb-1 text-3xl font-bold text-white md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="bg-[#151715] py-12 border-t border-white/[0.1]"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as typeof activeCategory)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-black'
                      : 'bg-[#191c19] text-neutral-400 hover:text-white hover:border-orange-500/40 border border-white/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Feature Grid */}
        <section className="bg-[#151715] py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <motion.div
              className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {filteredItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`group border border-white/[0.1] bg-[#191c19] p-8 transition-all duration-300 hover:border-orange-500/40 hover:bg-[#1b1e1b] ${item.bgColor}`}
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-colors group-hover:bg-orange-500 group-hover:text-black">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${item.bgColor} ${item.hoverColor} ${item.color} transition-colors`}>
                        <Icon size={32} />
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                          <span className="h-1 w-1 bg-orange-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-t border-white/[0.1] bg-[#151715] py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-center mb-12"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Powered by cutting-edge technology
              </h2>
              <p className="max-w-[600px] mx-auto text-neutral-400">
                Built with established open-source tools and modern AI models for reliable, scalable performance.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {TECH_STACK.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="group flex items-center gap-3 border border-white/[0.1] bg-[#191c19] px-4 py-3 text-sm transition-all hover:border-orange-500/40 hover:bg-[#1b1e1b]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-200">{tech.name}</p>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wide">{tech.category}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-white/[0.1] bg-[#151715] py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to see{' '}
              <span className="text-orange-500">it for yourself</span>?
            </h2>
            <p className="mb-8 max-w-[600px] mx-auto text-neutral-400">
              Experience the power of AI-powered transcription and transform your audio content
              into actionable insights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500/10"
              >
                Read documentation
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
        </section>
      </main>
      <Footer />
    </>
  );
}