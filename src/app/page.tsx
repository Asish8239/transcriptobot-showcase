'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Check,
  ChevronRight,
  FileAudio,
  FileText,
  Languages,
  ListChecks,
  Mic2,
  Play,
  ShieldCheck,
  Sparkles,
  Subtitles,
  Volume2,
  Zap,
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

type DemoTab = 'transcript' | 'translation' | 'summary';

const demoTabs: { id: DemoTab; label: string }[] = [
  { id: 'transcript', label: 'Transcript' },
  { id: 'translation', label: 'Translation' },
  { id: 'summary', label: 'Summary' },
];

const transcriptLines = [
  {
    time: '00:00',
    speaker: 'Speaker 01',
    content:
      'Good morning, everyone. Thank you for joining today\'s project review meeting.',
  },
  {
    time: '00:08',
    speaker: 'Speaker 02',
    content:
      'Let\'s start with the progress from the previous sprint and review the pending tasks.',
  },
  {
    time: '00:17',
    speaker: 'Speaker 01',
    content:
      'The transcription pipeline is working. We have also improved the processing time.',
  },
  {
    time: '00:26',
    speaker: 'Speaker 03',
    content:
      'We should now focus on translation accuracy and the export functionality.',
  },
  {
    time: '00:35',
    speaker: 'Speaker 02',
    content:
      'Agreed. We can prioritize those improvements in the next development cycle.',
  },
];

const features = [
  {
    number: '01',
    icon: FileAudio,
    title: 'Audio transcription',
    description:
      'Convert audio and video recordings into readable text using speech recognition.',
    detail: 'File uploads · YouTube URLs · Timestamped output',
  },
  {
    number: '02',
    icon: Languages,
    title: 'Multilingual translation',
    description:
      'Translate generated transcripts into supported languages through machine translation models.',
    detail: 'MarianMT · NLLB · Hugging Face',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'AI-powered summaries',
    description:
      'Turn lengthy conversations into concise summaries and structured key information.',
    detail: 'Summaries · Key points · Action items',
  },
  {
    number: '04',
    icon: AudioLines,
    title: 'Sentiment analysis',
    description:
      'Analyze the emotional tone of text and gain another perspective on conversation content.',
    detail: 'Text analysis · Sentiment classification',
  },
  {
    number: '05',
    icon: Subtitles,
    title: 'Subtitle generation',
    description:
      'Generate timestamped subtitle files for use in video and media workflows.',
    detail: 'SRT · Timestamped transcript',
  },
  {
    number: '06',
    icon: FileText,
    title: 'Multiple export formats',
    description:
      'Export processed content into formats suitable for documentation and further editing.',
    detail: 'PDF · DOCX · TXT · SRT · JSON · HTML',
  },
];

const workflow = [
  {
    number: '01',
    title: 'Provide your media',
    description:
      'Upload an audio or video file, or provide a supported YouTube URL.',
  },
  {
    number: '02',
    title: 'Process the recording',
    description:
      'The transcription pipeline processes the audio and generates text.',
  },
  {
    number: '03',
    title: 'Refine the content',
    description:
      'Translate, summarize, and analyze the resulting transcript.',
  },
  {
    number: '04',
    title: 'Export your results',
    description:
      'Download the output in a format that fits your workflow.',
  },
];

const technologies = [
  {
    category: 'Backend',
    items: ['Python', 'Flask', 'FFmpeg'],
  },
  {
    category: 'Speech recognition',
    items: ['Whisper', 'faster-whisper'],
  },
  {
    category: 'Language models',
    items: ['Transformers', 'MarianMT', 'NLLB'],
  },
  {
    category: 'Media processing',
    items: ['yt-dlp', 'Audio processing'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs text-orange-400">{number}</span>
      <span className="h-px w-8 bg-orange-400/60" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        {children}
      </span>
    </div>
  );
}

function ProductDemo({ activeTab, onTabChange }: { activeTab: DemoTab; onTabChange: (tab: DemoTab) => void }) {
  const [playing, setPlaying] = useState(false);

  const sidebarItems = [
    { id: 'transcript' as DemoTab, label: 'Transcript', icon: FileText },
    { id: 'translation' as DemoTab, label: 'Translation', icon: Languages },
    { id: 'summary' as DemoTab, label: 'Summary', icon: ListChecks },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'transcript':
        return (
          <div className="space-y-5">
            {transcriptLines.map((line, index) => (
              <div key={line.time} className="flex gap-4">
                <span className="shrink-0 pt-0.5 font-mono text-[11px] text-orange-400/80">
                  {line.time}
                </span>
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                    {line.speaker}
                  </p>
                  <p className="text-sm leading-6 text-neutral-300">
                    {line.content}
                  </p>
                </div>
                {index === 0 && (
                  <span className="sr-only">First transcript entry</span>
                )}
              </div>
            ))}
          </div>
        );
      case 'translation':
        return (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs text-neutral-500">
                English <ArrowRight className="mx-1 inline h-3 w-3" /> Hindi
              </span>
              <span className="rounded border border-white/10 px-2 py-1 text-[10px] text-neutral-500">
                Sample output
              </span>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                Original
              </p>
              <p className="text-sm leading-6 text-neutral-400">
                Good morning, everyone. Thank you for joining today's project
                review meeting.
              </p>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-orange-400">
                Translation
              </p>
              <p className="text-sm leading-7 text-neutral-200">
                सभी को सुप्रभात। आज की परियोजना समीक्षा बैठक में शामिल होने
                के लिए आप सभी का धन्यवाद।
              </p>
            </div>
          </div>
        );
      case 'summary':
        return (
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-neutral-200">
                Meeting summary
              </span>
            </div>

            <p className="text-sm leading-7 text-neutral-400">
              The team reviewed the previous sprint and discussed progress
              across the transcription pipeline. The next development cycle
              will prioritize translation accuracy and export functionality.
            </p>

            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Key points
              </p>
              <ul className="space-y-3">
                {[
                  'Transcription pipeline improvements',
                  'Translation accuracy review',
                  'Export functionality prioritization',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#151715] shadow-2xl shadow-black/30">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-400/10">
            <AudioLines className="h-4 w-4 text-orange-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-100">
              Meeting_recording.mp3
            </p>
            <p className="text-xs text-neutral-500">
              Sample workspace · 00:42
            </p>
          </div>
        </div>

        <span className="flex items-center gap-2 text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Sample processed
        </span>
      </div>

      <div className="grid md:grid-cols-[220px_1fr]">
        <aside className="border-b border-white/10 bg-[#111311] p-4 md:border-b-0 md:border-r">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
            Workspace
          </p>

          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors w-full text-left ${
                    isActive
                      ? 'bg-orange-400/10 text-orange-300'
                      : 'text-neutral-500 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-orange-300' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
              Recording
            </p>

            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              className="flex w-full items-center gap-3 rounded-md border border-white/10 p-3 text-left transition hover:border-orange-400/40"
              aria-label={playing ? 'Pause sample playback' : 'Play sample'}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-neutral-950">
                {playing ? (
                  <span className="h-3 w-3 rounded-sm bg-neutral-950" />
                ) : (
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                )}
              </span>
              <span>
                <span className="block text-xs font-medium text-neutral-300">
                  {playing ? 'Playing sample' : 'Play sample'}
                </span>
                <span className="block text-[10px] text-neutral-600">
                  00:42 duration
                </span>
              </span>
            </button>
            <p className="mt-2 text-[10px] text-neutral-600">
              Interface demonstration only.
            </p>
          </div>
        </aside>

        <div className="min-w-0 p-5 sm:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-neutral-500">Output preview</p>
              <h3 className="mt-1 text-lg font-semibold text-neutral-100">
                Meeting overview
              </h3>
            </div>

            <div className="flex rounded-md border border-white/10 bg-[#101210] p-1">
              {demoTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  className={`rounded px-3 py-2 text-xs transition ${
                    activeTab === tab.id
                      ? 'bg-orange-400 text-neutral-950'
                      : 'text-neutral-500 hover:text-neutral-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {renderTabContent()}

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
            <span className="text-[10px] text-neutral-600">
              Illustrative product interface
            </span>
            <span className="flex items-center gap-2 text-[10px] text-neutral-500">
              <ShieldCheck className="h-3.5 w-3.5" />
              Sample data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  const Icon = feature.icon;

  return (
    <article className="group border-t border-white/10 py-7 transition-colors hover:border-orange-400/50">
      <div className="mb-6 flex items-start justify-between">
        <span className="font-mono text-xs text-neutral-600">
          {feature.number}
        </span>
        <Icon className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-orange-400" />
      </div>

      <h3 className="mb-3 text-lg font-semibold text-neutral-100">
        {feature.title}
      </h3>

      <p className="max-w-sm text-sm leading-7 text-neutral-500">
        {feature.description}
      </p>

      <p className="mt-5 text-[10px] font-medium uppercase tracking-wider text-neutral-600">
        {feature.detail}
      </p>
    </article>
  );
}

export default function Home() {
  const [showAllTech, setShowAllTech] = useState(false);
  const [activeDemoTab, setActiveDemoTab] = useState<DemoTab>('transcript');

  return (
    <main className="min-h-screen overflow-hidden bg-[#101110] text-neutral-100">
      <Header />

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-32 lg:pt-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 border border-white/10 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                AI-powered audio intelligence
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-neutral-100 sm:text-6xl lg:text-7xl">
              Conversations,
              <br />
              <span className="text-orange-400">made useful.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
              TranscriptoBot transforms audio and video recordings into
              searchable transcripts, translations, summaries, and structured
              content.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#product-demo"
                className="group inline-flex items-center gap-3 bg-orange-400 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-orange-300"
              >
                Explore the product
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-6 py-4 text-sm font-medium text-neutral-300 transition hover:border-white/40 hover:text-white"
              >
                View source code
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs text-neutral-300">Speech recognition</p>
                <p className="mt-1 text-[10px] text-neutral-600">
                  Whisper · faster-whisper
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-300">Language processing</p>
                <p className="mt-1 text-[10px] text-neutral-600">
                  Transformers · MarianMT · NLLB
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-300">Application layer</p>
                <p className="mt-1 text-[10px] text-neutral-600">
                  Python · Flask
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-orange-400/[0.04] blur-3xl" />
            <div className="relative border border-white/10 bg-[#151715] p-5 sm:p-7">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Processing pipeline
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-200">
                    From recording to understanding
                  </p>
                </div>
                <AudioLines className="h-5 w-5 text-orange-400" />
              </div>

              <div className="mb-8 flex h-28 items-center justify-center gap-1 overflow-hidden border-y border-white/10 px-3">
                {Array.from({ length: 55 }, (_, index) => {
                  const height =
                    12 +
                    ((index * 17 + index * index * 3) % 65);

                  return (
                    <span
                      key={index}
                      className="w-1 shrink-0 rounded-full bg-orange-400/70"
                      style={{ height: `${height}%` }}
                    />
                  );
                })}
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Mic2,
                    title: 'Audio input',
                    subtitle: 'Recording / video source',
                    number: '01',
                  },
                  {
                    icon: AudioLines,
                    title: 'Speech recognition',
                    subtitle: 'Whisper transcription',
                    number: '02',
                  },
                  {
                    icon: Languages,
                    title: 'Language processing',
                    subtitle: 'Translation and analysis',
                    number: '03',
                  },
                  {
                    icon: FileText,
                    title: 'Structured output',
                    subtitle: 'Transcript and exports',
                    number: '04',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.number}>
                      <div className="flex items-center gap-4 border border-white/[0.07] bg-[#111311] p-3.5">
                        <span className="font-mono text-[10px] text-neutral-600">
                          {item.number}
                        </span>
                        <Icon className="h-4 w-4 text-orange-400" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-neutral-200">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[10px] text-neutral-600">
                            {item.subtitle}
                          </p>
                        </div>
                        <Check className="h-4 w-4 text-emerald-500" />
                      </div>

                      {index !== 3 && (
                        <div className="ml-7 h-3 w-px bg-orange-400/30" />
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-[10px] text-neutral-600">
                Conceptual representation of the processing workflow.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#overview"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-600 transition hover:text-orange-400 lg:flex"
        >
          Scroll to explore
          <ArrowDown className="h-3 w-3" />
        </a>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-32">
          <div>
            <SectionLabel number="01">Overview</SectionLabel>
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-neutral-100 sm:text-4xl">
              More than speech-to-text.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-300">
              TranscriptoBot is an AI-powered transcription and language
              processing application designed to make recorded conversations
              easier to access, understand, and reuse.
            </p>
            <p className="mt-6 text-sm leading-8 text-neutral-500">
              Instead of stopping at raw transcription, the system brings
              together speech recognition, translation, summarization,
              sentiment analysis, and document export in one workflow. It
              provides a foundation for turning unstructured recordings into
              useful information.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm text-orange-400">
              <span className="h-px w-8 bg-orange-400" />
              One workflow. Multiple useful outputs.
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DEMO */}
      <section
        id="product-demo"
        className="scroll-mt-20 border-y border-white/10 bg-[#141614]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionLabel number="02">Product preview</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
                See the output,
                <br />
                not just the promise.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-neutral-500 lg:justify-self-end">
              Explore a sample workspace showing how a recording can become
              structured text, translated content, and a concise meeting
              summary.
            </p>
          </div>

          <ProductDemo activeTab={activeDemoTab} onTabChange={setActiveDemoTab} />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionLabel number="03">Capabilities</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
                A practical toolkit
                <br />
                for recorded content.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-neutral-500 lg:justify-self-end">
              Each capability addresses a different stage of the process, from
              extracting speech to preparing content for downstream use.
            </p>
          </div>

          <motion.div
            className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {features.map((feature) => (
              <motion.div key={feature.number} variants={itemVariants}>
                <FeatureItem feature={feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="how-it-works"
        className="scroll-mt-20 border-y border-white/10 bg-[#141614]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <SectionLabel number="04">Workflow</SectionLabel>

          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
              From media file
              <br />
              to meaningful output.
            </h2>
            <p className="max-w-lg text-sm leading-7 text-neutral-500 lg:justify-self-end">
              The workflow is organized around four clear stages. Each stage
              builds on the output of the previous one.
            </p>
          </div>

          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {workflow.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="relative border-t border-white/15 pt-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-sm text-orange-400">
                    {step.number}
                  </span>
                  {index < workflow.length - 1 && (
                    <ChevronRight className="hidden h-4 w-4 text-neutral-700 lg:block" />
                  )}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-200">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-neutral-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-32">
          <div>
            <SectionLabel number="05">Technology</SectionLabel>
            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
              Built with established tools.
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-neutral-500">
              The application combines a Python backend with established
              open-source speech recognition and language processing
              technologies.
            </p>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-orange-400 transition hover:text-orange-300"
            >
              Explore the repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border-t border-white/10">
            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {technologies
                .slice(0, showAllTech ? technologies.length : 4)
                .map((group, index) => (
                  <motion.div key={group.category} variants={itemVariants} className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-neutral-600">
                        0{index + 1}
                      </span>
                      <span className="text-sm text-neutral-300">
                        {group.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="border border-white/10 px-3 py-2 text-xs text-neutral-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}

              <motion.div variants={itemVariants} className="mt-5">
                <button
                  type="button"
                  onClick={() => setShowAllTech((value) => !value)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 transition hover:text-orange-300"
                >
                  {showAllTech ? 'Show less' : 'Show all technologies'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="border-y border-white/10 bg-[#141614]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <SectionLabel number="06">Engineering approach</SectionLabel>
            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-neutral-100">
              Designed around the work.
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <ShieldCheck className="mb-4 h-5 w-5 text-orange-400" />
              <h3 className="mb-2 text-sm font-semibold text-neutral-200">
                Understandable pipeline
              </h3>
              <p className="text-sm leading-7 text-neutral-500">
                Separate processing stages make the workflow easier to
                understand, maintain, and improve.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Zap className="mb-4 h-5 w-5 text-orange-400" />
              <h3 className="mb-2 text-sm font-semibold text-neutral-200">
                Modular capabilities
              </h3>
              <p className="text-sm leading-7 text-neutral-500">
                Speech recognition, translation, analysis, and export are
                distinct parts of the application.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FileText className="mb-4 h-5 w-5 text-orange-400" />
              <h3 className="mb-2 text-sm font-semibold text-neutral-200">
                Useful output formats
              </h3>
              <p className="text-sm leading-7 text-neutral-500">
                Export options make generated content easier to reuse in
                documentation and media workflows.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Volume2 className="mb-4 h-5 w-5 text-orange-400" />
              <h3 className="mb-2 text-sm font-semibold text-neutral-200">
                Media-focused processing
              </h3>
              <p className="text-sm leading-7 text-neutral-500">
                The system is built around audio and video input rather than
                treating transcription as an isolated text operation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="repository" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="relative overflow-hidden border border-white/10 bg-[#151715] px-6 py-14 sm:px-12 sm:py-20"
          >
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-400/[0.06] blur-3xl" />

            <div className="relative max-w-2xl">
              <SectionLabel number="07">Explore the project</SectionLabel>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-100 sm:text-6xl">
                Make every
                <br />
                conversation count.
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                Explore the source code, understand the architecture, and see
                how speech recognition and language processing come together
                in TranscriptoBot.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div variants={itemVariants}>
                  <a
                    href={GITHUB_REPO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-orange-400 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-orange-300"
                  >
                    View GitHub repository
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-sm font-medium text-neutral-300 transition hover:border-white/40 hover:text-white"
                  >
                    Explore features
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}