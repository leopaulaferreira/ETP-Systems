import { CloudCog, Fingerprint, KeyRound, ShieldCheck } from 'lucide-react'
import type { Assessment } from '../../../types/assessment'
const topics = {
  privacy: { icon: Fingerprint, colors: 'border-violet-400/20 bg-violet-400/10 text-violet-300' },
  security: { icon: ShieldCheck, colors: 'border-teal-400/20 bg-teal-400/10 text-teal-300' },
  cloud: { icon: CloudCog, colors: 'border-orange-400/20 bg-orange-400/10 text-orange-300' },
  access: { icon: KeyRound, colors: 'border-blue-400/20 bg-blue-400/10 text-blue-300' },
}
export default function AssessmentIcon({ topic }: { topic: Assessment['topic'] }) {
  const { icon: Icon, colors } = topics[topic]
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${colors}`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
    </span>
  )
}
