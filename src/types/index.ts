export type ImplementationStatus = 'production' | 'beta' | 'planned' | 'local_engine';

export interface FeatureItem {
  id: string;
  title: string;
  shortDescription: string;
  purpose: string;
  howItWorks: string;
  input: string;
  output: string;
  status: ImplementationStatus;
  statusLabel: string;
  badgeColor?: string;
  iconName: string;
  category: 'core' | 'intelligence' | 'input' | 'output';
  demoType: 'transcript' | 'youtube' | 'translation' | 'summary' | 'sentiment' | 'realtime' | 'export';
}

export interface WorkflowStepItem {
  stepNumber: number;
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  technicalDetails: string;
  inputFormat: string;
  outputFormat: string;
  latencyEstimate: string;
  engineUsed: string;
  iconName: string;
}

export interface TranscriptUtterance {
  id: string;
  speaker: string;
  speakerRole?: string;
  startTime: string;
  endTime: string;
  startSeconds: number;
  text: string;
  confidence: number;
  sentiment?: 'positive' | 'neutral' | 'negative';
}

export interface TranslationVariant {
  languageCode: string;
  languageName: string;
  flag: string;
  utterances: {
    id: string;
    text: string;
  }[];
}

export interface SummaryInsight {
  executiveSummary: string;
  keyPoints: string[];
  actionItems: {
    assignee: string;
    task: string;
    priority: 'high' | 'medium' | 'low';
  }[];
  overallSentiment: {
    score: number; // 0 to 100
    label: 'Highly Positive' | 'Positive' | 'Neutral' | 'Mixed' | 'Challenging';
    breakdown: { positive: number; neutral: number; negative: number };
  };
  topics: string[];
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
  components: {
    name: string;
    tech: string;
    role: string;
    verified: boolean;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'privacy' | 'export';
}

export interface MetricStat {
  label: string;
  value: string;
  description: string;
  tag?: string;
}
