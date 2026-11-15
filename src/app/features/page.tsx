'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AudioLines,
  Languages,
  Sparkles,
  ShieldCheck,
  Zap,
  FileText,
  FileCheck,
  Download,
  Settings,
  Code2,
  ArrowUpRight,
} from 'lucide-react';
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

const FEATURES = [
  {
    icon: AudioLines,
    title: 'Speech Recognition',
    description: 'Convert audio and video recordings into editable text using advanced speech recognition.',
    details: ['Supports diverse audio formats', 'Real-time transcription', 'High accuracy with Whisper']
  },
  {
    icon: Languages,
    title: 'Multilingual Translation',
    description: 'Translate transcripts into multiple languages using powerful MT models.',
    details: ['MarianMT support', 'NLLB-200 models', 'Hugging Face integration']
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Summaries',
    description: 'Automatically generate concise summaries from long conversations.',
    details: ['Key point extraction', 'Action items detection', 'Succinct overviews']
  },
  {
    icon: FileText,
    title: 'Timestamped Output',
    description: 'Maintain precise timing information for easy navigation and reference.',
    details: ['Speaker identification', 'Time-synced segments', 'Export to multiple formats']
  },
  {
    icon: ShieldCheck,
    title: 'Data Security',
    description: 'Enterprise-grade security with privacy-first architecture.',
    details: ['End-to-end encryption', 'GDPR compliant', 'SOC2 ready']
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized workflows for rapid processing without sacrificing quality.',
    details: ['GPU acceleration', '并行处理', 'Low latency']
  },
  {
    icon: Download,
    title: 'Multiple Export Formats',
    description: 'Download outputs in your preferred format for seamless integration.',
    details: ['SRT', 'TXT', 'DOCX', 'JSON']
  },
  {
    icon: Settings,
    title: 'Customizable Pipeline',
    description: 'Flexible configuration for tailored transcription workflows.',
    details: ['Adjustable model parameters', 'Custom processing rules', 'API integration']
  },
];

const TECHNICAL_FEATURES = [
  {
    icon: Code2,
    title: 'Developer-Friendly',
    description: 'Clean APIs and comprehensive documentation for seamless integration.'
  },
  {
    icon: FileCheck,
    title: 'High Accuracy',
    description: 'Trainable models refined for specific use cases and domains.'
  },
  {
    icon: Download,
    title: 'Robust Export',
    description: 'Cross-platform export options for all formats.'
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-white/[0.1] bg-gradient-to-b from-[#101110] to-[#151715]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="max-w-[800px]">
              <p className="mb-4 flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-orange-500">
                <span className="h-1.5 w-1.5 bg-orange-500" />
                Powerful Features
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Everything you need to{' '}
                <span className="text-orange-500">transcribe</span> & transformat
              </h1>
              <p className="mb-8 text-lg text-neutral-400 leading-relaxed">
                Transform audio and video conversations into structured, actionable text.
                From transcription to translation and everything in between.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                >
                  Explore the product
                  <FileCheck size={16} />
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

        {/* Main Features Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="bg-[#151715]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <motion.div
              className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group border border-white/[0.1] bg-[#191c19] p-6 transition-colors hover:border-orange-500/40 hover:bg-[#1b1e1b]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mb-4 text-sm text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
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
        </motion.section>

        {/* Technical Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="bg-[#151715]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <motion.div
              className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {TECHNICAL_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={index} variants={itemVariants} className="flex gap-6">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="border-t border-white/[0.1] bg-[#151715]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to transform your{' '}
              <span className="text-orange-500">audio content</span>?
            </h2>
            <p className="mb-8 max-w-[600px] mx-auto text-neutral-400">
              Join thousands of users who rely on TranscriptoBot for accurate, efficient
              audio-to-text conversion.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-2 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                >
                  Try it now
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500/10"
                >
                  Read documentation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}