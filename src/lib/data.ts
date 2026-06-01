import type { Candidate, Job, PipelineColumn, FunnelItem, SourceItem } from './types'

export const CANDIDATES: Candidate[] = [
  { id: '1', name: 'Lena Hoffmann', role: { de: 'Senior Frontend Dev', en: 'Senior Frontend Dev' }, score: 92, status: 'int', tags: ['React', 'TypeScript', 'AWS'], color: '#6C5CE7', initials: 'LH', email: 'lena.hoffmann@email.de', location: 'Berlin', experience_years: 6, appliedAt: '2025-05-28' },
  { id: '2', name: 'Marco Bauer', role: { de: 'Product Manager', en: 'Product Manager' }, score: 87, status: 'rev', tags: ['Agile', 'OKR', 'Roadmapping'], color: '#00B894', initials: 'MB', email: 'marco.bauer@email.de', location: 'München', experience_years: 8, appliedAt: '2025-05-26' },
  { id: '3', name: 'Sara Müller', role: { de: 'Data Engineer', en: 'Data Engineer' }, score: 81, status: 'new', tags: ['Python', 'Spark', 'dbt'], color: '#FDCB6E', initials: 'SM', email: 'sara.mueller@email.de', location: 'Remote', experience_years: 4, appliedAt: '2025-05-30' },
  { id: '4', name: 'Jonas Weber', role: { de: 'Backend Entwickler', en: 'Backend Developer' }, score: 74, status: 'new', tags: ['Go', 'Kubernetes', 'gRPC'], color: '#A29BFE', initials: 'JW', email: 'jonas.weber@email.de', location: 'Berlin', experience_years: 3, appliedAt: '2025-05-31' },
  { id: '5', name: 'Anika Schreiber', role: { de: 'UX Designerin', en: 'UX Designer' }, score: 88, status: 'int', tags: ['Figma', 'User Research', 'Prototyping'], color: '#E17055', initials: 'AS', email: 'anika.schreiber@email.de', location: 'Hamburg', experience_years: 5, appliedAt: '2025-05-24' },
  { id: '6', name: 'Philipp Krause', role: { de: 'DevOps Engineer', en: 'DevOps Engineer' }, score: 69, status: 'rej', tags: ['Docker', 'Terraform', 'CI/CD'], color: '#636e72', initials: 'PK', email: 'philipp.krause@email.de', location: 'Berlin', experience_years: 4, appliedAt: '2025-05-20' },
  { id: '7', name: 'Mia Fischer', role: { de: 'ML Engineer', en: 'ML Engineer' }, score: 95, status: 'int', tags: ['PyTorch', 'LLMs', 'MLOps'], color: '#00cec9', initials: 'MF', email: 'mia.fischer@email.de', location: 'Remote', experience_years: 5, appliedAt: '2025-05-27' },
  { id: '8', name: 'Tom Richter', role: { de: 'Frontend Entwickler', en: 'Frontend Developer' }, score: 72, status: 'rev', tags: ['Vue', 'Nuxt', 'TailwindCSS'], color: '#fdcb6e', initials: 'TR', email: 'tom.richter@email.de', location: 'Köln', experience_years: 3, appliedAt: '2025-05-29' },
  { id: '9', name: 'Clara Neumann', role: { de: 'Product Designerin', en: 'Product Designer' }, score: 83, status: 'new', tags: ['Design Systems', 'Prototyping'], color: '#a29bfe', initials: 'CN', email: 'clara.neumann@email.de', location: 'München', experience_years: 5, appliedAt: '2025-05-31' },
  { id: '10', name: 'Felix Braun', role: { de: 'Data Scientist', en: 'Data Scientist' }, score: 78, status: 'rev', tags: ['Python', 'SQL', 'Statistics'], color: '#55efc4', initials: 'FB', email: 'felix.braun@email.de', location: 'Remote', experience_years: 4, appliedAt: '2025-05-28' },
]

export const JOBS: Job[] = [
  { id: '1', title: { de: 'Senior Frontend Developer', en: 'Senior Frontend Developer' }, dept: { de: 'Engineering', en: 'Engineering' }, applicants: 34, location: 'Berlin · Remote', status: 'active', postedAt: '2025-05-01' },
  { id: '2', title: { de: 'Product Manager', en: 'Product Manager' }, dept: { de: 'Product', en: 'Product' }, applicants: 21, location: 'München', status: 'active', postedAt: '2025-05-05' },
  { id: '3', title: { de: 'Data Engineer', en: 'Data Engineer' }, dept: { de: 'Data & Analytics', en: 'Data & Analytics' }, applicants: 18, location: 'Remote', status: 'active', postedAt: '2025-05-10' },
  { id: '4', title: { de: 'UX/UI Designer', en: 'UX/UI Designer' }, dept: { de: 'Design', en: 'Design' }, applicants: 27, location: 'Hamburg · Hybrid', status: 'active', postedAt: '2025-05-03' },
  { id: '5', title: { de: 'DevOps Engineer', en: 'DevOps Engineer' }, dept: { de: 'Infrastruktur', en: 'Infrastructure' }, applicants: 12, location: 'Berlin', status: 'active', postedAt: '2025-05-12' },
  { id: '6', title: { de: 'ML Engineer', en: 'ML Engineer' }, dept: { de: 'KI-Forschung', en: 'AI Research' }, applicants: 9, location: 'Remote', status: 'draft', postedAt: '2025-06-01' },
  { id: '7', title: { de: 'Sales Manager DACH', en: 'Sales Manager DACH' }, dept: { de: 'Vertrieb', en: 'Sales' }, applicants: 0, location: 'Frankfurt', status: 'draft', postedAt: '2025-06-01' },
  { id: '8', title: { de: 'Backend Developer (Go)', en: 'Backend Developer (Go)' }, dept: { de: 'Engineering', en: 'Engineering' }, applicants: 15, location: 'Berlin · Remote', status: 'active', postedAt: '2025-05-15' },
]

export const PIPELINE_COLUMNS: PipelineColumn[] = [
  { label: { de: 'Beworben', en: 'Applied' }, candidates: [{ name: 'Lena H.', role: 'Frontend' }, { name: 'Tom R.', role: 'Frontend' }, { name: 'Clara N.', role: 'Design' }] },
  { label: { de: 'Screening', en: 'Screening' }, candidates: [{ name: 'Marco B.', role: 'PM' }, { name: 'Felix B.', role: 'Data' }, { name: 'Jonas W.', role: 'Backend' }] },
  { label: { de: 'Interview', en: 'Interview' }, candidates: [{ name: 'Anika S.', role: 'Design' }, { name: 'Mia F.', role: 'ML' }, { name: 'Sara M.', role: 'Data' }] },
  { label: { de: 'Angebot', en: 'Offer' }, candidates: [{ name: 'Philipp K.', role: 'DevOps' }] },
  { label: { de: 'Eingestellt', en: 'Hired' }, candidates: [] },
]

export const FUNNEL_DATA: FunnelItem[] = [
  { label: { de: 'Beworben', en: 'Applied' }, count: 312, color: 'var(--accent)' },
  { label: { de: 'Gesichtet', en: 'Reviewed' }, count: 224, color: 'var(--accent2)' },
  { label: { de: 'Interview', en: 'Interview' }, count: 106, color: 'var(--green)' },
  { label: { de: 'Angebot', en: 'Offer' }, count: 44, color: 'var(--amber)' },
  { label: { de: 'Eingestellt', en: 'Hired' }, count: 26, color: 'var(--green)' },
]

export const SOURCE_DATA: SourceItem[] = [
  { label: 'LinkedIn', pct: 42, color: 'var(--accent)' },
  { label: 'Indeed', pct: 24, color: 'var(--accent2)' },
  { label: 'Referral', pct: 16, color: 'var(--green)' },
  { label: 'Direkt / Direct', pct: 11, color: 'var(--amber)' },
  { label: 'Sonstige / Other', pct: 7, color: 'var(--bg3)' },
]

export const WEEKLY_HIRES = {
  de: ['KW18','KW19','KW20','KW21','KW22','KW23','KW24','KW25'],
  en: ['W18','W19','W20','W21','W22','W23','W24','W25'],
  values: [4, 7, 5, 9, 12, 8, 11, 14],
}
