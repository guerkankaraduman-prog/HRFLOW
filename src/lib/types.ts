export type Theme = 'dark' | 'light'
export type Lang = 'de' | 'en'
export type CandidateStatus = 'new' | 'rev' | 'int' | 'rej' | 'hired'
export type JobStatus = 'active' | 'draft' | 'closed'
export type Section = 'dashboard' | 'candidates' | 'analyze' | 'jobs' | 'pipeline'

export interface Candidate {
  id: string
  name: string
  role: { de: string; en: string }
  score: number
  status: CandidateStatus
  tags: string[]
  color: string
  initials: string
  email?: string
  location?: string
  experience_years?: number
  appliedAt?: string
}

export interface Job {
  id: string
  title: { de: string; en: string }
  dept: { de: string; en: string }
  applicants: number
  location: string
  status: JobStatus
  postedAt?: string
}

export interface Skill {
  name: string
  score: number
}

export interface AIAnalysisResult {
  name: string
  title: string
  match_score: number
  skills: Skill[]
  summary: string
  experience_years: number
}

export interface PipelineColumn {
  label: { de: string; en: string }
  candidates: { name: string; role: string }[]
}

export interface FunnelItem {
  label: { de: string; en: string }
  count: number
  color: string
}

export interface SourceItem {
  label: string
  pct: number
  color: string
}
