'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  Code2,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  ExternalLink,
  Settings,
  Languages,
  Download,
  Key,
  Filter,
  X,
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

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'privacy' | 'billing';
}

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'What is TranscriptoBot?',
    answer:
      'TranscriptoBot is an open-source AI-powered platform for converting audio and video content into text. It combines Whisper for speech recognition, MarianMT/NLLB for translation, and custom models for summarization.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Which file formats are supported?',
    answer:
      'We support MP3, WAV, M4A, MP4, MOV, AVI, and many other common audio/video formats. You can also provide YouTube URLs directly for transcription.',
    category: 'general'
  },
  {
    id: '3',
    question: 'What languages are supported for transcription?',
    answer:
      'Whisper supports 99+ languages including English, Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, Portuguese, Russian, and many more with varying accuracy levels.',
    category: 'general'
  },
  {
    id: '4',
    question: 'How accurate is the transcription?',
    answer:
      'Accuracy typically ranges from 90-98% depending on audio quality, language, background noise, and speaker clarity. For best results, use clear audio with minimal background noise.',
    category: 'general'
  },
  {
    id: '5',
    question: 'Can I translate transcripts to other languages?',
    answer:
      'Yes! We integrate MarianMT and NLLB-200 models supporting translation to 50+ languages. Translations maintain timestamps and speaker identification.',
    category: 'technical'
  },
  {
    id: '6',
    question: 'What export formats are available?',
    answer:
      'Currently supports TXT (plain text), SRT (subtitles), DOCX (Word documents), and JSON (structured data with timestamps and metadata). More formats coming soon.',
    category: 'technical'
  },
  {
    id: '7',
    question: 'Is there an API available?',
    answer:
      'Yes, we provide a REST API for programmatic access. API documentation is available in the developer docs. Rate limits apply based on your plan.',
    category: 'technical'
  },
  {
    id: '8',
    question: 'What models does TranscriptoBot use?',
    answer:
      'Primary models: Whisper (OpenAI) for ASR, MarianMT (Hugging Face) for translation, and custom transformer models for summarization. We also support faster-whisper for CPU optimization.',
    category: 'technical'
  },
  {
    id: '9',
    question: 'Is my data private and secure?',
    answer:
      'Absolutely. We process files locally/on your infrastructure. No audio data leaves your environment unless you explicitly use cloud processing. We are GDPR compliant and SOC2 ready.',
    category: 'privacy'
  },
  {
    id: '10',
    question: 'Do you store my audio files?',
    answer:
      'By default, files are processed in memory and deleted immediately after transcription. You can enable persistent storage in settings. We never use your data for training.',
    category: 'privacy'
  },
  {
    id: '11',
    question: 'Is TranscriptoBot open source?',
    answer:
      'Yes! TranscriptoBot is MIT licensed. The core platform, models, and web interface are all open source. Community contributions are welcome on GitHub.',
    category: 'general'
  },
  {
    id: '12',
    question: 'How can I contribute to the project?',
    answer:
      'Visit our GitHub repository to report issues, submit pull requests, improve documentation, or help with translations. We follow standard contribution guidelines.',
    category: 'general'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All', icon: HelpCircle },
  { id: 'general', label: 'General', icon: HelpCircle },
  { id: 'technical', label: 'Technical', icon: Settings },
  { id: 'privacy', label: 'Privacy', icon: ShieldCheck },
  { id: 'billing', label: 'Billing', icon: Key },
];

const DOC_SECTIONS = [
  {
    icon: FileText,
    title: 'Getting Started',
    description: 'Quick start guide for new users',
    items: ['Installation', 'Configuration', 'First Transcription', 'Common Workflows']
  },
  {
    icon: Code2,
    title: 'API Reference',
    description: 'Complete REST API documentation',
    items: ['Authentication', 'Endpoints', 'Request/Response', 'Error Codes', 'Rate Limits']
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Customize TranscriptoBot for your needs',
    items: ['Model Selection', 'Language Settings', 'Output Formats', 'Processing Options']
  },
  {
    icon: Languages,
    title: 'Language Support',
    description: 'Supported languages and models',
    items: ['Transcription Languages', 'Translation Pairs', 'Model Variants', 'Accuracy Benchmarks']
  },
  {
    icon: Download,
    title: 'Export Formats',
    description: 'Available output formats and options',
    items: ['TXT', 'SRT', 'DOCX', 'JSON', 'Custom Templates']
  },
  {
    icon: ShieldCheck,
    title: 'Security & Privacy',
    description: 'Data protection and compliance',
    items: ['Data Handling', 'GDPR Compliance', 'Encryption', 'Self-hosting']
  }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string>('getting-started');
  const [openFaqs, setOpenFaqs] = useState<Set<string>>(new Set(['1']));
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'technical' | 'privacy' | 'billing'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredFaqs = useMemo(() => {
    let result = FAQ_DATA;

    if (activeCategory !== 'all') {
      result = result.filter(faq => faq.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: FAQ_DATA.length };
    CATEGORIES.filter(c => c.id !== 'all').forEach(cat => {
      counts[cat.id] = FAQ_DATA.filter(f => f.category === cat.id).length;
    });
    return counts;
  }, []);

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="border-b border-white/[0.1] bg-gradient-to-b from-[#101110] to-[#151715]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10">
            <div className="mx-auto max-w-[800px]">
              <p className="mb-4 flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-orange-500">
                <span className="h-1.5 w-1.5 bg-orange-500" />
                Documentation & FAQ
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Everything you need to{' '}
                <span className="text-orange-500">get started</span>
              </h1>
              <p className="mb-8 text-lg text-neutral-400 leading-relaxed">
                Comprehensive guides, API references, and answers to common questions.
                Whether you're a developer or end user, find what you need here.
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div variants={itemVariants}>
                  <Link
                    href={GITHUB_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                  >
                    <Code2 size={16} />
                    GitHub
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    href="/showcase"
                    className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-neutral-400 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <ExternalLink size={16} />
                    See product
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Search & Filters */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="bg-[#151715] py-12 border-t border-white/[0.1]"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="mx-auto max-w-[800px]">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                  <input
                    type="search"
                    placeholder="Search documentation and FAQ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#191c19] border border-white/[0.1] px-12 py-3 text-base text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="inline-flex items-center gap-2 border border-white/[0.1] bg-[#191c19] px-4 py-3 text-sm text-neutral-400 transition-colors hover:border-orange-500/40 hover:text-white"
                  >
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filters</span>
                    {showFilters && <X className="h-4 w-4" />}
                  </button>

                  {(searchQuery || activeCategory !== 'all') && (
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-2 border border-white/[0.1] bg-[#191c19] px-4 py-3 text-sm text-neutral-400 transition-colors hover:border-orange-500/40 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                      <span className="hidden sm:inline">Clear</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filters */}
              {showFilters && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="mt-4 flex flex-wrap gap-2"
                  role="group"
                  aria-label="FAQ Categories"
                >
                  {CATEGORIES.map((category) => {
                    const Icon = category.icon;
                    const count = categoryCounts[category.id];
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id as typeof activeCategory)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-orange-500 text-black'
                            : 'bg-[#191c19] text-neutral-400 hover:text-white hover:border-orange-500/40 border border-white/10'
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        <span>{category.label}</span>
                        <span className="px-1.5 py-0.5 text-[9px] font-mono rounded-full bg-white/10">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}

              {/* Results count */}
              <div className="mt-4 text-sm text-neutral-500">
                Showing <span className="text-orange-400 font-medium">{filteredFaqs.length}</span> of{' '}
                <span className="text-neutral-400">{FAQ_DATA.length}</span> questions
              </div>
            </div>
          </div>
        </motion.section>

        {/* Documentation Sections */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="bg-[#151715] py-24"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Documentation
              </h2>
              <p className="max-w-[600px] mx-auto text-neutral-400">
                Browse our comprehensive documentation organized by topic.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {DOC_SECTIONS.map((section, index) => {
                const Icon = section.icon;
                const isActive = activeSection === section.title.toLowerCase().replace(/\s+/g, '-');
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveSection(section.title.toLowerCase().replace(/\s+/g, '-'))}
                    variants={itemVariants}
                    className={`group text-left border p-8 transition-all ${
                      isActive
                        ? 'border-orange-500/40 bg-orange-500/5'
                        : 'border-white/[0.1] bg-[#191c19] hover:border-orange-500/40 hover:bg-[#1b1e1b]'
                    }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                      {section.title}
                    </h3>
                    <p className="mb-4 text-sm text-neutral-400 leading-relaxed">
                      {section.description}
                    </p>
                    <ul className="space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-xs text-neutral-500">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="border-t border-white/[0.1] bg-[#151715] py-24"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Frequently asked questions
              </h2>
              <p className="max-w-[600px] mx-auto text-neutral-400">
                Can't find what you're looking for? Check our{' '}
                <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                  GitHub Issues
                </a>{' '}
                or{' '}
                <Link href="/docs" className="text-orange-500 hover:underline">
                  full documentation
                </Link>
                .
              </p>
            </div>
            <motion.div
              className="mx-auto max-w-[800px]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaqs.has(faq.id);
                  return (
                    <motion.details
                      key={faq.id}
                      open={isOpen}
                      onToggle={() => toggleFaq(faq.id)}
                      variants={itemVariants}
                      className="group border border-white/[0.1] bg-[#191c19] transition-all hover:border-orange-500/40"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <div className="flex items-center gap-4">
                          <HelpCircle size={20} className="text-orange-500 flex-shrink-0" />
                          <span className="text-base font-medium text-white">
                            {faq.question}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-500 transition-transform">
                          {isOpen ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                          <span className="text-xs font-medium uppercase tracking-[0.1em] text-neutral-600 capitalize">
                            {faq.category}
                          </span>
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0 border-t border-white/[0.1] text-neutral-400 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.details>
                  );
                })}
                {filteredFaqs.length === 0 && (
                  <div className="text-center py-12 text-neutral-500">
                    <HelpCircle size={48} className="mx-auto mb-4 text-neutral-600" />
                    <p className="text-lg">No results found for "{searchQuery}"</p>
                    <p className="mt-2 text-sm">Try a different search term or browse all FAQs</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="border-t border-white/[0.1] bg-[#151715] py-24"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Still have questions?
            </h2>
            <p className="mb-8 max-w-[600px] mx-auto text-neutral-400">
              Join our community, open an issue, or contribute to the project.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div variants={itemVariants}>
                <a
                  href={`${GITHUB_REPO_URL}/issues/new`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                >
                  Open an issue
                  <ArrowRight size={16} />
                </a>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-2 border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500/10"
                >
                  Explore product
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