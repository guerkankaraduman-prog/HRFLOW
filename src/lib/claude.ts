import type { AIAnalysisResult } from './types'

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY

/**
 * Analyze a resume text using Claude Sonnet.
 * Returns structured candidate profile with match score and skills.
 *
 * ⚠️ In production, route this through your own backend to protect the API key.
 */
export async function analyzeResume(resumeText: string): Promise<AIAnalysisResult> {
  if (!API_KEY || API_KEY === 'sk-ant-your-key-here') {
    // Return mock data if no API key is configured
    return getMockAnalysis()
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are an expert HR assistant. Analyze the following resume and return ONLY a valid JSON object (no markdown, no explanation) with this exact structure:
{
  "name": "Full Name",
  "title": "Job Title · X years experience",
  "experience_years": 5,
  "match_score": 85,
  "skills": [
    { "name": "Skill Name", "score": 90 }
  ],
  "summary": "2-3 sentence professional summary with a hiring recommendation."
}

Include 5-6 most relevant skills. match_score is 0-100 based on general senior tech role suitability.

Resume:
${resumeText}`,
        },
      ],
    }),
  })

  if (!response.ok) {
    console.error('Claude API error:', response.status)
    return getMockAnalysis()
  }

  const data = await response.json()
  const text = data.content
    .filter((c: { type: string }) => c.type === 'text')
    .map((c: { text: string }) => c.text)
    .join('')

  try {
    const clean = text.replace(/```json|```/g, '').trim()
    return JSON.parse(clean) as AIAnalysisResult
  } catch {
    console.error('Failed to parse Claude response:', text)
    return getMockAnalysis()
  }
}

/**
 * Extract text from a File object.
 * For real PDF parsing, integrate pdf.js or send to backend.
 */
export async function extractTextFromFile(file: File): Promise<string> {
  // For plain text / simple extraction
  if (file.type === 'text/plain') {
    return file.text()
  }
  // For PDF/DOCX, return filename as placeholder (integrate pdf.js for real extraction)
  return `[Resume file: ${file.name} — integrate pdf.js or backend parser for full text extraction]`
}

function getMockAnalysis(): AIAnalysisResult {
  const mocks: AIAnalysisResult[] = [
    {
      name: 'Lena Hoffmann',
      title: 'Senior Full-Stack Developer · 6 years',
      experience_years: 6,
      match_score: 92,
      skills: [
        { name: 'React / Next.js', score: 95 },
        { name: 'TypeScript', score: 90 },
        { name: 'Cloud (AWS)', score: 82 },
        { name: 'Node.js', score: 88 },
        { name: 'CI/CD', score: 75 },
        { name: 'Soft Skills', score: 85 },
      ],
      summary:
        'Exceptional candidate with strong full-stack profile. Outstanding cloud expertise and agile leadership. Recommendation: Invite directly to technical interview.',
    },
    {
      name: 'Mia Fischer',
      title: 'ML Engineer · 4 years',
      experience_years: 4,
      match_score: 95,
      skills: [
        { name: 'PyTorch', score: 97 },
        { name: 'LLMs / RAG', score: 93 },
        { name: 'MLOps', score: 88 },
        { name: 'Python', score: 95 },
        { name: 'Data Engineering', score: 78 },
        { name: 'Research', score: 85 },
      ],
      summary:
        'Outstanding ML profile with cutting-edge LLM expertise. Rare combination of research depth and production MLOps skills. Immediate interview strongly recommended.',
    },
  ]
  return mocks[Math.floor(Math.random() * mocks.length)]
}
